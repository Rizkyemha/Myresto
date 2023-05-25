const CREATOR_CATEGORY = {
  nullCreatorCategory(getCategory) {
    const pesanCategory = document.createElement('p');
    pesanCategory.innerHTML = 'Category tidak ada';
    getCategory.appendChild(pesanCategory);
  },

  creatorCategory(getCategory, category) {
    const categoryElement = document.createElement('p');
    categoryElement.innerHTML = category.name;
    getCategory.appendChild(categoryElement);
  },
};

export default CREATOR_CATEGORY;
