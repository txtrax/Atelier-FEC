import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import IdContext from '../Context';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';
import ReviewList from './ReviewList';
import PhotoModal from './PhotoModal';
import MoreReview from './MoreReview';
import AddReview from './AddReview';
import AddReviewModal from './AddReviewModal';
import { RowContainer } from './styles';
import { useIsFirstRender, usePrevious } from './services/customHooks';

const { getAllReviews, getReviewMeta, getProductInfo } = require('./services/reviews');

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
  padding-left: 20px;
`;

function Ratings() {
  // WORK: const productId = useContext(IdContext);
  // ERROR: const contextType = IdContext;
  const { productId, setProductId } = useContext(IdContext);
  const [productName, setProductName] = useState('');
  // reviews: array of objects
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [starFilter, setStarFilter] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [photoURL, setPhotoURL] = useState('');
  const isFirstRender = useIsFirstRender();
  const prev = usePrevious({ productId, sort });

  // When page is refreshed,
  // send GET all reviews request, setReviews
  // send GET review meta, setProduct
  useEffect(() => {
    if (!isFirstRender && prev.productId === productId) return;
    // console.log('useEffect [productId] isFirstRender:', isFirstRender, ' prev: ', prev);
    getAllReviews(productId, sort)
      .then((res) => {
        console.log('GET ALL REVIEWS SUCCESS!', res);
        setReviews(res);
        // setDisplayedReviews(res.slice(0, 2));
      })
      .catch((err) => {
        console.log('GET ALL REVIEWS FAILED', err);
      });
    getReviewMeta(productId)
      .then((res) => {
        console.log('GET META SUCCESS!', res);
        setProduct(res);
      })
      .catch((err) => {
        console.log('GET META FAILED', err);
      });
    getProductInfo(productId)
      .then((res) => {
        console.log('GET PRODUCT INFO SUCCESS!', res);
        setProductName(res);
      })
      .catch((err) => {
        console.log('GET PRODUCT INFO FAILED err = ', err);
      });
  }, [productId]);

  // When sort is updated, setReviews
  useEffect(() => {
    if (isFirstRender || prev.sort === sort) return;
    console.log('useEffect [sort] isFirstRender: ', isFirstRender, ' prev: ', prev);
    getAllReviews(productId, sort)
      .then((res) => {
        console.log('SORT CHANGE, GET ALL REVIEWS SUCCESS!');
        setReviews(res);
        // setDisplayedReviews(res.slice(0, 2));
      })
      .catch((err) => {
        console.log('SORT CHANGE, GET ALL REVIEWS FAILED', err);
      });
  }, [sort]);

  // When reviews/starFiltered is updated, set filteredReviews
  useEffect(() => {
    if (starFilter.length === 0) {
      setFilteredReviews(reviews);
    } else {
      setFilteredReviews(reviews.filter((review) => {
        if (starFilter.includes(review.rating.toString())) {
          return true;
        }
        return false;
      }));
    }
  }, [reviews, starFilter]);

  // When filteredReviews is updated, set displayedReviews
  useEffect(() => {
    setDisplayedReviews(filteredReviews.slice(0, 2));
  }, [filteredReviews]);

  return (
    <MainContainer>
      <RatingProductContainer>
        <RatingBreakdown
          reviews={reviews}
          starFilter={starFilter}
          setStarFilter={setStarFilter}
          // setDisplayedReviews={setDisplayedReviews}
        />
        <ProductBreakdown product={product} />
      </RatingProductContainer>
      <ReviewContainer>
        <ReviewList
          reviews={reviews}
          displayedReviews={displayedReviews}
          sort={sort}
          setSort={setSort}
          setShowPhoto={setShowPhoto}
          setPhotoURL={setPhotoURL}
        />
        <PhotoModal showPhoto={showPhoto} setShowPhoto={setShowPhoto} photoURL={photoURL} />
        <RowContainer>
          <MoreReview
            filteredReviews={filteredReviews}
            displayedReviews={displayedReviews}
            setDisplayedReviews={setDisplayedReviews}
          />
          <AddReview setShowModal={setShowModal} />
        </RowContainer>
      </ReviewContainer>
      <AddReviewModal
        productName={productName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </MainContainer>
  );
}

export default Ratings;
