import React, { FC, useCallback, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  disabled,
  children,
}) => {
  const [showHideModal, setShowHideModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowHideModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  useEffect(() => {
    setShowHideModal(isOpen);
  }, [isOpen]);

  return (
    isOpen && (
      <div
        id="modal-container"
        className="fixed z-40 top-0 left-0 w-screen h-screen flex justify-center items-center bg-neutral-800/70"
      >
        <div
          className={`z-50 w-full md:w-4/6 lg:w-4/6 xl:w-3/5 h-full md:h-auto bg-white md:rounded-xl shadow-md translate duration-300 transition-all
        ${showHideModal ? "translate-y-0" : "translate-y-full"}
        ${showHideModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-full border-b-[1px] flex items-center p-6">
            <button onClick={handleClose} className="absolute">
              <IoCloseOutline size={"1.75rem"} title="Close Modal" />
            </button>
            <h2 className="w-full text-center font-bold text-ellipsis overflow-hidden whitespace-nowrap">
              {title}
            </h2>
          </div>
          <div className="p-6 w-full h-full md:max-h-[70vh] overflow-scroll overflow-x-hidden">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
