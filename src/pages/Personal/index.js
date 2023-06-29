import { BsPlayFill } from 'react-icons/bs';

import Helmet from 'components/Helmet';
import Section from 'components/Section';
import AlbumList from 'components/AlbumList';
import Button from 'components/Button';
import { MediaWrapper } from 'components/Media';
import './Personal.scss';

const albumList = Array.from({ length: 10 });

function Personal() {
  return (
    <Helmet title="Thư Viện">
      <div className="personal">
        <div className="personal__header d-flex align-items-center">
          <h3 className="personal__title me-3">Thư Viện</h3>
          <div className="personal__play">
            <BsPlayFill />
          </div>
        </div>

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
          <div>
            <div className="d-flex align-items-center gap-4">
              <Button medium uppercase primary>
                Yêu thích
              </Button>
              <Button medium uppercase outline>
                Đã tải lên
              </Button>
            </div>
            {/* <MediaWrapper MediaList={albumList} /> */}
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Personal;
