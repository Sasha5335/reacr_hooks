import { useRef, useState } from 'react';
import useScroll from './useScroll';

function Pagination() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const parentRef = useRef();
  const childRef = useRef();

  useScroll(parentRef, childRef, () => {
    fetchTodos(page, limit);
  });

  function fetchTodos(page, limit) {
    console.log(page);
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setPage((prev) => prev + 1);
      });
  }

  return (
    <div className="mt-5">
      <h1>Pagination</h1>

      <div ref={parentRef} style={{ height: '80vh', overflow: 'auto' }}>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="list-group"
            style={{
              width: '350px',
              margin: '3px',
              padding: '25px',
              border: '1px solid black',
              textAlign: 'left',
            }}
          >
            {todo.id} - {todo.title}
          </div>
        ))}
        <div ref={childRef} />
      </div>
    </div>
  );
}

export default Pagination;
