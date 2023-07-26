import { useEffect, useState, memo } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import './Header.scss';
import { Button } from 'components';
import Search from './Search';
import Options from './Options';
import Theme from './Theme';

function Header() {
  const [isShowTheme, setIsShowTheme] = useState(false);
  const [isActiveHeader, setIsActiveHeader] = useState(false);

  useEffect(() => {
    const containerElement = document.querySelector('.app-content');
    containerElement.addEventListener('scroll', (e) => {
      setIsActiveHeader(e.target.scrollTop > 0);
    });
  }, []);

  const onClickCloseModal = () => {
    setIsShowTheme(false);
  };

  return (
    <header className={`header ${isActiveHeader ? 'active' : ''}`}>
      <div className="header-navigate d-none-mobile">
        <Button large circle leftIcon={<BsArrowLeft />} />
        <Button large circle leftIcon={<BsArrowRight />} />
      </div>
      <Search />
      <Options onClickOpenModal={() => setIsShowTheme(!isShowTheme)} />
      <Theme isOpen={isShowTheme} onRequestClose={onClickCloseModal} />
    </header>
  );
}

export default memo(Header);
