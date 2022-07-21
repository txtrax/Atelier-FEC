import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Overview from './Overview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QnA from './QnA/QnA';
import Ratings from './Ratings/Ratings';
import IdContext from './Context';

const AppContainer = styled.div`
  padding: 0px 80px 0px 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
`;

function App() {
  const [productId, setProductId] = useState(40350);

  const providerIdValue = useMemo(() => ({ productId, setProductId }), [productId, setProductId]);

  return (
    <AppContainer>
      <IdContext.Provider value={providerIdValue}>
        <Overview />
        <RelatedProducts />
        {/* <QnA
          productId={productId}
          setProductId={setProductId}
        /> */}
        <Ratings />
      </IdContext.Provider>
    </AppContainer>
  );
}

export default App;
