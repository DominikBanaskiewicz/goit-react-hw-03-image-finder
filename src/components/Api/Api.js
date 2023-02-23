import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=31780969-fdde0daea91119d814167c909&q=car&image_type=photo';

export const fetchGalleryimages = async searchQuery => {
  const response = axios.get(
    `https://pixabay.com/api/?key=31780969-fdde0daea91119d814167c909&q=car&image_type=photo`
  );
  return response;
};
