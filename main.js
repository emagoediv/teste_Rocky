// pegando elementos
const btnMobile = document.getElementById('btn-mobile')
const btnVoltarTopo = document.getElementById('l-top')

// escutando evento de clicks
btnMobile.addEventListener('click', aparecerMenu)
btnVoltarTopo.addEventListener('click',rolar)

// mudar imagens conforme tamanho da tela a qual o site for carregado

if(window.screen.width <= 950){
  logo.src = "images/mobile/logo.png"
  f1.style.backgroundImage = 'url(images/mobile/s3ft1.png), url(images/web/bg.png)'
  f2.style.backgroundImage = 'url(images/mobile/s3ft2.png)'
  f3.style.backgroundImage = 'url(images/mobile/s3ft3.png)'
  f4.style.backgroundImage = 'url(images/mobile/s4ft1.png)'
  f5.style.backgroundImage = 'url(images/mobile/s4ft2.png)'
  f6.style.backgroundImage = 'url(images/mobile/s4ft3.png)'
}else if(window.screen.width >= 950){
  logo.src = "images/web/logo.png"
  f1.style.backgroundImage = 'url(images/web/s3ft1.png)'
  f2.style.backgroundImage = 'url(images/web/s3ft2.png)'
  f3.style.backgroundImage = 'url(images/web/s3ft3.png)'
  f4.style.backgroundImage = 'url(images/web/s4ft1.png)'
  f5.style.backgroundImage = 'url(images/web/s4ft2.png)'
  f6.style.backgroundImage = 'url(images/web/s4ft3.png)'
}

// funcoes


  // efeito de rolagem do btnVoltar
function rolar(){
window.scroll({ 
  top: 0,
  left: 0,
  behavior: 'smooth'
})
}


// adiciona ou remove class que faz aparecer o menu ul no css
function aparecerMenu(){
  const nav = document.getElementById('nav') 
  nav.classList.toggle('active')
}