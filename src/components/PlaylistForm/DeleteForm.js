import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  closeDeleteForm,
  deletePlaylistAsync,
  setCurrentPlaylist,
} from 'app/features/playlistSlice';
import { Button } from 'components';

export default function DeleteForm() {
  const { isDeleteFormOpen, currentPlaylist } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const handleCloseDeleteModal = async () => {
    dispatch(closeDeleteForm());
  };

  const handleDeletePlaylist = async () => {
    handleCloseDeleteModal();
    try {
      if (currentPlaylist._id) {
        const response = await dispatch(deletePlaylistAsync(currentPlaylist._id));
        if (deletePlaylistAsync.fulfilled.match(response)) {
          toast.success('Đã xóa playlist thành công.');
        } else if (deletePlaylistAsync.rejected.match(response)) {
          toast.error('Lỗi khi xóa playlist. Vui lòng thử lại sau.');
        }
      }
    } catch (error) {
      toast.error('Lỗi khi xóa playlist. Vui lòng thử lại sau.');
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isDeleteFormOpen}
      onRequestClose={handleCloseDeleteModal}
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
          <Button onClick={handleCloseDeleteModal} secondary uppercase>
            Không
          </Button>
          <Button onClick={handleDeletePlaylist} primary uppercase>
            Có
          </Button>
        </div>
      </div>
    </Modal>
  );
}
