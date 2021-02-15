import menuItems from '../menu.json'
import menuItemTemplate from '../templates/memuItem.hbs'

const menuRef = document.querySelector('.js-menu');
const newMenuItems = menuItemTemplate(menuItems);

menuRef.innerHTML = newMenuItems;

