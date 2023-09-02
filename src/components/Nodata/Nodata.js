import React from 'react';

function Nodata({ message = 'Không có bài hát nào trong album này' }) {
  return (
    <div className="no-image-bg d-flex flex-column align-items-center justify-content-center">
      <div className="no-image" />
      <h6 className="no-image-title">{message}</h6>
    </div>
  );
}

export default Nodata;
