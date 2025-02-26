import './style.css';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

function initializeWebsite() {
  createHomePage();

  document.getElementById('home-btn').addEventListener('click', createHomePage);
    document.getElementById('menu-btn').addEventListener('click', createMenuPage);
    document.getElementById('contact-btn').addEventListener('click', createContactPage);


}


initializeWebsite();