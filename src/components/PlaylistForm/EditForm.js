import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { BsX } from 'react-icons/bs';
import { Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import usePlaylistForm from 'hooks/usePlaylistForm';
import { closeEditForm, editPlaylistAsync } from 'app/features/playlistSlice';
import { toast } from 'react-toastify';

export default function EditForm() {
  const dispatch = useDispatch();
  const { isEditFormOpen, currentPlaylist } = useSelector((state) => state.playlist);
  const { form, handleNameChange, handlePublicChange, handleUpdateAll } =
    usePlaylistForm(currentPlaylist);

  useEffect(() => {
    handleUpdateAll(currentPlaylist);
  }, [currentPlaylist]);

  const handleCloseEditModal = async () => {
    dispatch(closeEditForm());
  };

  const handleEditPlaylist = async () => {
    handleCloseEditModal();
    try {
      const newData = {
        name: currentPlaylist.name,
        public: currentPlaylist.public,
        userId: currentPlaylist.userId,
      };
      const response = await dispatch(
        editPlaylistAsync({ id: currentPlaylist._id, playlistData: newData }),
      );
      if (editPlaylistAsync.fulfilled.match(response)) {
        toast.success('Đã sửa playlist thành công.');
      } else if (editPlaylistAsync.rejected.match(response)) {
        toast.error('Lỗi khi sửa playlist. Vui lòng thử lại sau.');
      }
    } catch (error) {
      toast.error('Lỗi khi sửa playlist. Vui lòng thử lại sau.');
      console.log(error);
    }
  };
  return (
    <Modal
      isOpen={isEditFormOpen}
      onRequestClose={handleCloseEditModal}
      className="add-playlist"
      overlayClassName="overlay"
    >
      <span onClick={handleCloseEditModal} className="add-playlist__close">
        <BsX />
      </span>
      <h2 className="add-playlist__heading">Chỉnh sửa playlist</h2>
      <input
        type="text"
        placeholder="Nhập tên playlist"
        className="add-playlist__input"
        value={form?.name}
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
            value={form?.public}
            checked={form?.public}
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
        <Button onClick={handleEditPlaylist} primary uppercase fullWidth>
          Lưu
        </Button>
      </div>
    </Modal>
  );
}
