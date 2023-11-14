import { CSSProperties } from 'react';
import Modal from '@mui/material/Modal';
import ButtonBase from '@mui/material/ButtonBase';

interface ModalI {
  open: boolean;
  handleClose?: () => void;
  handleRedirect?: (profileURL: string) => void;
}
interface ButtonI {
  variant?: 'main' | 'danger';
  label: string;
  handleAction?: () => void;
}

export default function ModalRedirect({ open, handleClose, handleRedirect }: ModalI) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className='bg-white rounded-xl absolute top-1/2 left-1/2 right-1/2 p-3 w-11/12 max-w-2xl' style={{ transform: 'translate(-50%, -50%)' }}>
        <h3> Você deseja ir para o perfil do "grande amor"? </h3>

        <div className='flex gap-3 justify-between mt-3'> 
          <Button 
            variant='danger' 
            label='Cancelar' 
            handleAction={handleClose}
          />

          <Button 
            label='Redirecionar' 
            handleAction={() => handleRedirect && handleRedirect('https://www.instagram.com/i.am.alexandre/')} 
          />
        </div>
      </div>
    </Modal>
  );
}

function Button({ variant = 'main', label, handleAction }: ButtonI) {
  const styles:CSSProperties = {
    borderRadius: 12,
    fontSize: '.9rem',
    padding: '0 8px',
    height: 46,
    width: 125,
  };

  const borderStyle = (): CSSProperties => {
    if(variant === 'danger') {
      return { border: '1px solid #ef233c' };
    }

    return { border: '1px solid #669bbc' };
  }

  return (
    <ButtonBase sx={{...styles, border: borderStyle() }} onClick={handleAction}>
      {label}
    </ButtonBase>
  );
}