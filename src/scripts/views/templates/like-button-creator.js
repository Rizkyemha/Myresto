const BUTTON_LIKE_CREATOR = {
  createLikeButtonTemplate() {
    return `
        <button aria-label="like this movie" id="likeButton" class="like">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
        `;
  },

  createLikedButtonTemplate() {
    return `
        <button aria-label="unlike this movie" id="likeButton" class="like">
            <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
        `;
  },
};

export default BUTTON_LIKE_CREATOR;
