import { Button } from 'components';
import React from 'react';

export default function LoginEmailForm() {
  return (
    <form className="w-75 mt-4">
      <div className="form-group">
        <div className="form-input">
          <input type="email" id="email" placeholder="Nhập địa chỉ email" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-input">
          <input type="password" id="password" placeholder="Nhập mât khẩu" />
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
