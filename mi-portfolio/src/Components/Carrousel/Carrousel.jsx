import Carousel from 'react-bootstrap/Carousel';
import ImagenesCarrousel from '../ImagenesCarrousel/ImagenesCarrousel';

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <ImagenesCarrousel 
        imageUrl="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg"
        text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImagenesCarrousel 
        imageUrl="https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg"
        text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImagenesCarrousel 
        imageUrl="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Carrousel