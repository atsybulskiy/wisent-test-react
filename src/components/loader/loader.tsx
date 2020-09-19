import React from 'react';

import './loader.scss';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center loader">
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;
