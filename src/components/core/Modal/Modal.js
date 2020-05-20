import React, { useState, useEffect } from 'react';
import './Modal.scss';
import Modal from 'react-modal';
import Button from '../Button/Button';
import Input from '../Input/Input';
import ComboBox from '../ComboBox/ComboBox';
import { Combobox } from 'react-widgets';

const customStyle = {
    content: {
        top: '50%',
        left: '50%',
        bottom: 'auto',
        right: 'auto',
        width: '500px',
        height: '500px',
        transform: 'translate(-50%, -50%)',
        borderStyle: 'solid',
        borderWidth: '2px',
        overflowY: 'auto'
    }
}

function ModalForm({ data, isOpen, isClose }) {
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

    const onDataSubmit = () => {

    }

    let newData = [];
    if (data.length > 0) {
        for (const key in data[0]) {
            newData = [...newData, key];
        }
    }
    const fileSelected = () => {

    }

    const onChangeInput = (e) => {

    }
    return (
        <div id="container-modal">
            <Modal
                isOpen={isOpen}
                style={customStyle}
            >
                <div className="modal">
                    <div className="modal-header">
                        <span onClick={isClose} className="close">&times;</span>
                        <label>Đăng bài cho thuê phòng</label>
                    </div>
                    <div className="modal-body">
                        {newData.map((item, index) => {
                            if (item === "title") {
                                return (
                                    <div key={index}>
                                        <div className="col-25">
                                            <span>{item}</span>
                                        </div>
                                        <div className="col-75">
                                            <Input
                                                type={"text"}
                                                placeholderOfInput={item}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            if (item === "acreage" ||
                                item === "bed" ||
                                item === "bathroom" ||
                                item === "price") {
                                return (
                                    <div key={index}>
                                        <div className="col-25">
                                            <span>{item}</span>
                                        </div>
                                        <div className="col-75">
                                            <Input
                                                type="number"
                                                placeholderOfInput={item}
                                                multiple
                                                onChange={onChangeInput}

                                            />
                                        </div>
                                    </div>
                                )
                            }
                            if (item === "path") {
                                return (
                                    <div key={index}>
                                        <div className="col-25">
                                            <span>Image</span>
                                        </div>
                                        <div className="col-75">
                                            <input type="file" multiple onChange={fileSelected} />
                                        </div>
                                    </div>
                                )
                            }
                            if (item === "type_room") {
                                return (
                                    <div key={index}>
                                        <div className="col-25">
                                            <span>{item}</span>
                                        </div>
                                        <div className="col-75">
                                            <div className="select">
                                                <select>
                                                    <option value="1">Thuê</option>
                                                    <option value="2">Bán</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                    <div className="modal-footer">
                        <Button cls="btn-submit" title={'Đăng bài'} onHandle={onDataSubmit} />
                        <Button cls="btn-cancel" title={'Huỷ'} onHandle={isClose} />
                    </div>
                </div>
            </Modal>

        </div >
    );
}

export default ModalForm;