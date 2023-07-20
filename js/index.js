


const htmlIcon = document.querySelector('#htmlIcon')
const cssIcon = document.querySelector('#cssIcon')
const jsIcon = document.querySelector('#jsIcon')
const bootstrapIcon = document.querySelector('#bootstrapIcon')
const sassIcon = document.querySelector('#sassIcon')
const reactIcon = document.querySelector('#reactIcon')
const btnVerMais = document.querySelector('.btn-verMaisExterno')

const projeto3 = document.querySelector('.projeto3')
const projeto4 = document.querySelector('.projeto4')
const projeto5 = document.querySelector('.projeto5')



btnVerMais.addEventListener('click', e => {
    projeto3.classList.remove('d-none')
    projeto4.classList.remove('d-none')
    projeto5.classList.remove('d-none')
    btnVerMais.classList.add('d-none')
})



function entrou(icon){
    if (icon == 'html')  htmlIcon.classList.add('fa-beat')
    
    if (icon == 'css') cssIcon.classList.add('fa-beat')
    
    if (icon == 'js')  jsIcon.classList.add('fa-beat')
    
    if (icon == 'bootstrap')  bootstrapIcon.classList.add('fa-beat')
    
    if (icon == 'sass')  sassIcon.classList.add('fa-beat')
    
    if (icon == 'react') reactIcon.classList.add('fa-beat')

}

 

function saiu(icon){
    if (icon == 'html')  htmlIcon.classList.remove('fa-beat')
    
    if (icon == 'css') cssIcon.classList.remove('fa-beat')
    
    if (icon == 'js')  jsIcon.classList.remove('fa-beat')
    
    if (icon == 'bootstrap')  bootstrapIcon.classList.remove('fa-beat')
    
    if (icon == 'sass')  sassIcon.classList.remove('fa-beat')
    
    if (icon == 'react') reactIcon.classList.remove('fa-beat')
}

// const githubIconeSobremim = document.querySelector('#githubIconeSobremim')
// const instagramIconeSobremim = document.querySelector('#instagramIconeSobremim')


// function mudarLetra(icone) {

//     if(icone == "githubIconeSobremim") githubIconeSobremim.innerHTML = 'Github'
    
//     if(icone == "instagramIconeSobremim")  instagramIconeSobremim.innerHTML = 'Instagram'
    
// }

// function removerLetra(icone){

//     if(icone === "githubIconeSobremim" ) githubIconeSobremim.innerHTML = "..."
    
//     if(icone === "instagramIconeSobremim" )  instagramIconeSobremim.innerHTML = "..."

// }
