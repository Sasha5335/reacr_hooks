import '../Hooks.css';

function TodoItem(props) {
  const deleteHandler = () => {
    const { deleteTodo, id } = props;
    deleteTodo(id);
  };

  return (
    <>
      <li className="list-group-item list-group-item-light">
        <label className="list">
          <span className="title">{props.title}</span>
          <span className="remove" onClick={deleteHandler}>
            &#215;
          </span>
        </label>
      </li>
    </>
  );
}

export default TodoItem;
