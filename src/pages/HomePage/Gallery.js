import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { CardItem } from 'components';
import { galleryApi } from 'api';

const SETTINGS = {
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  dots: false,
  autoplay: true,
  className: 'gallery',
  // nextArrow: <BsChevronRight className="gallery__next" />,
  // prevArrow: <BsChevronLeft className="gallery__prev" />,
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
function Gallery() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await galleryApi.getQuery();
        setGalleryList(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Slider {...SETTINGS}>
      {galleryList.map((item, index) => (
        <div className="gallery-item" key={index}>
          <CardItem link={item.link} image={item.imageUrl} />
        </div>
      ))}
    </Slider>
  );
}

export default Gallery;
