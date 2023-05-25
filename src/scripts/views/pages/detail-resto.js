import UrlParser from '../../routes/url-parse';
import likeButtonInitiator from '../../utils/like-button-initiator';
import '../templates/detail-resto-creator';
import RestaurantDbSource from '../../datas/restaurant-api-dicoding';

const Detail = {
  async render() {
    const jumbotron = document.querySelector('#jumbotron');
    jumbotron.style.display = 'none';
    return `
    <button id="likeButtonContainer"></button>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#mainContent');
    const daftarRestoCreator = document.createElement('detail-restaurant');
    daftarRestoCreator.classList.add('movie');
    daftarRestoCreator.restos = restaurant;
    restaurantContainer.appendChild(daftarRestoCreator);

    const getLikedButton = document.querySelector('#likeButtonContainer');
    likeButtonInitiator.init({
      getLikedButton,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
