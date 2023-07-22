import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardItem from 'components/CardItem';
import './Gallery.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Gallery({ galleries }) {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    autoplay: true,
    className: 'gallery',
    nextArrow: <BsChevronRight className="gallery__next" />,
    prevArrow: <BsChevronLeft className="gallery__prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {galleries.map((item, index) => (
        <div className="gallery-item" key={index}>
          <CardItem image={item.image_url} />
        </div>
      ))}
    </Slider>
  );
}

Gallery.propTypes = {};

export default Gallery;
