import React, { Fragment } from 'react';

import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Content from '../content/content';

import './main.scss';

function Main() {
    return (
        <Fragment>
            <Header/>
            <Sidebar/>
            <Content/>
        </Fragment>
    );
}

export default Main;
