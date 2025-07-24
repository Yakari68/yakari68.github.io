function toggleMenu() {
    const collapse = document.querySelector('.nav-links');
    const buttonImg = document.querySelector('.toggle-btn img');
    const navbar = document.querySelector('.navbar');
    const main = document.querySelector('main');
    
    if (collapse.classList.contains('collapse-hide')) {
        // Montrer l'élément
        collapse.classList.remove('collapse-hide');
        buttonImg.style.transform = 'rotate(90deg)';
        navbar.style.backgroundColor = '#884400bb';
        main.style.marginTop="1em";

    } else {
    // Cacher l'élément
        collapse.classList.add('collapse-hide');
        buttonImg.style.transform = 'rotate(0deg)';
        navbar.style.backgroundColor = '#88440000';
        main.style.marginTop="-2em";
    }
}
