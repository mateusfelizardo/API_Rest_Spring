function allUsuarios(){

    fetch("http://localhost:8080/api/usuarios").then(response =>{return response.json();}).then(data => setView(data))
}
function setView(dados){
    var view = "<div class = \"container\" style=\"width: 60%; padding-bottom: 30px;\">";

    for (var i=0;i<dados["length"];i++){
        view+="<a onclick=\"return ListComicsByUsuario("+dados[i]["id"]+")\"><div class = \"card shadow-sm bg-white rounded\" style = \"magin-top: 20px;\">\n" +
            "                    <div style=\"width: 60%; padding-bottom: 30px;\"class = \"card-body\">\n" +
            "                        <p class=\"card-subtitle mb-2 text-muted\" style=\"font-size: 0.8rem;\">\n" +
            "                        <h4 class=\"card-title\" style=\"font-weight: bold; color: black; padding-top: 5px;\">"+dados[i]["nome"]+"</h4>\n" +
            "                            <p>"+dados[i]["email"]+"</p>\n" +
            "                            <p>"+dados[i]["data"]+"</p>\n" +
            "                        </p>\n" +
            "                    </div>\n" +
            "                </div></a>";
    }
    view +="</div>";
    document.getElementById("view").innerHTML = view;
    /*console.log(dados)*/
}