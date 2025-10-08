import React from 'react';
import "../styles/demo.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal_overlay' onClick={onClose}>
            <div className='modal_content' onClick={(e) => e.stopPropagation()}>
                <div className="modal-close">
                    <button onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M17.4883 12.5129L18.5383 11.4629" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.4609 18.5371L14.8984 15.0996" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.5359 18.5379L11.4609 11.4629" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 7.5C3.4375 9.5875 2.5 12.1875 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5C13.2125 2.5 11.5 2.875 9.9625 3.5625" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}

export default Modal