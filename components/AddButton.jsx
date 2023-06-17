import React from "react";
import classNames from "classnames";

export default function AddButton({onClick, disabled=false}) {
    const styles = classNames(
        'hover:text-slate-400',
        {
        'text-slate-400': disabled
        }
    )

    return (
        <div className={styles}>
            <button onClick={onClick} disabled={disabled}>Add ToDo +</button>
        </div>
    )
}