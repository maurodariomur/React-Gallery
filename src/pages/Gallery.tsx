import React from 'react';
import '../styles/Gallery.css';
import { useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ellaImage from '../assets/ella.jpeg';
import ellaImage2 from '../assets/ella2.jpeg';
import ellaImage3 from '../assets/ella3.jpeg';
import ellaImage4 from '../assets/ella4.jpeg';
import ellaImage5 from '../assets/ella5.jpeg';
import ellaImage6 from '../assets/ella6.jpeg';
import ellaImage7 from '../assets/ella7.jpeg';
import ellaImage8 from '../assets/ella8.jpeg';

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/another-page');
  };

  const handleNextClick = () => {
    navigate('/musics');
  };

  const images = [
    {
      original: ellaImage,
      thumbnail: ellaImage
    },
    {
      original: ellaImage2,
      thumbnail: ellaImage2
    },
    {
      original: ellaImage3,
      thumbnail: ellaImage3
    },
    {
      original: ellaImage4,
      thumbnail: ellaImage4
    },
    {
      original: ellaImage5,
      thumbnail: ellaImage5
    },
    {
      original: ellaImage6,
      thumbnail: ellaImage6
    },
    {
      original: ellaImage7,
      thumbnail: ellaImage7
    },
    {
      original: ellaImage8,
      thumbnail: ellaImage8
    }
  ];

  return (
    <>
      <div className="gallery-container">
        <div className='container-text'>
        <h1>Fotos nuestras</h1>
        <p>
          Sabes que no soy una persona que le gusta mucho sacarse fotos, <br/>
          pero cada vez que me saco una foto con vos es muy especial para mi, <br/>
          y me alegra mucho, por eso te quiero compartir algunas de las fotos, <br/>
          cuando te extraño o cuando me pongo a pensar en vos, <br/>
          las miró y me alegran el día. Y mi cara de felicidad cuando estas cerca. <br/>
        </p>
        </div>
      </div>
      <div className="gallery">
        <ImageGallery items={images} />
      </div>
      <div className='button-container centered'>
        <button className='init' onClick={handleStartClick}>
          Volver
        </button>
        <button className='init' onClick={handleNextClick}>
          Seguir
        </button>
      </div>
    </>
  );
};

export default Gallery;