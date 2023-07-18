import {
  BsArrowsAngleExpand,
  BsBadge4K,
  BsChevronDown,
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsGear,
  BsMic,
  BsMusicNoteList,
  BsRepeat,
  BsShuffle,
  BsVolumeMute,
  BsVolumeUp,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import MediaItem from 'components/Media/MediaItem';
import './Player.scss';
import Queue from '../Queue';
import Button from 'components/Button';
import Tabs from 'components/Tabs';
import { Col, Container, Row } from 'reactstrap';
import images from 'assets/images';
import { useRef } from 'react';
import { useEffect } from 'react';

const TABS = [
  { id: 1, name: 'Danh sách phát' },
  { id: 2, name: ' Karaoke' },
  { id: 3, name: ' Lời bài hát' },
];

function Player() {
  const [value, setValue] = useState(0);
  const [volume, setVolume] = useState(50);

  const [isShowQueue, setIsShowQueue] = useState(false);
  const [isShowPlayerPopper, setIsShowPlayerPopper] = useState(false);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnChangeVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <>
      <div className={`player ${isShowPlayerPopper ? 'player-popper' : ''}`}>
        <div className="player-left">{/* <MediaItem isPlayer ignore /> */}</div>

        <div className="player-middle">
          <div className="d-flex flex-column align-items-center">
            <div className="player-controls d-flex align-items-center justify-content-center">
              <Tippy content="Phát ngẫu nhiên">
                <div className="player-control d-none-mobile">
                  <BsShuffle />
                </div>
              </Tippy>
              <div>
                <div className="player-control large d-none-mobile">
                  <BsFillSkipStartFill />
                </div>
              </div>
              <div className="player-control play">
                <BsFillPlayFill />
              </div>
              <div className="player-control large">
                <BsFillSkipEndFill />
              </div>
              <Tippy content="Phát lại">
                <div className="player-control d-none-mobile">
                  <BsRepeat />
                </div>
              </Tippy>
            </div>
            <div className="d-flex align-items-center justify-content-center player-duration d-none-mobile">
              <span className="player-duration__time">00:00</span>

              <div className="player-progress player-progress__main">
                <input
                  title="duration"
                  type="range"
                  value={value}
                  step="1"
                  min="0"
                  max="100"
                  className="player-progress__input"
                  onChange={(e) => handleOnChange(e)}
                />
                <div className="player-progress__track">
                  <div
                    className="player-progress__update"
                    style={{
                      width: `${value}%`,
                    }}
                  />
                </div>
              </div>
              <span className="player-duration__time">04:30</span>
            </div>
          </div>
        </div>

        <div className="player-right d-none-mobile">
          <div className="d-flex align-items-center justify-content-end">
            <Tippy content="MV">
              <div className="player-right__btn">
                <BsBadge4K />
              </div>
            </Tippy>
            <Tippy content="Xem lời bài hát">
              <div onClick={() => setIsShowPlayerPopper(true)} className="player-right__btn">
                <BsMic />
              </div>
            </Tippy>
            <div className="player-right__volume">
              <div className="player-right__btn large">
                <BsVolumeUp />
                {/* <BsVolumeMute /> */}
              </div>
              <div className="player-right__block">
                <div className="player-progress">
                  <input
                    title="volume"
                    type="range"
                    value={volume}
                    step="1"
                    min="0"
                    max="100"
                    className="player-progress__input"
                    onChange={(e) => handleOnChangeVolume(e)}
                  />
                  <div className="player-progress__track">
                    <div
                      className="player-progress__update"
                      style={{
                        width: `${volume}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="player-right__divide"></div>
            <Tippy content="Danh sách phát">
              <div
                onClick={() => setIsShowQueue(!isShowQueue)}
                className={`player-right__btn  is-bg-content rounded-2  ${isShowQueue ? 'active' : ''}`}
              >
                <BsMusicNoteList />
              </div>
            </Tippy>
          </div>
        </div>
      </div>

      <Queue isShowQueue={isShowQueue} />

      <div className={`player-background ${isShowPlayerPopper ? 'is-show' : ''}`}>
        <div className="player-background__header d-flex align-items-center justify-content-between">
          <div className="player-background__left"></div>
          <div className="player-background__middle">
            <Tabs large secondary tabs={TABS} />
          </div>
          <div className="player-background__right">
            <Button circle secondary leftIcon={<BsArrowsAngleExpand />} />
            <Button circle secondary leftIcon={<BsGear />} />
            <Button onClick={() => setIsShowPlayerPopper(false)} circle secondary leftIcon={<BsChevronDown />} />
          </div>
        </div>
        <div className="player-background__content">
          <Container>
            <Row>
              <Col xs={NaN} md="0" lg="5">
                <div className="me-5">
                  <img className="rounded" src={images.playlist.image} alt="" />
                </div>
              </Col>
              <Col xs="12" md="12" lg="7">
                <div className="ms-5 player-background__lyrics">
                  <ul className="lyrics">
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                    <li className="lyrics__item">Bài hát: Euphoria</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

Player.propTypes = {
  handleShowQueue: PropTypes.func,
};

export default Player;
