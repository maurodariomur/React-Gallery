import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ellaImage10 from '../assets/ella10.jpeg';
import ellaImage9 from '../assets/ella9.jpeg';
import spotify from '../assets/s.png';
import Modal from '../components/Modal';
import '../styles/Modal.css';

const Music: React.FC = () => {
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [showImage, setShowImage] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleStartClick = () => {
        window.location.href = 'https://open.spotify.com/playlist/2db0twx6uRfdNABZCs9Zfr?si=584c2c7c9b8e4ce9&pt=8ff6688aa6492f7306d9debf5136f4b1';
    };

    const handleNextClick = () => {
        navigate('/gallery');
    };

    const handleLikeClick = () => {
        setShowModal(true);
    };

    const handleConfirm = () => {
        setMessage('Sí');
        setImageSrc(ellaImage10);
        setShowImage(true);
        setShowMessage(true);
        setShowModal(false);
    };

    const handleCancel = () => {
        setMessage('No');
        setImageSrc(ellaImage9);
        setShowImage(true);
        setShowMessage(true);
        setShowModal(false);
    };

    return (
        <>
            <div>
                <h1>Músicas para Vos <img src={spotify} alt="Spotify" style={{ width: '30px', height: '30px', verticalAlign: 'middle' }} /></h1>
                <p>
                    Esta siento que es la parte mas complicada y ultima sección, porque tenemos gustos diferentes, <br />
                    pero espero te gusten las musicas que elegí para vos, <br />
                    son canciones conocidas y otras no tanto, pero todas son especiales para mi, <br />
                    algunas me las mostraste vos y otras las descubrí yo, <br />
                    espero te gusten y te hagan sentir bien.<br />
                    <br /> 
                    <button onClick={handleNextClick}>Ir a galería</button>
                    <button onClick={handleStartClick}>Ir a Playlist</button>
                </p>
                <button onClick={handleLikeClick}>¿Te gustó?</button>
                {showMessage && <p>{message}</p>}
                {showImage && <img src={imageSrc} alt="Respuesta" style={{ width: '100px', height: 'auto' }} />}
                {showModal && <Modal message="¿Te gustó?" onConfirm={handleConfirm} onCancel={handleCancel} />}
            </div>
        </>
    );
}

export default Music;