import { BsPlayFill } from 'react-icons/bs';
import images from 'assets/images';

export default function MediaItemImage({ imageUrl, handleClick }) {
  return (
    <div onClick={handleClick} className="media-left__wrapper me-3">
      <img className="media-left__image" src={imageUrl} alt="" />
      <div className="media-left__overlay" />
      <div className="media-left__icon media-left__icon--play">
        <BsPlayFill />
      </div>
      <div className="media-left__icon media-left__icon--playing">
        <img src={images.iconPlaying} alt="" />
      </div>
    </div>
  );
}
