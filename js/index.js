
const htmlIcon = document.querySelector('#htmlIcon')
const cssIcon = document.querySelector('#cssIcon')
const jsIcon = document.querySelector('#jsIcon')
const bootstrapIcon = document.querySelector('#bootstrapIcon')
const sassIcon = document.querySelector('#sassIcon')
const reactIcon = document.querySelector('#reactIcon')



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
