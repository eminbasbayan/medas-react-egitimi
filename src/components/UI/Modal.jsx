import React from "react";

function Modal({ setShowModal }) {
  return (
    <div className="modal-wrapper absolute bg-gray-200 p-10">
      <h3>Inputlar boş olamaz</h3>
      <p>Lütfen tüm inputların dolu olduğundan emin olalım.</p>
      <button onClick={() => setShowModal(false)}>Kapat</button>
    </div>
  );
}

export default Modal;
