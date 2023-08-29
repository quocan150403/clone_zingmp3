import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Helmet, Section, Tabs, Title, AlbumList, ArtistList } from 'components';
import { playlistApi, artistApi } from 'api';
import Song from './FavoriteSong';
import Album from './FavoriteAlbum';

const TABS = [
  {
    id: 0,
    name: 'Bài Hát',
    to: 'song',
  },
  {
    id: 1,
    name: 'Album',
    to: 'album',
  },
];

export default function LibraryPage() {
  const { currentUser } = useSelector((state) => state.user);
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [artistsFollowing, setArtistsFollowing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser._id) {
          const { followedArtists } = currentUser;
          const [resPlaylist, resFollowedArtists] = await Promise.all([
            playlistApi.getQuery({ userId: currentUser._id }),
            artistApi.getByIds({ ids: followedArtists.toString() }),
          ]);
          setMyPlaylist(resPlaylist);
          setArtistsFollowing(resFollowedArtists);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    fetchData();
  }, [currentUser]);

  return (
    <Helmet title="Thư Viện">
      <div className="library mt-custom">
        <Title>Thư viện</Title>

        <Section title="Nghệ sĩ đang theo dỗi">
          <ArtistList small artists={artistsFollowing} />
        </Section>

        <Section title="Playlist của tôi">
          <AlbumList albums={myPlaylist} />
        </Section>

        <div className="div mt-5 mb-5">
          <Tabs list={TABS} uppercase isBorderBottom />
          <div className="mt-4">
            <Routes>
              <Route path="/" element={<Song />} />
              <Route path="song" element={<Song />} />
              <Route path="album" element={<Album />} />
            </Routes>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
