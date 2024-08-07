const mapaAtivo = {
    'github' : 'img/github-ativo.png',
    'linkedin' : 'img/linkedin-ativo.png',
    'curriculo' : 'img/curriculo-ativo.png',
    'github-mobile' : 'img/github-ativo.png',
    'linkedin-mobile' : 'img/linkedin-ativo.png',
    'curriculo-mobile' : 'img/curriculo-ativo.png'
}

const mapaOriginal = {
    'github' : 'img/github.png',
    'linkedin' : 'img/linkedin.png',
    'curriculo' : 'img/curriculo.png',
    'github-mobile' : 'img/github.png',
    'linkedin-mobile' : 'img/linkedin.png',
    'curriculo-mobile' : 'img/curriculo.png'
}

const listaImagem = document.querySelectorAll('.imagem')

listaImagem.forEach(function(element) {
    element.addEventListener('mouseover', function(){
        element.setAttribute('src', mapaAtivo[element.id])
    })

    element.addEventListener('mouseout', function() {
        element.setAttribute('src', mapaOriginal[element.id])
    })
})
    
console.log(listaImagem)




