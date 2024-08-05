import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/anitamiton.css';
import '../styles/button.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/another-page');
  };

  return (
    <div className='App'>
      <h1>¡Bienvenida!</h1>
      <p>
        Esto es un regalo, un poco distinto y como no soy bueno haciendo manualidades,
        <br/>te hago esta pagina que era un poco lo que queria hacer <br />
         con las manualidades. <br />
         Una pregunta por que me haces recientemente, <br/>
        es porque me gustas, entonces, 
        te voy a intentar mostrar un poco lo que veo yo,<br/>
        espero te guste, y te haga sonreír...
        Decirte que se que soy muy intenso, pero todos mis regalos, son de corazón, y esta pagina<br />,
        es para cuando me extrañas, o recordarme.
      </p>
        <button className='init' onClick={handleStartClick}>
          Empezar
        </button>
    </div>
  );
};

export default Home;
