const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 900;
    if(anchoFondo <= 100){
    fondo.style.width = anchoFondo + '%';
    }
}