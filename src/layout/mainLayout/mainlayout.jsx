import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../../components/layout/header'

const mainlayout = () => {
    return (
        <>
        <Header/>
          <Outlet/>  
        </>
    );
};

export default mainlayout;