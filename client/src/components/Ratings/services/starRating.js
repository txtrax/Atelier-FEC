module.exports = {
  buildRatingBreakDown: (reviews) => {
    // reviews: an array of objects
    const obj = {
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
    };
    reviews.forEach((review) => {
      if (review.rating === 5) {
        obj.five += 1;
      }
      if (review.rating === 4) {
        obj.four += 1;
      }
      if (review.rating === 3) {
        obj.three += 1;
      }
      if (review.rating === 2) {
        obj.two += 1;
      }
      if (review.rating === 1) {
        obj.one += 1;
      }
    });
    return obj;
  },

  toAverageRating: (reviews) => {
    // reviews: an array of objects
    let count = 0;
    if (reviews.length !== 0) {
      return ((reviews.reduce((partialSum, cur) => {
        count += 1;
        return partialSum + cur.rating;
      }, 0) / count));
    }
    return count;
  },

  toAverageRecommendation: (reviews) => {
    // reviews: an array of objects
    let count = 0;
    if (reviews.length !== 0) {
      return Math.floor((reviews.filter((review) => {
        count += 1;
        return review.recommend;
      }, 0).length * 100) / count);
    }
    return count;
  },

};
