import React from 'react';

const ImagenesCarrousel = ({ imageUrl, text }) => {
  return (
    <div>
      <img src={imageUrl} alt={text} style={{ width: '100%', height: 'auto' }} />
      <p>{text}</p>
    </div>
  );
}

export default ImagenesCarrousel;