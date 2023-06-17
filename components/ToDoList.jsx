import React from "react";

// Components
import ToDo from "./ToDo";

export default function TodoList({todos, onRemove}) {
    const renderTodos = (todo) => (
        <div key={todo.id} className='grid grid-cols-2 gap-2 justify-items-start'>
            <ToDo value={todo.value} />
            <button onClick={() => onRemove(todo.id)} className='text-red-500'>X</button>
        </div>
    )

    return (
        <div className='max-w-2xl'>
            {todos.map(renderTodos)}
        </div>
    );
};