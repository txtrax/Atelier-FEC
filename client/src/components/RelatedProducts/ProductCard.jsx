import React, { useContext } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { MdOutlineStarOutline } from 'react-icons/md';
import StarRating from './StarRating';
import IdContext from '../Context';
import ModalContext from '../ModalContext';

const Card = styled.div`
  width: 260px;
  height: 100%;
  color: #1d3557;
  background: #f1faee;
  border: 3px solid #1d3557;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 100%;
  height: 280px;
  background: #1d3557;
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
  color: #43aa8b;
`;

const StarButton = styled(MdOutlineStarOutline)`
  position: relative;
  background: rgb(248,248,248);
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
    background: #ffbe0b;
  }
`;
function ProductCard({ card }) {
  const { setProductId } = useContext(IdContext);
  const { setIsOpen } = useContext(ModalContext);

  return (
    <Card>
      {(card.style.results[0].photos[0].thumbnail_url !== null)
        ? (
          <CardImg
            src={card.style.results[0].photos[0].thumbnail_url}
            onClick={() => { setProductId(card.info.id); }}
          />
        )
        : (
          <CardImg
            src="https://www.jins.com/us/media/menu-redesign/womanbar.jpg"
            width="280px"
            height="380px"
            onClick={() => { setProductId(card.info.id); }}
          />
        )}
      <StarButton onClick={() => { setIsOpen(true); }} />
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
            <Price style={{ color: 'red' }}>
              $
              {card.style.results[0].sale_price}
            </Price>
          )}
        <StarRating />
      </CardInfo>
    </Card>
  );
}

ProductCard.propTypes = {
  card: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.any]),
  ),
};

ProductCard.defaultProps = {
  card: {},
};

export default ProductCard;
