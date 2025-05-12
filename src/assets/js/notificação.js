let docTitle = document.title;

window.addEventListener('blur', () => {
    document.title = "Notificação(1)"
});
window.addEventListener('focus', () => {
    document.title = docTitle
});