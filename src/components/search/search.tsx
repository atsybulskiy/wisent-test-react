import React from 'react';


import './search.scss'

function Search() {
    return (
        <form className="position-relative">
            <div className="input-group header-search">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>

                    </div>
                </div>
                <input type="search" className="form-control"
                       placeholder="Search products, employees, report ..."
                />
            </div>
        </form>
    );
}

export default Search;
