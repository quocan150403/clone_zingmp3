import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import { AlbumItem, MediaList, Helmet, Section, ArtistList } from 'components';
import { albumApi, songApi } from 'api';

export default function DetailAlbumPage() {
  const { slug } = useParams();
  const [album, setAlbum] = useState();
  const [songList, setSongList] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await albumApi.getBySlug(slug);
        const { _id, artists } = response;
        const responseSong = await songApi.getQuery({ albumId: _id });
        setArtistList(artists);
        setAlbum(response);
        setSongList(responseSong);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Helmet title="Chi tiết">
      <div className="detail mt-custom">
        <Row className="mb-5">
          <Col xs={12} lg={4} xl={3}>
            {album && <AlbumItem data={album} detail />}
          </Col>
          <Col xs={12} lg={8} xl={9}>
            <div>
              <MediaList mediaList={songList} />
            </div>
          </Col>
        </Row>

        <Section title="Nghệ sĩ tham gia">
          {artistList && <ArtistList artists={artistList} />}
        </Section>
      </div>
    </Helmet>
  );
}
