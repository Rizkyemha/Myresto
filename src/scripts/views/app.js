/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

import DrawerInit from '../utils/drawer-init';
import UrlParser from '../routes/url-parse';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInit.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
