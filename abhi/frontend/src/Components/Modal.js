
import React from 'react';
import './Modal.css'; // Style the modal separately

function Modal({ show, onClose, message }) {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <p>{message}</p>
                <br/>
                <br/>
                <button onClick={onClose} className={'btnDanger'}>Ok</button>
            </div>
        </div>
    );
}

export default Modal;
