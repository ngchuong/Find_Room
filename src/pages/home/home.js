import React, { useEffect, useState } from 'react';
import './home.scss';
import 'font-awesome/css/font-awesome.min.css';
// import { Redirect } from 'react-router-dom'; 

import Button from '../../components/core/Button/Button';
import Select from 'react-select';


import ConfigAddress from '../../configJson/configAddress.json';
import ConfigPrice from '../../configJson/configPrice.json';

const dataAddress = ConfigAddress.arrAddress;
const dataPrice = ConfigPrice.arrPrice;

function Home({ getListRooms, listRoom, typeRoom }) {
    const [arrPagination, setArrPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const limitRecordOfPage = 5;
    const limitPage = 5;
    const totalPage = Math.ceil(listRoom.length / limitPage);

    let startIndex = null;
    let endIndex = null;

    let startPagination = <a href="/#">First</a>;
    let endPagination = <a href="/#">Last</a>;

    useEffect(() => {
        getListRooms();
    }, [getListRooms])

    useEffect(() => {
        if (listRoom.length > 0) {
            renderPagination(currentPage);
        }
    }, [listRoom, currentPage])


    function showPage(selectedPage) {
        if (currentPage === selectedPage) return;
        setCurrentPage(selectedPage);
        renderPagination(currentPage);
    }

    function renderPagination(currentPage) {
        if (totalPage > limitPage) {
            if (currentPage > 2) {
                if (currentPage === totalPage - 1) {
                    startIndex = currentPage - 3;
                    endIndex = totalPage;
                } else if (currentPage === totalPage) {
                    startIndex = currentPage - 4;
                    endIndex = totalPage;
                } else {
                    startIndex = currentPage - 2;
                    endIndex = currentPage + 2;
                }
            } else {
                startIndex = 1;
                endIndex = limitPage;
            }
        } else {
            startIndex = 1;
            endIndex = totalPage;
        }
        let arr = [];
        for (let i = startIndex; i <= endIndex; i++) {
            arr.push(i);
        }
        setArrPagination(arr);
    }

    const bodyPagination = arrPagination.map((item, index) => (
        <a className={(item === currentPage) ? "active" : ""} key={index} href={item} onClick={() => showPage(item)}>{item}</a>
    ))

    const showDetail = (e) => {

    }

    let newListRoom = listRoom.slice((currentPage - 1) * limitRecordOfPage, currentPage * limitRecordOfPage);
    let newListRoomByType = [];
    for (let i = 0; i < newListRoom.length; i++) {
        if (typeRoom === newListRoom[i].type_room) {
            newListRoomByType = [...newListRoomByType, newListRoom[i]];
        }
    }
    if (typeRoom !== null) {
        newListRoom = newListRoomByType;
    }


    const [getAddress, setAddress] = useState({ label: "", value: "" });
    const [getPrice, setPrice] = useState({ label: "", value: "" });
    const handleInputChange = (e) => {
        setAddress(e);
    }
    const handleInputChange1 = (e) => {
        setPrice(e);
    }

    const [dataSearch, setDataSearch] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    function onSearch(e) {
        e.preventDefault();
        let newData = [];

        for (let i = 0; i < newListRoom.length; i++) {
            let stringAddress = newListRoom[i].address;
            if (getAddress.value !== "" && getPrice.value !== "") {
                // so sanh chuoi tim kiem, so sanh gia tri +- 500000
                if (stringAddress.toLowerCase().indexOf(getAddress.value.toLowerCase()) > 0 ||
                    Math.abs(newListRoom[i].price - getPrice.value) <= 500000) {
                    newData = [...newData, newListRoom[i]]
                }

            } else if (getAddress.value !== "") {
                if (stringAddress.toLowerCase().indexOf(getAddress.value.toLowerCase()) > 0) {
                    newData = [...newData, newListRoom[i]]
                }
            } else if (getPrice.value !== "") {
                if (Math.abs(newListRoom[i].price - getPrice.value) <= 500000) {
                    newData = [...newData, newListRoom[i]]
                }
            }
        }
        if (newData.length <= 0) {
            setIsSearch(true);
        }
        setDataSearch(newData);
    }

    // console.log(newListRoom);

    let titleContent = "";
    if (typeRoom === "1") {
        titleContent = "Danh sách phòng cho thuê";
    } else if (typeRoom === "2") {
        titleContent = "Danh sách phòng để bán";
    } else {
        titleContent = "Danh sách tất cả các phòng";
    }
    if (dataSearch.length > 0) {
        titleContent = "Danh sách kết quả tìm được: ";
    }

    let showListRoom;
    if (newListRoom.length === 0) {
        showListRoom = "Không có kết quả nào !"
    } else {
        // let data;
        // if (isSearch) {
        //     if (dataSearch.length > 0) {
        //         data = dataSearch;
        //     } else {
        //         showListRoom = "Không tìm thấy kết quả !"
        //     }
        // } else {

        // }

        showListRoom = (dataSearch.length > 0 ? dataSearch : newListRoom).map((room, index) => {
            return (
                <div className="container" key={index}>
                    <div className="image">
                        <img src={JSON.parse(room.path)[0]} alt="no-img" />
                        <span className="image-total" >{JSON.parse(room.path).length}</span>
                    </div>
                    <div className="main-content-item">
                        <label className="title" onClick={showDetail(room.id)}>{room.title}</label>
                        <label className="address">{room.address}</label>
                        <div className="icon">
                            <label className="bed"><i className="fa fa-bed">: {room.bed}</i></label>
                            <label className="bath"><i className="fa fa-bath">: {room.bathroom}</i></label>
                            <label className="square"><i className="fa fa-square"> {room.acreage} m2</i></label>
                        </div>
                        <label className="type-room">Kiểu phòng: {(room.type_room === "1") ? "Cho thuê" : "Bán"}</label>
                        <label className="price">Giá: {room.price} VND</label>
                        <div className="infor">
                            <label className="date">Ngày đăng: {room.date_created.slice(0, 10)}</label>
                            <label className="phone"><i className="fa fa-phone"> {room.phone_number}</i></label>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="core-home">
            <div className="search">
                <span>
                    <Select
                        placeholder={'Chọn quận'}
                        onChange={handleInputChange}
                        defaultValue={getAddress.label}
                        options={dataAddress}
                        isSearchable
                    />
                </span>
                <span>
                    <Select
                        placeholder={'Chọn giá'}
                        onChange={handleInputChange1}
                        defaultValue={getPrice.label}
                        options={dataPrice}
                        isSearchable
                    />
                </span>
                <span>
                    <Button
                        cls={'btn-submit'}
                        handleClick={onSearch}
                        title={'Tìm kiếm'}
                    />
                </span>
            </div>
            <div className="list-item">
                <div className="label-content">{titleContent}</div>
                {showListRoom}
            </div>
            <div className="pagination">
                {startPagination}
                {bodyPagination}
                {endPagination}
            </div>
        </div>
    )
}

export default Home;