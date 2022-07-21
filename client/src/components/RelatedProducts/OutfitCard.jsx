import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { MdOutlineClose } from 'react-icons/md';
import StarRatings from 'react-star-ratings';

const Card = styled.div`
  width: 260px;
  height: 100%;
  color: #5D5F71;
  background: #F8F8F8;
  border: 3px solid #5D5F71;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 100%;
  height: 280px;
  background: #5D5F71;
  object-fit: cover;
`;

const CardInfo = styled.div`
  width: 100%;
  height: 100px;
  padding: 5px 0 0 5px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Name = styled.p`
  font-weight: 500;
  margin: 0;
`;

const Price = styled.p`
  margin:0;
  font-weight: 600;
`;

const DeleteButton = styled(MdOutlineClose)`
  position: relative;
  background: #F8F8F8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50%;
  right: 15px;
  top: 15px;
  width: 25px;
  height: 25px;
  transform: translate(-20px, -260px);
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: #F8F8F8;
    background: #5D5F71;
  }
`;

function OutfitCard({ card, deleteCard }) {
  function getAvgRating(reviews) {
    if (reviews.length !== 0) {
      return reviews.reduce((partialSum, cur) => partialSum + cur.rating, 0) / reviews.length;
    }
    return 0;
  }

  return (
    <Card>
      {(card.style.results[0].photos[0].thumbnail_url !== null)
        ? (
          <CardImg src={card.style.results[0].photos[0].thumbnail_url} />
        )
        : (
          <CardImg src="https://www.jins.com/us/media/menu-redesign/womanbar.jpg" width="280px" height="380px" />
        )}
      <DeleteButton onClick={() => deleteCard(card.info.id)} />
      <CardInfo>
        <p style={{ margin: 0 }}>{card.info.category}</p>
        <Name>{card.info.name}</Name>
        {(card.style.results[0].sale_price === null)
          ? (
            <Price>
              $
              {card.style.results[0].original_price}
            </Price>
          )
          : (
            <Price style={{ color: ' #e63946' }}>
              $
              {card.style.results[0].sale_price}
            </Price>
          )}
        <StarRatings rating={getAvgRating(card.ratings.results)} starDimension="16px" starSpacing="1px" starRatedColor="#FFCC33" />
      </CardInfo>
    </Card>
  );
}

OutfitCard.propTypes = {
  card: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.any]),
  ),
  deleteCard: PropTypes.func,
};

OutfitCard.defaultProps = {
  card: {},
  deleteCard: () => {},
};

export default OutfitCard;
