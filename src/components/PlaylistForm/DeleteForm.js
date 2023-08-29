import Modal from 'react-modal';
import { Button } from 'components';

export default function DeleteForm(isShowModal, onClickHide, onClickConfirm) {
  return (
    <Modal
      isOpen={isShowModal}
      onRequestClose={onClickHide}
      overlayClassName="overlay"
      className="modal-default"
    >
      <div className="p-4 d-flex flex-column">
        <h4 className="fw-bold fs-4">Xóa playlist</h4>
        <p className="text-wrap">
          Playlist của bạn sẽ bị xóa khỏi thư viện cá nhân. Các bài hát do bạn tải lên sẽ vẫn được
          giữ lại.
          <br />
          Bạn có muốn xóa?
        </p>
        <div className="d-flex justify-content-end">
          <Button onClick={onClickHide} secondary uppercase>
            Không
          </Button>
          <Button onClick={onClickConfirm} primary uppercase>
            Có
          </Button>
        </div>
      </div>
    </Modal>
  );
}
