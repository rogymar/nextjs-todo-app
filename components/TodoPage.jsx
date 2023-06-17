'use client';

import React, { useState } from "react";

import TodoList from "./ToDoList";
import AddButton from "./AddButton";
import AddModal from "./AddModal";
import { getTodos, addTodo, removeTodo } from "@/service/todo.service";

export default function TodoPage () {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)

    const [values, setValues ] = useState(getTodos());
    const addValue = (event) => {
        event.preventDefault()
        const todo = event.target.todo.value
        const updatedTodos = addTodo(todo)
        setValues(updatedTodos);
        setShowModal(false)
    }

    const removeValue = (id) => setValues(removeTodo(id))

    return (
        <section className='w-full'>
            <AddButton onClick={openModal} disabled={showModal} />
            <TodoList todos={values} onRemove={removeValue} />
            {showModal && <AddModal onSubmit={addValue} />}
        </section>
    );
};