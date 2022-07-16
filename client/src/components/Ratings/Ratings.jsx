import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IdContext from '../Context';
import Stars from './Stars';
import ProductBreakdown from './ProductBreakdown';
import ReviewList from './ReviewList';
import MoreReview from './MoreReview';
import AddReview from './AddReview';
import { RowContainer } from './styles';

// require('dotenv').config();
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.8em;
`;
const RatingProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-left: 20px;
  gap: 20px;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 20px;
`;

function Ratings() {
  // WORK: const productId = useContext(IdContext);
  // ERROR: const contextType = IdContext;
  const { productId, setProductId } = useContext(IdContext);
  // reviews: array of objects
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [starFilter, setStarFilter] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [product, setProduct] = useState({});

  // send GET all reviews request when page is rendered
  useEffect(() => {
    axios.get('/reviews', {
    // axios.get('http://localhost:7777/reviews', {
      params: {
        product_id: productId,
        sort,
      },
    })
      .then((res) => {
        // console.log('SORT NOT CHANGED, SORT', sort);
        // console.log('GET ALL REVIEWS SUCCESS!', res);
        setReviews(res.data.results);
        setDisplayedReviews(res.data.results.slice(0, 2));
      })
      .catch((err) => {
        // console.log('SORT NOT CHANGED');
        console.log('GET ALL REVIEWS FAILED', err);
      });
    axios.get('reviews/meta', {
      params: {
        product_id: productId,
      },
    })
      .then((res) => {
        // console.log('SORT NOT CHANGED, SORT', sort);
        console.log('GET META SUCCESS!', res.data.characteristics);
        setProduct(res.data.characteristics);
      })
      .catch((err) => {
        // console.log('SORT NOT CHANGED');
        console.log('GET META FAILED', err);
      });
  }, [productId]);

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: productId,
        sort,
      },
    })
      .then((res) => {
        // console.log('SORT CHANGE, GET ALL REVIEWS SUCCESS!', res);
        setReviews(res.data.results);
        setDisplayedReviews(res.data.results.slice(0, 2));
      })
      .catch((err) => {
        console.log('SORT CHANGE, GET ALL REVIEWS FAILED', err);
      });
  }, [sort]);

  return (
    <MainContainer>
      <RatingProductContainer>
        <Stars
          reviews={reviews}
          starFilter={starFilter}
          setStarFilter={setStarFilter}
          displayedReviews={displayedReviews}
          setDisplayedReviews={setDisplayedReviews}
        />
        <ProductBreakdown product={product} />
      </RatingProductContainer>
      <ReviewContainer>
        <ReviewList
          reviews={reviews}
          displayedReviews={displayedReviews}
          sort={sort}
          setSort={setSort}
        />
        <RowContainer>
          <MoreReview
            reviews={reviews}
            displayedReviews={displayedReviews}
            setDisplayedReviews={setDisplayedReviews}
          />
          <AddReview />
        </RowContainer>
      </ReviewContainer>
    </MainContainer>
  );
}

export default Ratings;
