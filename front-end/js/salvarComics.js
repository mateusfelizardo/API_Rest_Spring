var idComic ;
var idQry;
var tituloComic;
var preco;
var isnb;
var descricao;

function buscarComicApi(){

    getValuesComic();

    if(idQry != "") {
        fetch("http://gateway.marvel.com:80/v1/public/comics/" + idQry +"?" +
            "ts=1624898825&apikey=89e43bbf153bb63197497529c991b6b1&hash=8a26f26cc303da6bd1a78b56b43d1b70" +
            "").then(response => {
            return response.json();
        }).then(marvelDados =>setDadosCampos(marvelDados));
    }else{
        alert("ID de Pesquisa em branco");
    }

}
function setDadosCampos(comicEsp){

    if (comicEsp["code"]=200 && comicEsp["status"] == "Ok" ) {

        document.getElementById("titulo").value = comicEsp["data"]["results"][0]["title"];
        document.getElementById("id").value = comicEsp["data"]["results"][0]["id"];
        if (comicEsp["data"]["results"][0]["price"] != "") {
            document.getElementById("preco").value=comicEsp["data"]["results"][0]["prices"][0]["price"];
        }else{
            document.getElementById("preco").value = "" ;
        }
        if (comicEsp["data"]["results"][0]["isbn"] != "") {
            document.getElementById("isbn").value = comicEsp["data"]["results"][0]["isbn"];
        }else {
            document.getElementById("isbn").value = "";
        }

        if (comicEsp["data"]["results"][0]["description"] != "") {
            document.getElementById("descricao").value = comicEsp["data"]["results"][0]["description"];
        }else{
            document.getElementById("descricao").value = "";
        }
        document.getElementById("imgComic").innerHTML = "<img style='margin-bottom:50px ' border=\"1\" src="+getUrlImgView(comicEsp)+">";
    }else{
        alert("ID de comic nao encontrado");
    }
}
function getUrlImgView(apiData){
    try {
        url = apiData["data"]["results"][0]["thumbnail"]["path"];
        extensao = apiData["data"]["results"][0]["thumbnail"]["extension"];
    }catch (e){
        return url = "";
    }
    return url+"."+extensao;

}

function salvarComic() {

    if(getValuesComic()) {

        var xmlhttp = new XMLHttpRequest();
        var theUrl = "http://localhost:8080/api/comics";

        xmlhttp.open("POST", theUrl);
        xmlhttp.setRequestHeader("Content-Type", "application/json");

        xmlhttp.send(JSON.stringify({
            "id": idComic,
            "descricao": descricao,
            "isbn": isnb,
            "preco": preco,
            "titulo": tituloComic
        }));
        alert("Comic cadastrada com sucesso!!");
        console.log(idComic+15);
    }else {
        alert("Ha campos em branco ou a Comic nao foi pesquisada");
    }
}

function getValuesComic(){

    idComic = document.getElementById("id").value;
    idQry = document.getElementById("idQry").value;
    tituloComic = document.getElementById("titulo").value;
    preco = document.getElementById("preco").value;
    isnb = document.getElementById("isbn").value;
    descricao = document.getElementById("descricao").value;

   return dadosComicValidantion(idComic,idQry,tituloComic,preco,isnb,descricao);

}


function dadosComicValidantion(idComic,idQry,titulo,preco,isnb,descricao) {
    if (idComic == "") {
        return false;
    } else if (titulo == "") {
        return false;
    } else if (preco == "") {
        return false;
    } else if (isnb == "") {
        return false;
    } else if (descricao == "") {
        return false;
    } else {
        return true;
    }
}
