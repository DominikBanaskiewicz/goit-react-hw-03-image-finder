import React from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { fetchGalleryimages } from './Api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends React.Component {
  state = {
    images: [],
    isLoading: false,
    isLoaded: false,
    searchQuery: ' ',
    pageNumber: 1,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const images = await fetchGalleryimages('aa');
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false, isLoaded: true });
    }
  }

  onSubmit = search => {
    this.setState({ searchQuery: search, images: [], pageNumber: 1 });
  };

  render() {
    const { images, isLoaded, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading ? (
          <p></p>
        ) : (
          <ImageGallery images={images.data} isLoaded={isLoaded} />
        )}
      </div>
    );
  }
}
