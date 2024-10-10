import React from "react";
import reactDOM from "react-dom";
import './Modal.css';

function Modal({ children }) {
  return reactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById('modal')
  );
}

export { Modal };