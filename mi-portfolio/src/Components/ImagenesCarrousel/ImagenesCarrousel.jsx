import React from 'react';

const ImagenesCarrousel = ({ imageUrl, text }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <img src={imageUrl} alt={text} style={{ width: '100%', height: '100%' }} />
      <p>{text}</p>
    </div>
  );
}

export default ImagenesCarrousel;