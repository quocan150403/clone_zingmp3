import Helmet from 'components/Helmet';
import Section from 'components/Section';
import AlbumList from 'components/Album/AlbumList';
import Button from 'components/Button';
import { MediaWrapper } from 'components/Media';
import Title from 'components/Title';
import './Library.scss';

const albumList = Array.from({ length: 10 });

function Library() {
  return (
    <Helmet title="Thư Viện">
      <div className="library">
        <Title name="Thư viện" />

        <Section title="PLAYLIST">
          <AlbumList albumList={albumList} />
        </Section>

        <div className="div mt-5 mb-5">
          <div className="tabs__list">
            <div className="tabs__item tabs__item--active">Bài Hát</div>
            <div className="tabs__item">Podcast</div>
            <div className="tabs__item">Album</div>
            <div className="tabs__item">MV</div>
          </div>
          <div className="mt-4">
            <div className="d-flex align-items-center gap-4 mb-4">
              <Button medium uppercase primary>
                Yêu thích
              </Button>
              <Button medium uppercase outline>
                Đã tải lên
              </Button>
            </div>
            <MediaWrapper MediaList={albumList} />
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Library;
