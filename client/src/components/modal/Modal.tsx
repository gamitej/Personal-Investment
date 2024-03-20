// import { useCallback, useEffect, useState } from "react";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  /**
   * TSX
   */
  return (
    <div
      className="modal-overlay"
      style={{
        animation: `${
          isOpen
            ? "slideInCenter 0.5s forwards"
            : "slideOutCenter 0.5s forwards"
        }`,
      }}
    >
      <div className="modal">
        hi
        <div onClick={onClose}>close</div>
      </div>
    </div>
  );
};

export default Modal;
