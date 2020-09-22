import React from 'react';

const CitySuggestions = ({ data }) => {
  const { id, cityName } = data;

  return (
    <div>
      <div>id: {id}</div>
      <div>name: {cityName}</div>
    </div>
  );
};

export default CitySuggestions;
