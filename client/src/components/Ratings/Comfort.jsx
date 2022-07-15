import React from 'react';
import PropTypes from 'prop-types';

function Comfort({ comfort }) {
  const {
    Size, Width, Comfort, Quality, Length, Fit,
  } = comfort;

  let displaySize;
  if (Size) {
    displaySize = (
      <div>
        Size&nbsp;
        {Size.value}
      </div>
    );
  }

  let displayComfort;
  if (Comfort) {
    displayComfort = (
      <div>
        Comfort&nbsp;
        {Comfort.value}
      </div>
    );
  }

  let displayWidth;
  if (Width) {
    displayWidth = (
      <div>
        Width&nbsp;
        {Width.value}
      </div>
    );
  }

  let displayQuality;
  if (Quality) {
    displayQuality = (
      <div>
        Quality&nbsp;
        {Quality.value}
      </div>
    );
  }

  let displayLength;
  if (Length) {
    displayLength = (
      <div>
        Length
        {Length.value}
      </div>
    );
  }

  let displayFit;
  if (Fit) {
    displayFit = (
      <div>
        Width
        {Fit.value}
      </div>
    );
  }

  return (
    <ul>
      {displaySize}
      {displayComfort}
      {displayWidth}
      {displayQuality}
      {displayLength}
      {displayFit}
    </ul>
  );
}

Comfort.propTypes = {
  comfort: PropTypes.objectOf(PropTypes.objectOf(PropTypes.any)),
};

Comfort.defaultProps = {
  comfort: {},
};

export default Comfort;
