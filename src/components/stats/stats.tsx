import React, {useEffect, useState} from 'react';

import {IStats} from "../../interfaces/IStats";


import './stats.scss';
import {getStats} from '../../api/statsApi';
import StatsItem from './stats-item/stats-item';

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
        });
    }, [])

    console.log('%c⇒ stats', 'color: #89DDF7', stats);

    return (
        <div className="card stats">
            <div className="card-body">
                {loading ? 'loading...' :
                    Object.keys(stats).map(key => <StatsItem key={key} statsItem={stats[key]}/>)}
            </div>
        </div>
    );
}

export default Stats;
