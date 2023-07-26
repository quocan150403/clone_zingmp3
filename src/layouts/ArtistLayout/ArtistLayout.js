import images from 'assets/images';
import './ArtistLayout.scss';
import Header from './Header';

function ArtistLayout({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${images.artistBackground})`,
      }}
      className="artist-layout"
    >
      <Header />
      <div className="artist-layout__content">{children}</div>
    </div>
  );
}

export default ArtistLayout;
