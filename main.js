const menuButton = document.getElementsByClassName('menu')[0];
const navlinks = document.getElementsByClassName('navlinks')[0];

menuButton.addEventListener('click', () => {

    navlinks.classList.toggle('navActive');

});