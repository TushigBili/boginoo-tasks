import React from 'react';

const HistoryRow = () => {
    return (
        <div className='flex-row space-evenly border-bottom w-9.5 mt-5'>
            <div className='flex-col mr-5'>
                <div className='c-gray fs-14 lh-18 font-ubuntu'>Өгөгдсөн холбоос:</div>
                <div className='fs-17 lh-23 font-ubuntu'>https://www.web-huudas.mn</div>
            </div>
            <div className='flex-col mr-5'>
                <div className='c-gray fs-14 lh-18 font-ubuntu'>Богино холбоос:</div>
                <div className='fs-17 lh-23 font-ubuntu'>shortly.io/wbmn12</div>
            </div>
            <div className='font-ubuntu c-primary fs-18 lh-21 tdl-u items-center mt-3'>Хуулж авах</div>
        </div>
    )
}

export default HistoryRow;