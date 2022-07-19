import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const strFilter = require('./services/strFilter');

const Button = styled.button`
  margin-top: 1em;
  padding: 0.5em 0.5em 0.5em 0.5em;
  font-size: 1em;
  background: white;
`;

function ReviewEntryBody({ body }) {
  // let [displayBody, setDisplayBody] = useState(body);
  // const [showButton, setShowButton] = useState(true);

  const [showButton, setShowButton] = useState(body.length > 25);

  let displayBodyIni;
  if (body.length > 25 && showButton) {
    displayBodyIni = strFilter.lengthFilter(body, 25);
  } else {
    displayBodyIni = body;
  }

  const [displayBody, setDisplayBody] = useState(displayBodyIni);

  return (
    <div>
      {displayBody}
      <div>
        {showButton
        && (
        <Button onClick={() => {
          setShowButton(false);
          setDisplayBody(body);
        }}
        >
          Show More
        </Button>
        )}
      </div>
    </div>
  );
}

ReviewEntryBody.propTypes = {
  body: PropTypes.string,
};

ReviewEntryBody.defaultProps = {
  body: '',
};

export default ReviewEntryBody;
