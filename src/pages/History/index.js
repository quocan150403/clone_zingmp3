import { useParams, NavLink } from 'react-router-dom';
import Helmet from 'components/Helmet';
import './History.scss';
import Title from 'components/Title';
import Tabs from 'components/Tabs';

function History() {
  const { type } = useParams();
  return (
    <Helmet title="Lịch sử">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon name="Phát gần đây" />
          <div className="vertical-separator" />
          <Tabs
            tabs={[
              { id: 1, name: 'Bài hát' },
              { id: 2, name: 'Playlist' },
              { id: 3, name: 'MV' },
              { id: 4, name: 'Radio' },
              { id: 5, name: 'Podcast' },
            ]}
          />
        </div>
        <div className="history-content"></div>
      </div>
    </Helmet>
  );
}

export default History;
