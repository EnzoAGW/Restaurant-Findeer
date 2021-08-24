import React, { useEffect }  from 'react';

import Portal from './portal'

import { Overlay, Dialog } from './style'

const Modal = ({ Children, open, onClose }) => {
  useEffect(() => {
    function onEsc(e){
    if (e.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    }
  },[onClose])
  
  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }
  return(
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{Children}</Dialog>
      </Overlay>
    </Portal>
  );
}
export default Modal; 