import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import Button from 'components/Button';
import Tabs from 'components/Tabs';
import { BsArrowsAngleExpand, BsChevronDown, BsGear } from 'react-icons/bs';

const TABS = [
  { id: 1, name: 'Danh sách phát' },
  { id: 2, name: 'Karaoke' },
  { id: 3, name: 'Lời bài hát' },
];

function Background({ imageUrl, isShowPlayerPopper, onClickToggleBackground }) {
  const [tab, setTab] = useState(TABS[0]);

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
        <Container>
          <div>{tab.id === 1 && <div>Danh sách phát</div>}</div>
          <div>
            {tab.id === 2 && (
              <Row className="g-5 align-items-center">
                <Col xs="12">
                  <h1 className="lyrics-detail">Bài hát mới nhất là một bài hát hay</h1>
                </Col>
                <Col xs="12">
                  <h1 className="lyrics-detail">Bài hát mới nhất là một bài hát hay</h1>
                </Col>
                <Col xs="12">
                  <h1 className="lyrics-detail">Bài hát mới nhất là một bài hát hay</h1>
                </Col>
              </Row>
            )}
          </div>
          <div>
            {tab.id === 3 && (
              <Row>
                <Col xs={NaN} md="0" lg="5">
                  <div className="me-5">
                    <img className="rounded" src={imageUrl} alt="" />
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
            )}
          </div>
        </Container>
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
