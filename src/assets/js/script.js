const BtnModelos = document.getElementById('aparecer');
const aparecer = document.querySelectorAll('.sumir');
const Btn = document.querySelector('.mostra');

BtnModelos.addEventListener('click', ()=>{

    Btn.classList.add('desaparece');


    aparecer.forEach((mostrar)=>{
        mostrar.classList.remove('sumir');
    })
});


/*let docTitle = document.title;

window.addEventListener('blur',()=>{
    document.title = "Notificação(1)"
});
window.addEventListener('focus', ()=>{
    document.title = docTitle
});*/