import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { BsX } from 'react-icons/bs';
import { closeAddForm, addPlaylistAsync } from 'app/features/playlistSlice';

import './PlaylistForm.scss';
import { Button } from 'components';
import usePlaylistForm from 'hooks/usePlaylistForm';

export default function AddForm() {
  const isAddFormOpen = useSelector((state) => state.playlist.isAddFormOpen);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { form, handleNameChange, handlePublicChange, resetForm } = usePlaylistForm();

  const handleCloseAddModal = async () => {
    dispatch(closeAddForm());
  };

  const handleAddPlaylist = async () => {
    handleCloseAddModal();
    try {
      const response = await dispatch(addPlaylistAsync({ ...form, userId: currentUser._id }));
      if (addPlaylistAsync.fulfilled.match(response)) {
        toast.success('Playlist đã được thêm thành công.');
        resetForm();
      } else if (addPlaylistAsync.rejected.match(response)) {
        toast.error('Lỗi khi thêm playlist. Vui lòng thử lại sau.');
      }
    } catch (error) {
      toast.error('Lỗi khi thêm playlist. Vui lòng thử lại sau.');
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isAddFormOpen}
      onRequestClose={handleCloseAddModal}
      className="add-playlist"
      overlayClassName="overlay"
    >
      <span onClick={handleCloseAddModal} className="add-playlist__close">
        <BsX />
      </span>
      <h2 className="add-playlist__heading">Tạo playlist mới</h2>
      <input
        type="text"
        placeholder="Nhập tên playlist"
        className="add-playlist__input"
        value={form.name}
        onChange={handleNameChange}
      />
      <div className="add-playlist__option d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <h3 className="add-playlist__title">Công khai</h3>
          <p className="add-playlist__subtitle">Mọi người có thể tìm thấy playlist này.</p>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            value={form.public}
            checked={form.public}
            onChange={handlePublicChange}
          />
        </div>
      </div>
      <div className="add-playlist__option d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <h3 className="add-playlist__title">Phát ngẫu nhiên</h3>
          <p className="add-playlist__subtitle">Luôn phát ngẫu nhiên tất cả bài hát </p>
        </div>
        <div className="form-check form-switch">
          <input
            defaultChecked
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
      <div className="mt-4">
        <Button onClick={handleAddPlaylist} primary uppercase fullWidth>
          tạo mới
        </Button>
      </div>
    </Modal>
  );
}
