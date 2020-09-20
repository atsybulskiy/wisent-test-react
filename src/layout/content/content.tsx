import React from 'react';
import Stats from '../../components/stats/stats';
import Products from '../../components/products/products';

import './content.scss'

const Content = () => {
    // const [products, setProducts] = useState(null)
    // const [balances, setBalances] = useState(null)
    // const [recap, setRecap] = useState(null)

    return (<main className="main">
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Stats/>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <Products/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Content;
