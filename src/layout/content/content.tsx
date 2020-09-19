import React, {useEffect, useState} from 'react';

import {getStats} from '../../api/statsApi';
import Stats from '../../components/stats/stats';

import './content.scss'

const Content = () => {
    const [products, setProducts] = useState(null)
    const [balances, setBalances] = useState(null)
    const [recap, setRecap] = useState(null)

    return (<main className="main">
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-6">
                        <Stats/>
                    </div>
                    <div className="col-6">
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Content;
