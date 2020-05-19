import React, { useEffect, useState, useCallback } from 'react';
import './home.scss';
import Input from '../../components/core/Input/Input';
import 'font-awesome/css/font-awesome.min.css';
// import Combobox from 'react-widgets/lib/Combobox';
import Combobox from '../../components/core/ComboBox/ComboBox';
import { Redirect } from 'react-router-dom';

function Home({ getListRooms, listRoom }) {
    const [arrPagination, setArrPagination] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const limitRecordOfPage = 5;
    const limitPage = 5;
    const totalPage = Math.ceil(listRoom.length / limitPage);

    let startIndex = null;
    let endIndex = null;

    let startPagination = <a href="/#">First</a>;
    // let bodyPagination = null;
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

    const newListRoom = listRoom.slice((currentPage - 1) * limitRecordOfPage, currentPage * limitRecordOfPage);
    // if (typeof newListRoom[0] !== "undefined") {
    //     console.log(newListRoom[0].path)
    // }
    const showListRoom = newListRoom.map((room, index) => (
        <div className="container" key={index}>
            <div className="image">
                <img width="150px" height="200px" src={JSON.parse(room.path)[0]} alt="no-img" />
                <span className="image-total" >{JSON.parse(room.path).length}</span>
            </div>
            <div className="main-content">
                <label className="title">{room.title}</label>
                <label className="address">{room.address}</label>
                <div className="icon">
                    <label className="bed"><i className="fa fa-bed">: {room.bed}</i></label>
                    <label className="bath"><i className="fa fa-bath">: {room.bathroom}</i></label>
                    <label className="square"><i className="fa fa-square"> {room.acreage} m2</i></label>
                </div>
                <label className="price">Giá: {room.price} VND</label>
                <div className="infor">
                    <label className="date">Ngày đăng: {room.date_created.slice(0, 10)}</label>
                    <label className="phone"><i className="fa fa-phone"> {room.phone_number}</i></label>
                </div>
            </div>
        </div>
    ))

    const arr = [
        {
            name: "123",
            value: "123"
        },
        {
            name: "234",
            value: "234"
        }
    ]
    return (
        <div className="core-home">
            <div className="search">
                <span>
                    <Combobox
                        data={arr}
                    />
                </span>
                <span>
                    <Combobox
                        data={arr}
                    />
                </span>
            </div>
            <div className="list-item">
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