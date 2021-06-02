const value = document.querySelector("#cep");
const form = document.querySelector("#form");

form.addEventListener('submit', (e) => {
    //paro o submit
    e.preventDefault();

    var result = document.querySelector(".result");  
    let mensagem = document.createElement('p');
    result.innerHTML = '';


    //formato o cep
    let cep = value.value.replace("-", "");
    if(cep.length < 9){

        mensagem.innerHTML = "O CEP esta incompleto";
                
        result.appendChild(mensagem);
        
        return;
    }

    dados = new FormData()
    dados.append('cep', cep)



    //mando o cep para a base para ver se ja foi consultado
    fetch("db/index.php", {
        method: 'POST',
        body:dados
      })
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            

            //se já foi consultado ....
            if(data == "true" ){

                mensagem.innerHTML = "Esse CEP já foi consultado";
                
                result.appendChild(mensagem);
                
                return;
            }

            //se não foi ele tras os resultados
            getEndereco(cep, result, mensagem);
        })

    })

function getEndereco(cep, result, mensagem){

    const options = {
        method:'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`https://viacep.com.br/ws/${cep}/xml/`, options)
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        let parser = new DOMParser(),
        xmlDoc = parser.parseFromString(data, 'text/xml');

        if(typeof xmlDoc.getElementsByTagName('erro')[0] !== "undefined"){
            mensagem.innerHTML = "CEP não encontrado";
                
            result.appendChild(mensagem);
            return
        }
        
        let logadouro = document.createElement('p');
        let complemento = document.createElement('p');
        let bairro = document.createElement('p');
        let localidade = document.createElement('p');
        let uf = document.createElement('p');
        let ibge = document.createElement('p');
        let gia = document.createElement('p');
        let ddd = document.createElement('p');

        logadouro.innerHTML = "Logradouro: " + xmlDoc.getElementsByTagName('logradouro')[0].innerHTML; 
        complemento.innerHTML = "Complemento: " + xmlDoc.getElementsByTagName('complemento')[0].innerHTML; 
        bairro.innerHTML = "Bairro: " + xmlDoc.getElementsByTagName('bairro')[0].innerHTML;
        localidade.innerHTML = "Localidade: "  + xmlDoc.getElementsByTagName('localidade')[0].innerHTML;
        uf.innerHTML = "UF: " + xmlDoc.getElementsByTagName('uf')[0].innerHTML;
        ibge.innerHTML = "IBGE: " + xmlDoc.getElementsByTagName('ibge')[0].innerHTML;
        gia.innerHTML = "GIA: "+ xmlDoc.getElementsByTagName('gia')[0].innerHTML;
        ddd.innerHTML = "DDD: " + xmlDoc.getElementsByTagName('ddd')[0].innerHTML;
        
        
        result.appendChild(logadouro);
        result.appendChild(complemento);
        result.appendChild(bairro);
        result.appendChild(localidade);
        result.appendChild(uf);
        result.appendChild(gia);
        result.appendChild(ddd);
    })
    .catch(e => console.log(e.message));
}

//mascara para o cep
function mascara_cep(){
    var cep =  document.querySelector("#cep");

    if(cep.value.length == 5){
        cep.value += "-";
    }
}
