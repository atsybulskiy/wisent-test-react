import React from 'react';

import {IStats} from '../../../interfaces/IStats';

import './stats-item.scss'

interface ItemProps {
    statsItem: IStats[];
}

const StatsItem = (props: ItemProps) => {
    props.statsItem.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());

    const {type, title, amount} = props.statsItem[props.statsItem.length - 1];

    let statsDirectionUp = true;
    let percent = props.statsItem[(props.statsItem.length - 2)].amount * 100 / props.statsItem[props.statsItem.length - 1].amount;
    if (percent <= 100) {
        percent = Math.round((100 - percent) * 10) / 10;
    } else {
        percent = Math.round((200 - percent) * 10) / 10;
        statsDirectionUp = false;
    }

    return (
        <div className="col-3">
            <div className="card stats-item">
                <div className="card-body">
                    <div className="card-top d-flex mb-4">
                        <div className={'icon-' + type}/>
                        <i className="icon-help"/>
                    </div>
                    <h5 className="title">{title}</h5>
                    <div className="amount">{amount}</div>
                    <div className={(statsDirectionUp ? 'green' : 'red') + ' last-month'}>
                        Over last month
                        <span className="percents ml-3">
                            {percent}%
                            <i className={(statsDirectionUp ? 'up' : 'down') + ' icon-arrow ml-1'}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatsItem;
