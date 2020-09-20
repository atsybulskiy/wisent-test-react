import React, {useEffect, useState} from 'react';

import {IProduct} from '../../interfaces/IProducts';
import {getProducts} from '../../api/api';

import Loader from '../loader/loader';

import './products.scss';

const Products = () => {
    const [products, setStats] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        getProducts().then(result => {
            setStats(result.data);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [])

    return (
        <div className="card products">
            <div className="card-body">
                <h6 className="card-title">Recently Products</h6>
                {loading ? <Loader/> :
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                            {products.map(i => {
                                const date = new Date(i.date_create * 1000);
                                return (
                                    <tr key={i.id}>
                                        <td>#{i.id}</td>
                                        <td>{i.name}</td>
                                        <td>{date.toLocaleDateString()}</td>
                                        <td>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(i.price)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>}
            </div>
        </div>
    );
}

export default Products;
