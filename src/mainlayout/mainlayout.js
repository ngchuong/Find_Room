import React from 'react';
import ContainerHeader from '../containers/ContainerHeader.js';
import Footer from '../components/Footer/footer';
import MainContent from '../components/MainContent/MainContent';

const MainLayout = () => (
    <div id="main-layout">
        <ContainerHeader />
        <MainContent />
        <Footer />
    </div>
);
export default MainLayout;