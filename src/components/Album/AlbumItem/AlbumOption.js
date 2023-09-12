import {
  BsArrowReturnRight,
  BsDownload,
  BsLink45Deg,
  BsTextWrap,
  BsThreeDots,
} from 'react-icons/bs';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import Wrapper from 'components/Wrapper';
import MenuItem from 'components/Wrapper/MenuItem';
import Button from 'components/Button';

export default function AlbumOption({ isShowOption, onHide, onShowOption }) {
  return (
    <TippyHeadless
      visible={isShowOption}
      interactive={true}
      placement="right-end"
      offset={[-200, 2]}
      onClickOutside={onHide}
      onHide={onHide}
      appendTo={() => document.body}
      render={(attrs) => (
        <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0">
          <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
          <MenuItem medium option icon={<BsDownload />} title="Tải xuống" />
          <MenuItem medium option icon={<BsLink45Deg />} title="Sao chép link" />
          <MenuItem medium option icon={<BsArrowReturnRight />} title="Chia sẻ" />
        </Wrapper>
      )}
    >
      <Tippy content="Khác">
        <div>
          <Button circle secondary medium leftIcon={<BsThreeDots />} onClick={onShowOption} />
        </div>
      </Tippy>
    </TippyHeadless>
  );
}
