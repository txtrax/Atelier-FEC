import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import IdContext from '../Context';
import Stars from './Stars';
// import Comfort from './Comfort';
import ReviewList from './ReviewList';
import MoreReview from './MoreReview';
import AddReview from './AddReview';
// require('dotenv').config();

function Ratings() {
  // WORK: const productId = useContext(IdContext);
  // ERROR: const contextType = IdContext;
  const { productId, setProductId } = useContext(IdContext);
  // reviews: array of objects
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('relevant');

  // send GET all reviews request when page is rendered
  useEffect(() => {
    // axios.get(`http://localhost:${process.env.PORT}/reviews`, {
    axios.get('http://localhost:7777/reviews', {
      params: {
        product_id: productId,
        sort,
      },
    })
      .then((res) => {
        console.log('IN RATINGS, GET ALL REVIEWS SUCCESS!', res);
        setReviews(res.data.results);
      })
      .catch((err) => {
        console.log('IN RATINGS, GET ALL REVIEWS FAILED', err);
      });
  }, []);

  return (
    <div>
      <header>This is Ratings</header>
      <Stars reviews={reviews} />
      {/* <Comfort /> */}
      <ReviewList reviews={reviews} />
      <MoreReview />
      <AddReview />
    </div>
  );
}

export default Ratings;
