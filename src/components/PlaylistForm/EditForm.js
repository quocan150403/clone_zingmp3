import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { BsX } from 'react-icons/bs';
import { Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditForm, editPlaylistAsync } from 'app/features/playlistSlice';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './PlaylistForm.scss';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  public: yup.boolean().required('Password is required'),
});

export default function EditForm() {
  const dispatch = useDispatch();
  const { isEditFormOpen, currentPlaylist } = useSelector((state) => state.playlist);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (currentPlaylist) {
      setValue('name', currentPlaylist.name);
      setValue('public', currentPlaylist.public);
    }
  }, [currentPlaylist]);

  const handleCloseEditModal = async () => {
    dispatch(closeEditForm());
  };

  const onSubmit = async (data) => {
    handleCloseEditModal();
    try {
      const newData = {
        name: data.name,
        public: data.public,
        userId: currentPlaylist.userId,
      };
      toast.loading('Đang chỉnh sửa');
      const response = await dispatch(
        editPlaylistAsync({ id: currentPlaylist._id, playlistData: newData }),
      );
      if (editPlaylistAsync.fulfilled.match(response)) {
        toast.dismiss();
        toast.success('Đã sửa playlist thành công.');
      }
    } catch (error) {
      toast.dismiss();
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="add-playlist__heading">Tạo playlist mới</h2>
        <input
          name="name"
          className="add-playlist__input"
          placeholder="Nhập tên playlist"
          {...register('name')}
        />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
        <div className="add-playlist__option d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <h3 className="add-playlist__title">Công khai</h3>
            <p className="add-playlist__subtitle">Mọi người có thể tìm thấy playlist này.</p>
          </div>
          <div className="form-check form-switch">
            <input
              id="flexSwitchCheckPublic"
              name="public"
              className="form-check-input"
              type="checkbox"
              role="switch"
              defaultChecked
              {...register('public')}
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
              id="flexSwitchCheckRandom"
            />
          </div>
        </div>
        <div className="mt-4">
          <Button type="submit" primary uppercase fullWidth>
            tạo mới
          </Button>
        </div>
      </form>
    </Modal>
  );
}
