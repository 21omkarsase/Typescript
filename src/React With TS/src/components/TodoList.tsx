import React from 'react'
import { TodoType } from "../todo.model"

interface TodoListProps {
    items: TodoType[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
    return (
        <div>
            <ul>
                {items.map((todo) => (
                    <li key={todo.id}>
                        <span>
                            {todo.text}
                        </span>
                        <span onClick={onDeleteTodo.bind(null, todo.id)}>Delete</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList