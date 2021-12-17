import { useState } from 'react';

function UseState() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mt-5">
      <h1>UseState</h1>

      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="name"
          value={name}
          onChange={onChangeName}
        />
      </div>

      <div className="input-group mt-2">
        <input
          type="text"
          className="form-control"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>

      <div className="mt-3">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            console.log(name, password);
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default UseState;
