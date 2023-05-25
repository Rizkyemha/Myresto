import favoritRestoIdb from '../datas/favorite-resto-idb';
import BUTTON_LIKE_CREATOR from '../views/templates/like-button-creator';

// idb belum jalan

const likeButtonInitiator = {
  async init({ getLikedButton, restaurant }) {
    this.likeButtonContainer = getLikedButton;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await favoritRestoIdb.getResto(id);
    return !!restaurant;
  },

  async _renderLike() {
    this.likeButtonContainer.innerHTML = BUTTON_LIKE_CREATOR.createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoritRestoIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  async _renderLiked() {
    this.likeButtonContainer.innerHTML = BUTTON_LIKE_CREATOR.createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoritRestoIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default likeButtonInitiator;
