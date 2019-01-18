import React from 'react';
import PropTypes from 'prop-types'

const Card = props => {
  //console.log('card.js:',props)
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cards.img}
          alt='card' />
        </div>
        <span>By {props.cards.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  Cards: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
