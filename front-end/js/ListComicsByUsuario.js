var view="";
var aux =0;

function ListComicsByUsuario(id){
    limparView();

    fetch("http://localhost:8080/api/usuarios/"+id).then(response =>{return response.json();}).then(usrDados => getMarvelDadosComics(usrDados["comics"]));
}

function getMarvelDadosComics(comics){

    for(var i = 0; i<comics["length"];i++) {
        fetch("http://gateway.marvel.com:80/v1/public/comics/"+comics[i]["id"]+"?" +
            "ts=1624898825&apikey=89e43bbf153bb63197497529c991b6b1&hash=8a26f26cc303da6bd1a78b56b43d1b70" +
            "").then(response => {
            return response.json();
        }).then(marvelDados => setComicList(marvelDados,comics));

    }
}

function setComicList(urlImg,comics){

    console.log(urlImg);

    view +="<div class=\"card\" style=\"width: 18rem; margin-right: 30px\">\n" +
        "  <img src=\" "+urlImg["data"]["results"][0]["images"][0]["path"]+"."+urlImg["data"]["results"][0]["images"][0]["extension"]+"\" class=\"card-img-top\" alt=\"\" width=''>\n" +
        "  <div class=\"card-body\">\n" +
        "    <h5 class=\"card-title\">"+comics[aux]["titulo"]+"</h5>\n" +
        "    <p class=\"card-text\">"+comics[aux]["descricao"]+"</p>\n" +
        "  </div>" +
        "</div>" ;
    aux++;
    document.getElementById("view").innerHTML = view;

}

function limparView(){
    document.getElementById("view").innerHTML = "";
}