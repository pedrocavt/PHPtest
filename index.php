<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <title>Teste Vaga</title>
  </head>
  <body class="bg-dark text-light">
    <div class="container">
        <div class="jumbotron p-4 mb-4 bg-danger">
            <h1>Busca Endereço</h1>
            <p>Coloque um cep e descubra o endereço</p>
        
        <hr class="border-light">

        <div class="d-flex justify-content-start">
            <form id="form"  class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">CEP:</label>
                <div style="display:flex">
                    <input type="text" maxlength="9" name="cep" minlenght="9 "class="form-control" id="cep" onkeyup="mascara_cep()" >
                    <button type="submit" class="ml-2 btn btn-primary ">Enviar</button>
                </div>
            </form>
        
        </div>
        <div class="result">
        </div> 

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
  </body>
</html>