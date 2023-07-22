import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsAlarm, BsThreeDots } from 'react-icons/bs';

import Wrapper from 'components/Wrapper';
import { MediaItem } from 'components/Media';
import './Queue.scss';
import Button from 'components/Button';
import Tabs from 'components/Tabs';
import { useEffect } from 'react';
import { songApi } from 'api';

function Queue({ isShowQueue }) {
  const [queue, setQueue] = useState([]);
  useEffect(() => {
    const getQueue = async () => {
      try {
        const response = await songApi.getQuery();
        setQueue(response);
      } catch (error) {
        console.log(error);
      }
    };
    getQueue();
  }, []);

  return (
    <aside className={`queue ${isShowQueue ? 'open' : ''}`}>
      <div className="queue-container">
        <div className="pt-4 pb-4 p-3 g-3 d-flex align-items-center">
          <Tabs
            secondary
            fullWidth
            tabs={[
              { id: 1, name: 'Danh sách phát' },
              { id: 2, name: 'Nghe gần đây' },
            ]}
          />
          <div className="ms-2">
            <Button secondary medium circle leftIcon={<BsAlarm />} />
            <Button secondary medium circle leftIcon={<BsThreeDots />} />
          </div>
        </div>
        {/* <div className="queue-main">
          <h2>Tiếp theo</h2>
          <p>
            Từ danh sách phát <a href="/">Chill</a>
          </p>
        </div> */}
        <div className="queue-list pe-3 ps-3">
          {queue.map((item, index) => (
            <MediaItem tracks={queue} data={item} grow active key={index} />
          ))}
        </div>

        <div className="queue-list pe-3 ps-3">
          {queue.map((item, index) => (
            <MediaItem tracks={queue} data={item} grow active key={index} />
          ))}
        </div>
      </div>
    </aside>
  );
}

Queue.propTypes = {
  isShowQueue: PropTypes.bool,
};

export default Queue;
