/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import App from './views/app';
import '../styles/style.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';

console.log('Bundler Jalan H3H3');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const skipLink = document.querySelector(".skip-link");
const mainContent = document.querySelector("#mainContent");

skipLink.addEventListener("click", event => {
    event.preventDefault();
    mainContent.scrollIntoView({behavior : "smooth"});
    skipLink.blur();
})

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
