import React, { useState } from 'react';
import './Modal.scss';
import Modal from 'react-modal';
import Button from '../Button/Button';
import Input from '../Input/Input';

import Select from 'react-select';
import dataTypeRoom from '../../../configJson/configTypeRoom.json';

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
        overflowY: 'auto',
    }
}

function ModalForm({ data, isOpen, isClose, onCreate }) {
    Modal.setAppElement('body');

    const arrTypeRoom = dataTypeRoom.arrTypeRoom;

    const [formData, setFormData] = useState({});
    // const [err, setErr] = useState(false);

    let listField = [];
    if (data.length > 0) {
        for (const key in data[0]) {
            listField = [...listField, key];
        }
    }

    const onChangeInput = (e, item) => {
        let valueInput = e.target.value;
        setFormData({ ...formData, [item]: valueInput });
    }

    const onChangeSelect = (e) => {
        setFormData({ ...formData, type_room: e.value });
    }
    const fileSelected = (e) => {
        // console.log(e.target.files[0].name);
        let listImage = []
        const images = e.target.files
        for (let i = 0; i < images.length; i++) {
            // console.log(images[i].name)
            listImage = [...listImage, images[i].name];
        }
        setFormData({ ...formData, listImage })
    }
    const onDataSubmit = (e) => {
        e.preventDefault();
        // const arrValue = {...formData};
        // let newData = Object.values(arrValue);
        onCreate && onCreate(formData);
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
                        {listField.map((item, index) => {
                            if (item === "title" || item === "address") {
                                return (
                                    <div key={index}>
                                        <div className="col-25">
                                            <span>{item}</span>
                                        </div>
                                        <div className="col-75">
                                            <Input
                                                type={"text"}
                                                value={formData[item] || ''}
                                                item={item}
                                                placeholderOfInput={item}
                                                onChange={onChangeInput}
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
                                                type={"number"}
                                                value={formData[item] || ''}
                                                item={item}
                                                placeholderOfInput={item}
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
                                            <form encType="multipart/form-data">
                                                <input type="file" multiple onChange={fileSelected} />
                                            </form>
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
                                            <Select
                                                className={"select-option"}
                                                placeholder={'Chọn kiểu phòng'}
                                                onChange={onChangeSelect}
                                                defaultValue={arrTypeRoom.label}
                                                options={arrTypeRoom}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                    <div className="modal-footer">
                        <Button cls="btn-submit" title={'Đăng bài'} handleClick={onDataSubmit} />
                        <Button cls="btn-cancel" title={'Huỷ'} handleClick={isClose} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalForm;