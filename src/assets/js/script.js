const BtnModelos = document.getElementById('aparecer');
const aparecer = document.querySelectorAll('.sumir');
const Btn = document.querySelector('.mostra');

BtnModelos.addEventListener('click', ()=>{

    Btn.classList.add('desaparece');


    aparecer.forEach((mostrar)=>{
        mostrar.classList.remove('sumir');
    })
});