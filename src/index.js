import { handleOpenHeaderMenu, handleOpenHeaderProfileMenu } from './components/header-menu';
import './styles/index.css';

const headerMenuButton = document.getElementById('header-menu');

const profileIcon = document.getElementById('profile');


headerMenuButton.addEventListener('click', function () {
    handleOpenHeaderMenu();
})


profileIcon.addEventListener('mouseover', function () {
    handleOpenHeaderProfileMenu()
})


 console.log('0000000');