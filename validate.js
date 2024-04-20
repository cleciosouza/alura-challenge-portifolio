//Seu JavaScript de validação aqui
const btnMode = document.querySelector('.btnMode');
const viewPort = document.body;

btnMode.addEventListener('click', darkMode);
function darkMode() {
    
    viewPort.classList.toggle("dark-mode");
}

