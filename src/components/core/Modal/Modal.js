import React, { useState, useEffect } from 'react';
import './Modal.scss';
import Modal from 'react-modal';

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

function ModalForm({ data }) {
    Modal.setAppElement('body');
    const [formData, setFormData] = useState({});
    const [err, setErr] = useState(false);

    useEffect(() => {
        if (data == null) {
            setFormData({})
        } else {
            if (data) {
                setFormData({ ...data })
            }
        }
    }, [data])
    return (
        <div>
            <Modal>
                isOpen={isOpen}
                style={customStyle}
            </Modal>
        </div>
    );
}

export default ModalForm;