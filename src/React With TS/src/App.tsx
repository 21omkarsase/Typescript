import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { TodoType } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodoHandler = (todo: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: todo }]);
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
