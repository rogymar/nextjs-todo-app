import React from "react";

export default function AddModal ({onSubmit}) {
    return (
        <form onSubmit={onSubmit} className='mt-2'>
            <input type='text' id='todo' required className='rounded-md mx-2' />
            <button type='submit' className=''>Add</button>
        </form>
    )
}