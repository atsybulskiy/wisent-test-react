import React, {useEffect, useState} from 'react';

import {IStats} from "../../interfaces/IStats";
import {getStats} from '../../api/api';

import StatsItem from './stats-item/stats-item';
import Loader from '../loader/loader';

import './stats.scss';

const Stats = () => {
    const [stats, setStats] = useState<{ [key: string]: IStats[] }>({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        getStats().then(result => {
            const statsHash = result.data.reduce((acc: { [key: string]: IStats[] }, current: IStats) => {
                if (!acc[current.type]) {
                    acc[current.type] = [current];
                } else {
                    acc[current.type].push(current);
                }
                return acc;
            }, {});
            setStats(statsHash);
            setLoading(false);
        }).catch((e) => {
            console.log('%c⇒ e', 'color: #FF5370', e);
            setLoading(false);
        });
    }, [])

    return (
        <div className="row stats mb-4">
            {loading ? <Loader/> :
                Object.keys(stats).map(key => <StatsItem key={key} statsItem={stats[key]}/>)}
        </div>
    );
}

export default Stats;
