import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsAlarm, BsThreeDots } from 'react-icons/bs';

import Wrapper from 'components/Wrapper';
import { MediaItem } from 'components/Media';
import './queue.scss';

function Queue({ isShowQueue }) {
  const [queue, setQueue] = useState(Array.from({ length: 18 }, () => Math.floor(Math.random() * 40)));
  return (
    <div className={`queue ${isShowQueue ? 'open' : ''}`}>
      <Wrapper className="rounded-0">
        <div className="pt-4 pb-4 p-3 d-flex justify-content-between align-items-center">
          <div className="queue-tabs d-flex align-content-center">
            <button className="active">Danh sách phát</button>
            <button>Nghe gần đây</button>
          </div>
          <div className="queue-icon">
            <BsAlarm />
          </div>
          <div className="queue-icon">
            <BsThreeDots />
          </div>
        </div>
        <div className="queue-list pe-3 ps-3">
          {queue.map((item, index) => (
            <MediaItem small active key={index} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

Queue.propTypes = {
  isShowQueue: PropTypes.bool,
};

export default Queue;
