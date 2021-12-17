import React, { useEffect, useState } from 'react';
import './Hooks.css';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  const handleClick = () => {
    // console.log(('click'))
  };

  useEffect(() => {
    const raw = localStorage.getItem('todos');
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    localStorage.setItem('todos', JSON.stringify(todos));
    return () => document.removeEventListener('click', handleClick);
  }, [todos]);

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle('');
    }
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((i) => i.id !== id)]);
  };

  return (
    <div className="use-state">
      <h1>Todo app</h1>

      <div>
        <input
          className="form-control"
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>Todo name</label>
      </div>

      <ul className="list-group">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            todos={todos}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
