import React from 'react';

export const FormInput = (props) => {
    let { className, label, ...others } = props;


    return (
        <div className='flex-col'>
            <div className='ph-3 fs-14 font-ubuntu lh-18 ti'>{label}</div>
            <input className={`input ${className}`} {...others} />
        </div>
    );
};