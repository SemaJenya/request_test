import './styles/index.css';

const headerMenuButton = document.getElementById('header-menu');
const headerMenu = document.querySelector('.header__nav_menu');
const headerMenuList = document.querySelector('.header__nav');



function handleOpenHeaderMenu () {

    const imgMenu = document.getElementById('menu');
    const imgCross = document.getElementById('cross');

    if(headerMenu.classList.contains('header__nav_mobile')) {
        headerMenu.classList.remove('header__nav_mobile');
        headerMenuList.classList.remove('header__nav_list-mobile');
        headerMenu.classList.add('header__nav_menu');
        console.log('удалили класс');
        imgMenu.hidden = false;
        imgCross.hidden = true;
    }
    else {
        headerMenu.classList.add('header__nav_mobile');
        headerMenuList.classList.add('header__nav_list-mobile');
        headerMenu.classList.remove('header__nav_menu');
        imgMenu.hidden = true;
        imgCross.hidden = false;

        console.log('добавили класс');
    }

}


headerMenuButton.addEventListener('click', function () {
    handleOpenHeaderMenu();
})


 console.log('0000000');