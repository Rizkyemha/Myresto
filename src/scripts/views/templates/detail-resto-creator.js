/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */

import CONFIG from '../../globals/config';
import CREATOR_REVIEW from './review-creator';
import MENU_CREATOR from './menu-creator';
import CREATOR_CATEGORY from './category-creator';

class DaftarCreator extends HTMLElement {
  set restos(restaurant) {
    this.name = restaurant.name;
    this.description = restaurant.description;
    this.city = restaurant.city;
    this.address = restaurant.address;
    this.pictureId = restaurant.pictureId;
    this.categories = restaurant.categories;
    this.menus = restaurant.menus;
    this.rating = restaurant.rating;
    this.customerReviews = restaurant.customerReviews;
    this.creatorReview = CREATOR_REVIEW;
    this.creatorMenu = MENU_CREATOR;
    this.creatorCategory = CREATOR_CATEGORY;
    this.render();
    this.renderCategory();
    this.renderMenu();
    this.renderReview();
  }

  render() {
    this.innerHTML = `
    <h2 class="movie__title">${this.name}</h2>
    <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + this.pictureId}" crossorigin="anonymous" alt="${this.name}" />
    <description-restaurant class="movie__info">
      <h3>Information</h3>
      <h4>Alamat</h4>
      <p>${this.address}, ${this.city}</p>
      <h4>Rating</h4>
      <p>${this.rating}</p>
    </description-restaurant>
    <overview-restaurant class="movie__overview">
      <h3>Description</h3>
      <p>${this.description}</p>
    </overview-restaurant>
    <category-restaurant id="categoryItem" class="movie__category">
    <h3>Category</h3>
    </category-restaurant>
    <menu-restaurant id="menuItem" class="movie__menu">
      <h3>Menu</h3>
      <ul id="menu-makanan" class="item-makanan"></ul>
      <ul id="menu-minuman" class="item-minuman"></ul>
    </menu-restaurant>
    <review-restaurant class="movie__review">
      <h3>Customer Reviews</h3>
      <review-items id="reviewItem" class="review__items"></review-items>
    </review-restaurant>
    `;
  }

  renderCategory() {
    const getCategory = this.querySelector('#categoryItem');
    this.categories.forEach((category) => {
      if (!category) {
        this.creatorCategory.nullCreatorCategory(getCategory);
      } else {
        this.creatorCategory.creatorCategory(getCategory, category);
      }
    });
  }

  renderMenu() {
    const getMenuMakanan = this.querySelector('#menu-makanan');
    const getMenuMinuman = this.querySelector('#menu-minuman');
    const { foods, drinks } = this.menus;
    if (!foods) {
      this.creatorMenu.nullCreatorMenu(getMenuMakanan, getMenuMinuman);
    } else {
      this.creatorMenu.creatorMenu({
        foods, drinks, getMenuMakanan, getMenuMinuman,
      });
    }
  }

  renderReview() {
    const getReview = this.querySelector('#reviewItem');
    this.customerReviews.forEach((item) => {
      if (!item) {
        this.creatorReview.nullCreatorReview(getReview);
      } else {
        this.creatorReview.CreatorReview(getReview, item);
      }
    });
  }
}

customElements.define('detail-restaurant', DaftarCreator);
