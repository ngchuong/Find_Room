import React, { useState, useEffect } from 'react';
import './Dialog.scss';

import Button from '../Button/Button';
import Modal from 'react-modal';

const Dialog = ({ message, showDialog }) => {
    const customStyle = {
        content: {
            top: '40%',
            left: '50%',
            bottom: 'auto',
            right: 'auto',
            width: '300px',
            transform: 'translate(-50%, -50%)',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: '#00cc00'
        }
    }
    Modal.setAppElement('body');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (message !== null) {
            setIsOpen(true);
        }
    }, [message])

    function closeDialog() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal style={customStyle} isOpen={isOpen} >
                <div className="content-dialog">
                    {message}
                </div>
                <div className="footer-dialog">
                    <Button
                        handleClick={closeDialog}
                        cls={'btn-submit'}
                        title={'OK'}
                    />
                </div>
            </Modal>
        </div>
    )
}

export default Dialog;