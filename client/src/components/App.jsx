import React from 'react';
import Overview from './Overview/Overview';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import QnA from './QnA/QuestionList';
import Ratings from './Ratings/Ratings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <header>This is App</header>
        <Overview />
        <RelatedProducts />
        <QnA />
        <Ratings />
      </div>
    );
  }
}

export default App;
