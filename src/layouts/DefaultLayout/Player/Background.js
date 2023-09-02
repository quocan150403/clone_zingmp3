import { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import Button from 'components/Button';
import Tabs from 'components/Tabs';
import { BsArrowsAngleExpand, BsChevronDown, BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const TABS = [
  { id: 1, name: 'Danh sách phát' },
  { id: 2, name: 'Karaoke' },
  { id: 3, name: 'Lời bài hát' },
];

function Background({ currentSong, isPlaying, isShowPlayerPopper, onClickToggleBackground }) {
  const [tab, setTab] = useState(TABS[0]);
  const thumbRef = useRef(null);

  return (
    <div className={`player-background ${isShowPlayerPopper ? 'is-show' : ''}`}>
      <div className="player-background__header d-flex align-items-center justify-content-between">
        <div className="player-background__left"></div>
        <div className="player-background__middle">
          <Tabs large secondary list={TABS} tab={tab} setTab={setTab} />
        </div>
        <div className="player-background__right">
          <Button circle secondary leftIcon={<BsArrowsAngleExpand />} />
          <Button circle secondary leftIcon={<BsGear />} />
          <Button
            onClick={() => onClickToggleBackground(false)}
            circle
            secondary
            leftIcon={<BsChevronDown />}
          />
        </div>
      </div>
      <div className="player-background__content">
        {tab.id === 1 && (
          <div className="d-flex mt-4 mb-3 flex-column align-items-center justify-content-center">
            <div className="mb-5 player-background__image">
              <img ref={thumbRef} className="rounded-circle" src={currentSong?.imageUrl} alt="" />
            </div>
            <h2 className="player-background__name">{currentSong?.name}</h2>
            <div className="d-flex align-items-center">
              {currentSong.artists &&
                currentSong.artists.map((artist, index) => (
                  <Link
                    key={index}
                    className="player-background__artists"
                    to={`/artist/${artist.slug}`}
                  >
                    {artist.name}
                  </Link>
                ))}
            </div>
          </div>
        )}
        {tab.id === 2 && (
          <div className="player-background__karaoke">
            <ul>
              <li>Bài hát đang phát mới nhất</li>
              <li>Bài hát đang phát mới nhất</li>
            </ul>
          </div>
        )}
        {tab.id === 3 && (
          <Container>
            <Row>
              <Col xs={NaN} md="0" lg="5">
                <div className="me-5">
                  <img className="rounded" src={currentSong?.imageUrl} alt="" />
                </div>
              </Col>
              <Col xs="12" md="12" lg="7">
                <div className="ms-2 player-background__lyrics">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, molestiae neque.
                  Id, quod eius quas, et eligendi vero voluptas nihil quisquam perspiciatis
                  excepturi optio, pariatur atque quibusdam autem totam. Distinctio. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Unde, molestiae neque. Id, quod eius
                  quas, et eligendi vero voluptas nihil quisquam perspiciatis excepturi optio,
                  pariatur atque quibusdam autem totam. Distinctio. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Unde, molestiae neque. Id, quod eius quas, et
                  eligendi vero voluptas nihil quisquam perspiciatis excepturi optio, pariatur atque
                  quibusdam autem totam. Distinctio. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Unde, molestiae neque. Id, quod eius quas, et eligendi vero
                  voluptas nihil quisquam perspiciatis excepturi optio, pariatur atque quibusdam
                  autem totam. Distinctio.
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

Background.propTypes = {
  imageUrl: PropTypes.string,
  isShowPlayerPopper: PropTypes.bool,
  onClickToggleBackground: PropTypes.func,
};

export default memo(Background);
