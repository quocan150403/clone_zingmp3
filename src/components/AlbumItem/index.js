import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  BsArrowReturnRight,
  BsDownload,
  BsHeart,
  BsLink45Deg,
  BsPlayFill,
  BsTextWrap,
  BsThreeDots,
} from 'react-icons/bs';
import classNames from 'classnames';
import { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';

import Button from 'components/Button';
import MenuItem from 'components/Wrapper/Menu';
import Wrapper from 'components/Wrapper';
import './AlbumItem.scss';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function AlbumItem({ data, small, detail }) {
  const [isShowOption, setIsShowOption] = useState(false);

  const classes = classNames('album', {
    detail,
    small,
  });

  return (
    <div className={classes}>
      <div className="album-wrapper br-5">
        <img className="album-wrapper__image" src={BACKEND_URL + data.thumbnail_url} alt="" />
        <div className="album-wrapper__actions">
          <Tippy content="Thêm vào thư viện">
            <div className="album-wrapper__btn">
              <BsHeart />
            </div>
          </Tippy>
          <div className="album-wrapper__btn album-wrapper__btn--play">
            <BsPlayFill />
          </div>
          <TippyHeadless
            visible={isShowOption}
            interactive={true}
            placement="bottom-end"
            offset={[0, 10]}
            onClickOutside={() => setIsShowOption(false)}
            onHide={() => setIsShowOption(false)}
            appendTo={() => document.body}
            render={(attrs) => (
              <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0">
                <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
                <MenuItem small option icon={<BsDownload />} title="Tải xuống" />
                <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
              </Wrapper>
            )}
          >
            <Tippy content="Khác">
              <div className="album-wrapper__btn" onClick={() => setIsShowOption(!isShowOption)}>
                <BsThreeDots />
              </div>
            </Tippy>
          </TippyHeadless>
        </div>
        <div className="album-wrapper__overlay" />
      </div>
      <div className="album-info">
        <Link href="/" className="album-info__title">
          {data.name}
        </Link>
        {detail && <p className="album-info__authors mb-2">{data.createAt}</p>}
        <p className="album-info__authors mb-2">
          <Link className="album-info__author">AMEE, </Link>
          <Link className="album-info__author">ERIK, </Link>
          <Link className="album-info__author">Hoàng Duyên</Link>
        </p>
        {detail && (
          <div>
            <p className="album-info__likes mb-4">81k người yêu thích</p>
            <Button primary uppercase leftIcon={<BsPlayFill />}>
              Phát tất cả
            </Button>
            <div className="mt-4">
              <Button circle secondary medium leftIcon={<BsHeart />} />
              <Button circle secondary medium leftIcon={<BsThreeDots />} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

AlbumItem.propTypes = {
  data: PropTypes.object,
  props: PropTypes.object,
  small: PropTypes.bool,
  detail: PropTypes.bool,
  add: PropTypes.bool,
};

export default AlbumItem;
