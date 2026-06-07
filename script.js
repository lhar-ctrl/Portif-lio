
const btnTema = document.getElementById('btn-tema');
const body = document.body;


btnTema.addEventListener('click', function() {
    body.classList.toggle('tema-escuro');
    
    
    if (body.classList.contains('tema-escuro')) {
        btnTema.textContent = 'Modo Claro';
    } else {
        btnTema.textContent = 'Mudar Tema';
    }
});