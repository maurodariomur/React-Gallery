import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/button.css';
import '../styles/AnotherPage.css';

const AnotherPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/');
  };

  const handleNextClick = () => {
    navigate('/gallery');
  };

  return (
    <div id="page" className='card page'>
      <img src='./src/assets/ella.jpeg' alt='Carta' className='card-image' />
      <div className='card-content'>
        <h1>¿Porque me gustas?</h1>
        <p>
          Me pierdo en tus ojos, me gusta todo de vos, tu olor, tu forma de ser... <br/> 
          Que seas tan espontánea;<br/> 
          nunca sé qué esperar, y eso me encanta. <br/> 
          Incluso cuando cuando te perdes en tu propio mundo o desapareces por un <br/> 
          tiempo, no quiero ni puedo dejar de pensar en vos.<br/> 
          Un mensaje tuyo o verte me cambia mi panorama 
          y haces que mi día se ilumine. <br/> 
          Es como si todo tuviera más sentido cuando estas cerca
        </p>
        <div className='button-container'>
          <button className='init' onClick={handleStartClick}>
            Volver
          </button>
          <button className='init' onClick={handleNextClick}>
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnotherPage;