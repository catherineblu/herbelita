const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const open = document.getElementById('open');
const close = document.getElementById('close');
const herb_info = document.getElementById('herb_info');

open.addEventListener('click', () => {
    herb_info.classList.add('show');
});

close.addEventListener('click', () => {
    herb_info.classList.remove('show');
});

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
