import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AlbumList, CardItem, Helmet, Section } from 'components';
import { albumApi, genreApi } from 'api';

export default function DetailGenrePage() {
  const { slug } = useParams();
  const [albumList, setAlbumList] = useState([]);
  const [genre, setGenre] = useState();

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await genreApi.getBySlug(slug);
        const { _id } = response;
        const albums = await albumApi.getByGenreId(_id);
        setGenre(response);
        setAlbumList(albums);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    getAlbums();
  }, [slug]);

  return (
    <Helmet title="Thể loại">
      <section className="mb-5">
        <CardItem image={genre && genre.imageUrl} />
      </section>

      <Section title={genre && genre.name}>
        <AlbumList albums={albumList} />
      </Section>
    </Helmet>
  );
}
