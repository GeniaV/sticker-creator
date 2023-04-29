import modalOverlayStyles from "./modal-overlay.module.css";

export interface EventHandlerProps {
  onClick: (e: React.MouseEvent) => void;
};

export function ModalOverlay({ onClick }: EventHandlerProps) {
  return (
    <div className={modalOverlayStyles.overlay} onClick={onClick}>
    </div>
  );
};
