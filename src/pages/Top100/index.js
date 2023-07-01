import Helmet from 'components/Helmet';
import { Top100Banner } from 'components/Icons';
import Section from 'components/Section';
import AlbumList from 'components/AlbumList';
import './Top100.scss';

function Top100() {
  return (
    <Helmet title="Top 100">
      <div className="top100">
        <div className="mb-5 text-center">
          <Top100Banner />
        </div>
        <Section className="pt-5" title="Nổi bật">
          <AlbumList albumList={Array.from({ length: 5 })} />
        </Section>

        <Section title="Nhạc Việt">
          <AlbumList albumList={Array.from({ length: 8 })} />
        </Section>
      </div>
    </Helmet>
  );
}

export default Top100;
