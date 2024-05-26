import Dialog from '@mui/material/Dialog';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  img: string;
}

function Modal({ open, onClose, img }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <img src={img} alt="img" />
    </Dialog>
  );
}

export { Modal };