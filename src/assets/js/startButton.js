const botaoArrowUp = document.querySelector('.main__button');
const botaoStart = document.querySelector('.main__start');

botaoArrowUp.addEventListener('click', () =>{
    console.log(botaoArrowUp, botaoStart);
    botaoStart.classList.toggle('main__start--ativo');
    botaoArrowUp.classList.toggle('main__start--desativo');
})