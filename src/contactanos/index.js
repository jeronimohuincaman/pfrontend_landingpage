document.addEventListener('DOMContentLoaded', (e) => {
    const hamburguesa = document.getElementById('hamburger');
    const menu_movil = document.getElementById('mobile-menu');

    hamburguesa.addEventListener('click', (e) => {
        menu_movil.classList.toggle('hidden');
    });
});