import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AlbumList, CardItem, Helmet, Nodata, Section } from 'components';
import { albumApi, genreApi } from 'api';

export default function DetailGenrePage() {
  const { slug } = useParams();
  const [albumList, setAlbumList] = useState([]);
  const [genre, setGenre] = useState({});

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
      <div>
        <img
          className="rounded max-h object-fit-cover mb-5"
          src={genre?.imageUrl}
          alt={genre?.name}
        />

        {albumList?.length ? (
          <Section title={genre && genre.name}>
            <AlbumList albums={albumList} />
          </Section>
        ) : (
          <Nodata message="Không có album nào trong thể loại này" />
        )}
      </div>
    </Helmet>
  );
}
