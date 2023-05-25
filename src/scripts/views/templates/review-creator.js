const CREATOR_REVIEW = {
  nullCreatorReview(getReview) {
    const Pesanreview = document.createElement('p');
    Pesanreview.innerHTML = 'Tidak ada review';
    getReview.appendChild(Pesanreview);
  },

  CreatorReview(getReview, item) {
    const reviewName = document.createElement('p');
    const reviewreview = document.createElement('p');
    const reviewdate = document.createElement('p');
    reviewName.innerHTML = item.name;
    reviewreview.innerHTML = item.review;
    reviewdate.innerHTML = item.date;

    const containerItemReview = document.createElement('review-item');
    containerItemReview.classList.add('review__item');
    containerItemReview.append(reviewName, reviewreview, reviewdate);
    getReview.appendChild(containerItemReview);
  },
};

export default CREATOR_REVIEW;
