<?php
//pego o arquivo
$file = $_SERVER['DOCUMENT_ROOT'] . "/db/database.txt";
//pego o cep da requisição 
$conteudo = $_POST['cep'] . ',';

//se o arquivo ja estiver criado
if(file_exists($file)){

    $database = file_get_contents($file);

    //transforma o conteudo da base em array
    $arr = explode(",", $database);

    //verifica se o cep ja esta lá dentro
    foreach($arr as $a){
        if($_POST['cep'] == $a){
            echo "true";
            exit;
        }
    }
    //adiciona o cep novo
    $conteudo = $database . $conteudo;
}
//abre o arquivo e escreve o novo cep
$file = fopen($file,"wb");
fwrite($file,$conteudo);
fclose($file);