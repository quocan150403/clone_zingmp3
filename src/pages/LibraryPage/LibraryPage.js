import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MediaList, Helmet, Section, Tabs, Title, AlbumList, ArtistList } from 'components';
import { songApi, albumApi, playlistApi, artistApi } from 'api';

const TABS = [
  {
    id: 0,
    name: 'Bài Hát',
  },
  {
    id: 1,
    name: 'Album',
  },
];

export default function LibraryPage() {
  const { currentUser } = useSelector((state) => state.user);
  const [myPlaylist, setMyPlaylist] = useState([]);
  const [artistsFollowing, setArtistsFollowing] = useState([]);
  const [songList, setSongList] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [tab, setTab] = useState(TABS[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser._id) {
          const { favoriteAlbums, favoriteSongs, followedArtists } = currentUser;
          const [resPlaylist, resFollowedArtists, resValue] = await Promise.all([
            playlistApi.getQuery({ userId: currentUser._id }),
            artistApi.getByIds({ ids: followedArtists.toString() }),
            tab.id === 0
              ? songApi.getByIds({ ids: favoriteSongs.toString(), limit: 10 })
              : albumApi.getByIds({ ids: favoriteAlbums.toString(), limit: 10 }),
          ]);

          setMyPlaylist(resPlaylist);
          setArtistsFollowing(resFollowedArtists);

          if (tab.id === 0) {
            setSongList(resValue);
            setAlbumList([]);
          } else if (tab.id === 1) {
            setAlbumList(resValue);
            setSongList([]);
          }
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
  }, [currentUser, tab]);

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
          <Tabs list={TABS} tab={tab} setTab={setTab} uppercase isBorderBottom />
          <div className="mt-4">
            {tab.id === 0 && <MediaList mediaList={songList} />}
            {tab.id === 1 && <AlbumList albums={albumList} />}
          </div>
        </div>
      </div>
    </Helmet>
  );
}
