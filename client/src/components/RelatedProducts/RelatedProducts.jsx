import React, { useContext } from 'react';
import IdContext from '../Context';

function RelatedProducts() {
  const { productId, setProductId } = useContext(IdContext);
  return (
    <div>
      <header>This is RelatedProducts</header>
      {/* <h5>
        I am rendering product:
        {productId}
      </h5> */}
      {/* <button type="button" onClick={() => setProductId('newId')}>{productId}</button> */}
    </div>
  );
}

export default RelatedProducts;
