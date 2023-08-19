import { useState, useRef, useEffect, memo } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import { songApi } from 'api';
import { Wrapper, MediaItem, ArtistCardItem } from 'components';
import { BsSearch, BsX } from 'react-icons/bs';
import { ImSpinner } from 'react-icons/im';

function Search() {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    const getSearchResult = async () => {
      try {
        const response = await songApi.getQuery();
        setSearchResult(response);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchResult();
  }, []);

  return (
    <HeadlessTippy
      interactive="true"
      visible={isShowSearch}
      placement="bottom-start"
      offset={[0, 0]}
      onClickOutside={() => setIsShowSearch(false)}
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
            <h3 className="header-search__title">Lịch sử tìm kiếm</h3>
            <div className="header-search__list">
              {/* {searchResult&& searchResult.map((item, index) => (
                <ArtistCardItem data={item} key={index} />
              ))}
              {searchResult&& searchResult.map((item, index) => (
                <MediaItem tracks={searchResult} data={item} grow key={index} />
              ))} */}
            </div>
          </Wrapper>
        </div>
      )}
    >
      <div
        ref={searchRef}
        className={`header-search ${isShowSearch ? 'active' : ''}`}
        onClick={() => setIsShowSearch(!isShowSearch)}
      >
        <input
          type="text"
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
          className="header-search__input"
        />
        <span className="header-search__btn">
          <BsSearch className="header-search__icon" />
        </span>
        <BsX className="header-search__close" />
        <ImSpinner className="header-search__loading" />
      </div>
    </HeadlessTippy>
  );
}

export default memo(Search);
