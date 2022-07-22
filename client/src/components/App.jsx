import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Overview from './Overview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QnA from './QnA/QnA';
import Ratings from './Ratings/Ratings';
import IdContext from './Context';

const AppContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
font-family: 'Lato', sans-serif;
`;

const ComponentsContainer = styled.div`
  padding: 0px 80px;
  display: flex;
  flex-direction: column;
`;

const AnnouncementContainer = styled.div`
  height: 2em;
`;

function App() {
  const [productId, setProductId] = useState(40350);

  const providerIdValue = useMemo(() => ({ productId, setProductId }), [productId, setProductId]);

  return (
    <AppContainer>
      <NavBar />
      <AnnouncementContainer />
      <ComponentsContainer>
        <IdContext.Provider value={providerIdValue}>
          <Overview />
          <RelatedProducts />
          <QnA
            productId={productId}
            setProductId={setProductId}
          />
          <Ratings />
        </IdContext.Provider>
      </ComponentsContainer>
    </AppContainer>
  );
}

export default App;
