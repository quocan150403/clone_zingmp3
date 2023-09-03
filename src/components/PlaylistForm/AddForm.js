import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { BsX } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { closeAddForm, addPlaylistAsync } from 'app/features/playlistSlice';

import './PlaylistForm.scss';
import { Button } from 'components';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  public: yup.boolean().required('Password is required'),
});

export default function AddForm() {
  const isAddFormOpen = useSelector((state) => state.playlist.isAddFormOpen);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleCloseAddModal = async () => {
    dispatch(closeAddForm());
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    handleCloseAddModal();
    const newData = {
      name: data.name,
      public: data.public,
      userId: currentUser._id,
    };
    toast.loading('Đang thực hiện');
    try {
      const response = await dispatch(addPlaylistAsync(newData));
      if (addPlaylistAsync.fulfilled.match(response)) {
        toast.dismiss();
        toast.success('Playlist đã được thêm thành công.');
        reset();
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
