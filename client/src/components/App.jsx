import React, { useState, useMemo } from 'react';
import Overview from './Overview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QnA from './QnA/QnA';
import Ratings from './Ratings/Ratings';
import IdContext from './Context';

function App() {
  const [productId, setProductId] = useState(40350);

  const providerIdValue = useMemo(() => ({ productId, setProductId }), [productId, setProductId]);

  return (
    <div>
      <header>This is App</header>
      <h1>
        We use product:
        { productId }
      </h1>
      <IdContext.Provider value={providerIdValue}>
        <Overview />
        <RelatedProducts />
        <QnA
          productId={productId}
          setProductId={setProductId}
        />
        <Ratings />
      </IdContext.Provider>
    </div>
  );
}

export default App;
