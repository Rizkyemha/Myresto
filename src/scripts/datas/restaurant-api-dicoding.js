import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async daftarRestaurant() {
    const response = await fetch(API_ENDPOINT.Daftar);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.Detail(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
