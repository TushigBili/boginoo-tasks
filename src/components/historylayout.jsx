import React from 'react';
import HistoryRow from './historyrow';

const HistoryLayout = () => {
    return (
        <div>
            <div className='font-ubuntu c-primary fs-30 lh-34 mt-5 bold'>Түүх</div>
            <div className='mt-5'></div>
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
        </div>
    )
}

export default HistoryLayout