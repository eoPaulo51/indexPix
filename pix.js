function esquivar(){
    var botao = document.querySelector("#btnNao");

    botao.style.position = "absolute";
    botao.style.top = mudarPosicao(10, 90);
    botao.style.left = mudarPosicao(10, 90);
}

function mudarPosicao(min, max){
    let position = Math.floor(Math.random() * (max - min) + min);

    return position + "%";
}

function respostaSim(){
    alert("Chave Pix: c25217d4-948f-4a30-b5c6-eab96276a17")
}

function esquivarMobile(){
    esquivar();
    setTimeout(esquivarMobile, 150);
}

if(window.innerWidth <= 450){
    esquivarMobile();
   // alert("Mobile");
}
