var listComic = "";
var nome;
var email;
var cpf;
var dataNasc;
var imgsComics = " ";
function getAllComics(){
    fetch("http://localhost:8080/api/comics/").then(response =>{return response.json();}).then(allComics => createListComic(allComics));
    document.getElementById("imgList").innerHTML="";
    imgsComics = "";
    listComic = "";
}
function createListComic(allComics){

    if(allComics["length"]>0) {
        addComcisImagen(allComics);

    }else{
        alert("Não ha comics cadastradas para atribuir ao usuario!!");
    }
}
function addComcisImagen(allComics){

    for (var i=0; i<allComics["length"];i++){
        fetch("http://gateway.marvel.com:80/v1/public/comics/"+allComics[i]["id"]+"?" +
            "ts=1624898825&apikey=89e43bbf153bb63197497529c991b6b1&hash=8a26f26cc303da6bd1a78b56b43d1b70" +
            "").then(response => {
            return response.json();
        }).then(marvelDados => setImgComic(marvelDados));
    }

}
function setImgComic(dataApi){
    imgsComics +="<button  style=\"background-color: white; padding: 5px; border-color: white\" onClick=\"saveComic("+dataApi["data"]["results"][0]["id"]+")\" id=\""+dataApi["data"]["results"][0]["id"]+"\"  class=\"btn btn-primary\">" +
                    "<img style=\"width: 150px; height: 223px;\" aria-describedby=\"Olhaa\" src=\" "+getUrlImgView(dataApi)+"\">" +
                    "" +
                    "</button>";
    document.getElementById("imgList").innerHTML = imgsComics;

}
function saveComic(id){

    console.log(id);
    if (listComic == "") {
        listComic += '{ "id":'+id+'}';
    }else {
        listComic += ',{"id":'+id+'}' ;
    }

    document.getElementById(id).disabled = true;



    console.log(listComic);
}
function salvarUsuario(){

    if(getValuesUsuario() && listComic !=""){

        var xmlhttp = new XMLHttpRequest();
        var theUrl = "http://localhost:8080/api/usuarios";

        xmlhttp.open("POST", theUrl);
        xmlhttp.setRequestHeader("Content-Type", "application/json");

        xmlhttp.send('{"nome": "'+nome+'", "cpf": "'+cpf+'","email": "'+email+'", "data": "'+dataNasc+'","comics":['+listComic+']}');

        alert("Usuario cadastrado com sucesso!!");

    }else if (listComic ==""){
        alert("Nenhum comic escolhido para o usuario")
    } else {
        alert("Ha campos em branco");
    }

}
function getValuesUsuario(){
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    dataNasc = (document.getElementById("data").value).split('-').reverse().join('-');
    cpf = document.getElementById("cpf").value;


    return dadosUsuariosValidation(nome,email,dataNasc,cpf);
}

function dadosUsuariosValidation(nome,email,dataNasc,cpf){

    if (nome == "") {
        return false;
    } else if (email == "") {
        return false;
    } else if (dataNasc == "") {
        return false;
    } else if (cpf == "") {
        return false;
    } else {
        return true;
    }
}
