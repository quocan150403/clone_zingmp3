import Helmet from 'components/Helmet';
import './History.scss';
import Title from 'components/Title';

function History() {
  return (
    <Helmet title="Lịch sử">
      <div className="history">
        <div className="history-tabs d-flex align-items-center">
          <Title className="mb-0" small hideIcon name="Phát gần đây" />
          <div className="history-separator" />
          <div className="tabs__list">
            <div className="tabs__item tabs__item--active">Bài Hát</div>
            <div className="tabs__item">Playlist</div>
            <div className="tabs__item">MV</div>
            <div className="tabs__item">RAdio</div>
            <div className="tabs__item">Podcast</div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default History;
