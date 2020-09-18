import React from 'react';

import Search from '../../components/search/search';
import Notifications from '../../components/notifications/notifications';
import Profile from '../../components/profile/profile';

import './header.scss'

function Header() {
    return (
        <header id="header" className="header navbar navbar-expand-lg fixed-top">
            <div className="navbar-nav-wrap">
                <div className="navbar-nav-wrap-content-left">
                    <div className="d-none d-md-block">
                        <Search/>
                    </div>
                </div>
                <div className="navbar-nav-wrap-content-right">
                    <Notifications/>
                    <Profile/>
                </div>
            </div>
        </header>
    );
}

export default Header;
