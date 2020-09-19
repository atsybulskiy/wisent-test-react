import React from 'react';

import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Content from '../content/content';


import './main.scss';

const Main = () => (
    <>
        <Header/>
        <Sidebar/>
        <Content/>
    </>
);

export default Main;
