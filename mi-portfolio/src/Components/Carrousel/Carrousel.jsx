import Carousel from 'react-bootstrap/Carousel';
import ImagenesCarrousel from '../ImagenesCarrousel/ImagenesCarrousel';

function Carrousel() {
  return (
    <Carousel interval={2000} pause="none">
      <Carousel.Item>
        <ImagenesCarrousel 
        imageUrl="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <ImagenesCarrousel 
        imageUrl="https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg"/>
      </Carousel.Item>
      <Carousel.Item>
        <ImagenesCarrousel 
        imageUrl="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"/>
      </Carousel.Item>
    </Carousel>
  );
}


export default Carrousel