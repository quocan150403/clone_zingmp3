import { toast } from 'react-toastify';

export const makeApiRequestWithToast = async ({
  apiFunction,
  successMessage,
  onSuccessCallback,
}) => {
  try {
    await toast.promise(apiFunction, {
      pending: 'Đang thực hiện...',
      success: successMessage || 'Thành công',
    });

    if (onSuccessCallback) {
      onSuccessCallback();
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.error);
    } else {
      toast.error('Đã xảy ra lỗi');
    }
  }
};
