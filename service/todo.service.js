import {v4 as uuid } from 'uuid';

const TodoStore = {
    todos: []
};

export function getTodos () {
    return TodoStore.todos
};

export function addTodo (value) {
    const newTodo = {
        value,
        id: uuid()
    }
    TodoStore.todos = [...TodoStore.todos, newTodo]
    return TodoStore.todos
};

export function removeTodo (id) {
    TodoStore.todos = TodoStore.todos.filter(todo => todo.id != id)
    return TodoStore.todos
};