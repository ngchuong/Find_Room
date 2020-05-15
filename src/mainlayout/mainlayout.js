import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import MainContent from '../components/MainContent/MainContent';

const MainLayout = () => (
    <div id="main-layout">
        <Header />
        <MainContent />
        <Footer />
    </div>
);
export default MainLayout;