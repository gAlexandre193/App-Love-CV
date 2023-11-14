import { useState } from 'react';
// Material UI
import IconButton from '@mui/material/IconButton';
// Icons
import { Whatsapp, Instagram } from 'react-bootstrap-icons';
// Image
import catImage from './assets/cat.jpeg';
// Components
import ModalRedirect from './components/modal';
import CvLine from './components/cvLine';

export default function App() {
  const [ visibiltyModal, setVisibiltyModal ] = useState(false);

  // Actions
  const handlerWhatsAction = () => alert('Você acha que é fácil assim rapaz?');
  const handlerShowModal = () => setVisibiltyModal(true);
  const handlerHideModal = () => setVisibiltyModal(false);
  const handleRedirectToInstagram = (profileURL: string) => window.location.href = profileURL;

  return (
    <div className='flex flex-col gap-5 m-auto py-5 px-4 h-screen max-w-2xl sm:flex-row'>
      <ModalRedirect 
        open={visibiltyModal}
        handleClose={handlerHideModal}
        handleRedirect={handleRedirectToInstagram}
      />
      
      <div className='flex flex-col items-center gap-3'>
        <img 
          src={catImage}
          alt='Test'
          className='shadow-md rounded-xl w-56'
          onLoad={() => console.log('Imagem Carregada')}
        />

        <div className='bg-white shadow-xl rounded-3xl flex gap-3 py-1 px-3'>
          <IconButton className='h-[50px] w-[50px]' onClick={handlerWhatsAction}>
            <Whatsapp size={26} />
          </IconButton>
          
          <IconButton className='h-[50px] w-[50px]' onClick={handlerShowModal}>
            <Instagram size={26} />
          </IconButton>
        </div>
      </div>
      
      <div className='flex flex-1 flex-col gap-2'>
        <CvLine 
          title='Sobre mim' 
          description='
            Amante de basquete, tecnologia e video games. 
            Desenvolvedor de software com o sonho de ser aviador 
            militar. 🚀
          ' 
        />
        
        <CvLine 
          title='Cantada' 
          description='
            Da mesma forma que o Teste de Turing desafia a 
            distinção entre máquina e humanidade, ao te ver, 
            questiono se você é uma obra prima da natureza ou 
            uma criação celestial
          ' 
          />  
      </div>
    </div>
  );
}