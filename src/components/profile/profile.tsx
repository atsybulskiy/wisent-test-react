import React from 'react';

import avatar from '../../assets/avatar.png';

import './profile.scss'

function Profile() {
    return (
        <div className="profile">
            <div className="media align-items-center">
                <div className="avatar avatar-sm avatar-circle mr-2">
                    <img className="avatar-img" src={avatar} alt="John Snow"/>
                </div>
                <div className="media-body">
                    <span className="card-title">John Snow</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
