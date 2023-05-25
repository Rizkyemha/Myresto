import CONFIG from '../../globals/config';

class DaftarCreator extends HTMLElement {
  set restos(restos) {
    this._restos = restos;
    this.render();
  }

  render() {
    this.innerHTML = `
            <restaurant-header class="movie-item__header">
                <img class="movie-item__header__poster" crossorigin="anonymous" alt="${this._restos.name}"
                src="${this._restos.pictureId ? CONFIG.BASE_IMAGE_URL + this._restos.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
                <div class="movie-item__header__rating">
                    <p>⭐️<span class="movie-item__header__rating__score">${this._restos.rating}</span></p>
                </div>
            </restaurant-header>
            <restaurant-content class="movie-item__content">
                <h3><a href="/#/detail/${this._restos.id}">${this._restos.name}</a></h3>
                <p>${this._restos.description}</p>
            </restaurant-content>
    `;
  }
}

customElements.define('item-restaurant', DaftarCreator);
