import { Button } from 'components';
import React from 'react';

export default function RegisterEmailForm() {
  return (
    <form className="w-75 mt-4">
      <div className="form-group">
        <div className="form-input">
          <input type="text" id="username" placeholder="Nhập tên của bạn" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-label">
          <label htmlFor="username">Thông tin email</label>
        </div>
        <div className="form-input">
          <input type="email" id="email" placeholder="Nhập địa chỉ email" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-input">
          <input type="password" id="password" placeholder="Nhập mât khẩu" />
        </div>
        <span className="form-help">Gợi ý: Mật khẩu phải có ít nhất 6 ký tự</span>
      </div>
      <div className="form-group">
        <div className="form-input">
          <input type="number" id="code" placeholder="Nhập mã xác nhận" />
          <button>Xác nhận</button>
        </div>
      </div>

      <div className="form-btn">
        <Button primary fullWidth>
          Đăng nhập
        </Button>
      </div>
    </form>
  );
}
