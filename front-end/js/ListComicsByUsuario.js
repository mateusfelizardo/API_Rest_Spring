var view="";
var aux =0;
const horas = new Date();

function ListComicsByUsuario(id){
    limparView();

    fetch("http://localhost:8080/api/usuarios/"+id).then(response =>{return response.json();}).then(usrDados => getMarvelDadosComics(usrDados["comics"],usrDados));
}

function getMarvelDadosComics(comics,dadosUsr){
    document.getElementById("usuario").innerHTML = "<h1 style='text-align: center'>Lista de Comics de "+ dadosUsr["nome"]+"</h1>";

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

    view +="<div class=\"card\" style=\"width: 18rem; margin-bottom: 60px;\">\n" +
        "  <img src=\" "+urlImg["data"]["results"][0]["images"][0]["path"]+"."+urlImg["data"]["results"][0]["images"][0]["extension"]+"\" class=\"card-img-top\" alt=\"\" width=''>\n" +
        "  <div class=\"card-body\" style=\"\">\n" +
        "    <h5 class=\"card-title\">"+comics[aux]["titulo"]+"</h5>\n" +
        "    <p class=\"card-text\">"+comics[aux]["isbn"]+"</p>" +
        "    <p class=\"card-text\">$"+comics[aux]["preco"]+"</p>" +
        "    <p class=\"card-text\">"+desconto(comics[aux]["isbn"])+"</p>" +
        "    <p class=\"card-text\">Descrição: "+comics[aux]["descricao"].substr(0,250)+"</p>\n" +
        "  </div>" +
        "</div>" ;
    aux++;
    document.getElementById("view").innerHTML = view;

}
function desconto(isbn){
    var desc="";
    if (horas.getDay()==0){
        desc="Hoje é Domingo, o Comic tem o ISNB "+isbn+", ou seja seu desconto será as ";
    }else if (horas.getDay()==1){
        desc="Hoje é Segunda-feira, o Comic tem o ISNB "+isbn+", ou seja seu desconto será as ";
    }else if (horas.getDay()==2){
        desc="Hoje é Terça-feira, o Comic tem o ISNB "+isbn+", ou seja seu desconto será as ";
    }else if (horas.getDay()==3){
        desc="Hoje é Quarta-feira, o Comic tem o ISNB "+isbn+", ou seja seu desconto será as ";
    }else if (horas.getDay()==4){
        desc="Hoje é Quita-feira, o Comic tem o ISNB "+isbn+", ou seja seu desconto será as ";
    }else if (horas.getDay()==5){
        desc="Hoje é Sexta-feira, o Comic tem o ISNB "+isbn+", ou seja seu desconto será as ";
    }else if (horas.getDay()==6){
        desc="Hoje é Sábado, o Comic tem o ISNB "+isbn+", ou seja seu desconto será as ";
    }
    if(isbn[isbn.length-1]==0 || isbn[isbn.length-1] ==1 ){
        desc+=" Segundas-feiras;"
    }else if(isbn[isbn.length-1]==2 || isbn[isbn.length-1] ==3 ){
        desc+=" Terças-feiras;"
    }else if(isbn[isbn.length-1]==4 || isbn[isbn.length-1] ==5 ){
        desc+=" Quartas-feiras;"
    }else if(isbn[isbn.length-1]==6 || isbn[isbn.length-1] ==7 ){
        desc+=" Quintas-feiras;"
    }else if(isbn[isbn.length-1]==8 || isbn[isbn.length-1] ==9 ){
        desc+=" Sextas-feiras;"
    }

    return desc;
}

function limparView(){
    document.getElementById("view").innerHTML = "";
}