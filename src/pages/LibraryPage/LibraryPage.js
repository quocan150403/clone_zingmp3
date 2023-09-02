import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Helmet, Section, Tabs, Title, AlbumList, ArtistList } from 'components';
import { playlistApi, artistApi } from 'api';
import FavoriteSong from './FavoriteSong';
import FavoriteAlbum from './FavoriteAlbum';
import UploadSong from './UploadSong';

const TABS = [
  {
    id: 0,
    name: 'Bài Hát',
    to: '*',
  },
  {
    id: 1,
    name: 'Album',
    to: 'album',
  },
  {
    id: 2,
    name: 'Đã tải lên',
    to: 'upload',
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
          const fetchPromiseAll = [playlistApi.getQuery({ userId: currentUser._id })];

          if (followedArtists.length > 0) {
            fetchPromiseAll.push(artistApi.getByIds({ ids: followedArtists.toString() }));
          }

          const [resPlaylist, resFollowedArtists] = await Promise.all(fetchPromiseAll);

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

        {artistsFollowing?.length ? (
          <Section title="Nghệ sĩ đang theo dỗi">
            <ArtistList small artists={artistsFollowing} />
          </Section>
        ) : null}

        {myPlaylist?.length ? (
          <Section title="Playlist của tôi">
            <AlbumList albums={myPlaylist} />
          </Section>
        ) : null}

        <div className="div mt-5 mb-5">
          <Tabs list={TABS} uppercase isBorderBottom />
          <div className="mt-4">
            <Routes>
              <Route path="song" element={<FavoriteSong />} />
              <Route path="/*" element={<FavoriteSong />} />
              <Route path="album" element={<FavoriteAlbum />} />
              <Route path="upload" element={<UploadSong />} />
            </Routes>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
