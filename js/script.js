function mudarThema() {
    let botao = document.getElementById("darkTheme");
    botao.classList.toggle("dark");
    document.body.classList.toggle("darkColor");
}

function aumentarFonte() {
    document.body.classList.add("fonte1");
    document.body.classList.remove("fonte2");

}

function diminuirFonte() {
    
    document.body.classList.add("fonte2");
    document.body.classList.remove("fonte1");
}

function myFunction() {
  alert("Site em desenvolvimento");
}