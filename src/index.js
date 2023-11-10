
import { handleOpenHeaderMenu, handleOpenHeaderProfileMenu } from './components/header-menu';
import './styles/index.css';
import { swiper } from './components/slider';
import { enableValidation } from './components/validate';
import { validationObject } from './components/consts';

const headerMenuButton = document.getElementById('header-menu');
const profileIcon = document.getElementById('profile');




headerMenuButton.addEventListener('click', function () {
    handleOpenHeaderMenu();
});


profileIcon.addEventListener('mouseover', function () {
    handleOpenHeaderProfileMenu();
});

swiper;

 console.log('0000000');

 enableValidation (validationObject);