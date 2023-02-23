import PropTypes from 'prop-types';
import React from 'react';

export class ImageGalleryitem extends React.Component {
  render() {
    const { id, image } = this.props;
    return (
      <li key={id} className="gallery-item">
        <img src={image.webformatURL} alt="" />
      </li>
    );
  }
}
ImageGalleryitem.propTypes = {};
