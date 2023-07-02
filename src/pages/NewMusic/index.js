import Helmet from 'components/Helmet';
import Title from 'components/Title';
import { MediaItem } from 'components/Media';
import './NewMusic.scss';
import Section from 'components/Section';
import AlbumList from 'components/Album/AlbumList';

function NewMusic() {
  return (
    <Helmet title="BXH Nhạc mới">
      <div>
        <Title name="BXH Nhạc mới" />
        {Array.from({ length: 100 }).map((item, index) => (
          <MediaItem indexChart full index={index} isBorder key={index} />
        ))}
      </div>
    </Helmet>
  );
}

export default NewMusic;
