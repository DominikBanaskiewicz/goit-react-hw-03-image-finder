import { ImageGalleryitem } from 'components/ImageGalleryItem/ImageGalleryitem';
import PropTypes from 'prop-types';
import React from 'react';

export class ImageGallery extends React.Component {
  render() {
    const { images, isLoaded } = this.props;
    if (isLoaded) {
      return (
        <ul className="gallery">
          {images.hits.map(elem => (
            <ImageGalleryitem key={elem.id} id={elem.id} image={elem} />
          ))}
        </ul>
      );
    }
  }
}
ImageGallery.propTypes = {};
