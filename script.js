const linkBt = document.querySelectorAll('.link__botao')
const imagem = document.querySelector('.imagem')
const seletor = imagem.getAttribute('alt')

linkBt.addEventListener('click', ()=>{
    imagem.setAttribute('src', `img/${seletor}.png`)
})

