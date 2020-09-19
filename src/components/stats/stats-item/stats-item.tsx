import React from 'react';

import {IStats} from '../../../interfaces/IStats';

interface ItemProps {
    statsItem: IStats[];
}

const StatsItem = (props: ItemProps) => {
    console.log('%c⇒ props', 'color: #82AAFF', props);
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body">
                    {props.statsItem[0].title}
                </div>
            </div>
        </div>
    );
}

export default StatsItem;
