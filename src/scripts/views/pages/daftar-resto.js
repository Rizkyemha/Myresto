import RestaurantDbSource from '../../datas/restaurant-api-dicoding';
import '../templates/daftar-resto-creator';

const Daftar = {
  async render() {
    const jumbotron = document.querySelector('#jumbotron');
    jumbotron.style.display = 'flex';
    return `
    <Article class="content">
      <h2 class="content__heading"><b>Daftar Restoran</b></h2>
      <section id="movies" class="movies">
      </section>
    </Article>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantDbSource.daftarRestaurant();
      const restaurantsContainer = document.querySelector('.movies');
      this.RenderItem(restaurants, restaurantsContainer);
    } catch (error) {
      console.log(error);
    }
  },

  async RenderItem(restaurants, restaurantsContainer) {
    try {
      await restaurants.forEach((restaurant) => {
        const daftarRestoCreator = document.createElement('item-restaurant');
        daftarRestoCreator.classList.add('movie-item');
        daftarRestoCreator.restos = restaurant;
        restaurantsContainer.appendChild(daftarRestoCreator);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Daftar;
