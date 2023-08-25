import { useState, useRef, useEffect, memo } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FaSpinner } from 'react-icons/fa';
import { BsSearch, BsXLg } from 'react-icons/bs';

import { useDebounce } from 'hooks';
import { commonApi } from 'api';
import { Wrapper, MediaItem } from 'components';
import SearchCard from './SearchCard';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [songResult, setSongResult] = useState([]);
  const [albumResult, setAlbumResult] = useState([]);
  const [artistResult, setArtistResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 500);

  const searchRef = useRef();
  useEffect(() => {
    const getSearchResult = async () => {
      try {
        if (!searchValue.trim()) {
          setSongResult([]);
          setAlbumResult([]);
          setArtistResult([]);
          return;
        }
        setLoading(true);
        const response = await commonApi.search(searchValue);
        const { songs, albums, artists } = response;
        console.log(response);
        setSongResult(songs);
        setAlbumResult(albums);
        setArtistResult(artists);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getSearchResult();
  }, [debounce]);

  const handleChangeSearchValue = (e) => {
    const regex = /^\S/;
    if (regex.test(e.target.value)) {
      setSearchValue(e.target.value);
    } else {
      setSearchValue('');
    }
  };

  const handleClickBtnDelete = () => {
    setSearchValue('');
  };

  return (
    <HeadlessTippy
      interactive="true"
      visible={showResult}
      placement="bottom-start"
      offset={[0, 0]}
      onClickOutside={() => setShowResult(false)}
      reference={searchRef}
      appendTo={searchRef.current}
      render={(attrs) => (
        <div
          {...attrs}
          tabIndex="-1"
          style={{
            width: searchRef.current?.clientWidth + 1.6,
          }}
        >
          <Wrapper className="p-3 wrapper--search">
            {searchValue && <h3 className="header-search__title">Gợi ý kết quả</h3>}
            <div className="header-search__list">
              {songResult &&
                songResult.map((item, index) => (
                  <MediaItem key={index} tracks={songResult} data={item} grow link />
                ))}

              {albumResult &&
                albumResult.map((item, index) => <SearchCard isAlbum data={item} key={index} />)}

              {artistResult &&
                artistResult.map((item, index) => <SearchCard data={item} key={index} />)}
            </div>
          </Wrapper>
        </div>
      )}
    >
      <div
        ref={searchRef}
        className={`header-search ${showResult ? 'active' : ''}`}
        onClick={() => setShowResult(!showResult)}
      >
        <input
          type="text"
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
          className="header-search__input"
          value={searchValue}
          onChange={handleChangeSearchValue}
        />
        <span className="header-search__btn">
          <BsSearch className="header-search__icon" />
        </span>
        {!!searchValue && !loading && (
          <span onClick={handleClickBtnDelete} className="header-search__close">
            <BsXLg />
          </span>
        )}
        {loading && (
          <div className="header-search__loading">
            <FaSpinner />
          </div>
        )}
      </div>
    </HeadlessTippy>
  );
}

export default memo(Search);
