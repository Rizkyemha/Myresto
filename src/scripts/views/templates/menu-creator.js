const MENU_CREATOR = {
  nullCreatorMenu(getMenuMakanan, getMenuMinuman) {
    const pesanMenuMakanan = document.createElement('p');
    pesanMenuMakanan.innerHTML = 'Tidak ada makanan';
    pesanMenuMakanan.appendChild(getMenuMakanan);
    const pesanMenuMinuman = document.createElement('p');
    pesanMenuMakanan.innerHTML = 'Tidak ada minuman';
    pesanMenuMinuman.appendChild(getMenuMinuman);
  },

  creatorMenu({
    foods, drinks, getMenuMakanan, getMenuMinuman,
  }) {
    foods.forEach((menu) => {
      const foodElement = document.createElement('li');
      foodElement.innerHTML = menu.name;
      getMenuMakanan.appendChild(foodElement);
    });

    drinks.forEach((menu) => {
      const drinkElement = document.createElement('li');
      drinkElement.innerHTML = menu.name;
      getMenuMinuman.appendChild(drinkElement);
    });
  },
};

export default MENU_CREATOR;
