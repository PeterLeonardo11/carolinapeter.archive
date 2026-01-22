// Esto hace que el menú cambie de color cuando bajas (scrolleas) 
window.addEventListener('scroll', function() {
    const navBar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navBar.classList.add('scrolled');
    }else {
        navBar.classList.remove('scrolled')
    }
});