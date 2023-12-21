import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Khaled' },
        { id: 2, task: 'Yaish' },
        { id: 3, task: 'Study React' }
    ]);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} task={todo.task} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
