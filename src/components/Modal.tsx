import React from 'react';

interface ModalProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onConfirm}>Sí</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
}

export default Modal;