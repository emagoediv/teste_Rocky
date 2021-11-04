const btnMobile = document.getElementById('btn-mobile')

function aparecerMenu(){
  const nav = document.getElementById('nav') 
  nav.classList.toggle('active')

}

btnMobile.addEventListener('click', aparecerMenu)



setInterval( () =>{
if(window.screen.width <= 950){
  logo.src = "images/mobile/logo.png"
  f1.style.backgroundImage = 'url(images/mobile/s3ft1.png)'
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
},1000)
