import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { IModal } from "../../utils/types";

export function Modal({ title, close, children }: IModal) {
  const handleEscKeydown = (evt: {key: string}) => {
    if (evt.key === 'Escape') {
      close()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, []);


  return (
    <>
      <div className={modalStyles.modal}>
        <div className={modalStyles.title}>
          <h2>{title}</h2>
        </div>
          <button className={modalStyles.close} onClick={close}></button>
        {children}
      </div>
      <ModalOverlay onClick={close} />
    </>
  );
};

