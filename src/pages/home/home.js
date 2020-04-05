import React, { Component } from 'react';
import './Home.scss';
import Input from '../../components/core/Input/Input';
import 'font-awesome/css/font-awesome.min.css';
import dog from '../../asset/image/dog.jpg';
// import Combobox from './node_modules/react-widgets/lib/Combobox';
import Button from '../../components/core/Button/Button';

let dummy = ['cau giay', 'ba dinh', 'ha tay'];

class Home extends Component {
    render() {
        return (
            <div className="core-home">
                <div className="search">
                    {/* <Input /> */}
                    {/* <Combobox
                        data={dummy}
                        defaultValue={"Toan quoc"}
                    disabled={["red", "purple"]}
                    /> */}
                </div>
                <div className="container">
                    <div className="image">
                        <img width="200px" height="200px" src={dog} alt="no-img" />
                    </div>
                    <div className="main-content">
                        <label className="title">Cần cho thuê nhà</label>
                        <label className="address">Cau giay dich vong</label>
                        <div className="icon">
                            <label className="bed"><i className="fa fa-bed">: 2</i></label>
                            <label className="bath"><i className="fa fa-bath">: 3</i></label>
                            <label className="square"><i className="fa fa-square"> 20m2</i></label>
                        </div>
                        <label className="price">Giá: 1.700.000 VND</label>
                        <div className="infor">
                            <label className="date">Ngày đăng: 15/12/2020</label>
                            <label className="phone"><i className="fa fa-phone"> 0962296199</i></label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="image">
                        <img width="200px" height="200px" src={dog} alt="no-img" />
                    </div>
                    <div className="main-content">
                        <label className="title">Cần cho thuê nhà</label>
                        <label className="address">Cau giay dich vong</label>
                        <div className="icon">
                            <label className="bed"><i className="fa fa-bed">: 2</i></label>
                            <label className="bath"><i className="fa fa-bath">: 3</i></label>
                            <label className="square"><i className="fa fa-square"> 20m2</i></label>
                        </div>
                        <label className="price">Giá: 1.700.000 VND</label>
                        <div className="infor">
                            <label className="date">Ngày đăng: 15/12/2020</label>
                            <label className="phone"><i className="fa fa-phone"> 0962296199</i></label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="image">
                        <img width="200px" height="200px" src={dog} alt="no-img" />
                    </div>
                    <div className="main-content">
                        <label className="title">Cần cho thuê nhà</label>
                        <label className="address">Cau giay dich vong</label>
                        <div className="icon">
                            <label className="bed"><i className="fa fa-bed">: 2</i></label>
                            <label className="bath"><i className="fa fa-bath">: 3</i></label>
                            <label className="square"><i className="fa fa-square"> 20m2</i></label>
                        </div>
                        <label className="price">Giá: 1.700.000 VND</label>
                        <div className="infor">
                            <label className="date">Ngày đăng: 15/12/2020</label>
                            <label className="phone"><i className="fa fa-phone"> 0962296199</i></label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;