import PropTypes from 'prop-types';
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>
    );
  }
}
Button.propTypes = {};
