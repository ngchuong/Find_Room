import React from 'react';
import ContainerHeader from '../containers/ContainerHeader.js';
import Footer from '../components/Footer/footer';
import MainContent from '../components/MainContent/MainContent';
import DialogRender from '../containers/Dialog.js';

const MainLayout = () => (
    <div id="main-layout">
        <ContainerHeader />
        <MainContent />
        <Footer />
        <DialogRender />
    </div>
);
export default MainLayout;