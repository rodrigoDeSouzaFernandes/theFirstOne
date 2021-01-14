import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const {name, type} = this.props;

    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          </div>
          {//<p> {type} </p>
          //<p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        
        //<img src={image} alt={`${name} sprite`} />}
    }
      </div>
    );
  }
}

export default Pokemon;