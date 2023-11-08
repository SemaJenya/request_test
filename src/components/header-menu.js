
const headerMenu = document.querySelector('.header__nav_menu');
const headerMenuList = document.querySelector('.header__nav');


const profileMenu = document.querySelector('.header__profile-menu');


export function handleOpenHeaderMenu () {
    const imgMenu = document.getElementById('menu');
    const imgCross = document.getElementById('cross');

    if(headerMenu.classList.contains('header__nav_mobile')) {
        headerMenu.classList.remove('header__nav_mobile');
        headerMenuList.classList.remove('header__nav_list-mobile');
        headerMenu.classList.add('header__nav_menu');
        imgMenu.hidden = false;
        imgCross.hidden = true;
    }
    else {
        headerMenu.classList.add('header__nav_mobile');
        headerMenuList.classList.add('header__nav_list-mobile');
        headerMenu.classList.remove('header__nav_menu');
        imgMenu.hidden = true;
        imgCross.hidden = false;
    }
}

export function handleOpenHeaderProfileMenu () {
    if(profileMenu.classList.contains('header__profile-menu_active')) {
        profileMenu.classList.remove('header__profile-menu_active')
    }
    else {
        profileMenu.classList.add('header__profile-menu_active')
    }
}