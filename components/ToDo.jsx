import React from "react";

export default function ToDo({value}) {
    return (
        <div className='flex'>
            <input type='checkbox' className='flex-none mx-2' />
            <label className='flex-auto'>{value}</label>
        </div>
    );
};