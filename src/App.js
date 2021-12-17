import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import Redux from './components/Redux';
import Hooks from './components/Hooks';
import UseState from './components/UseState';
import UseRef from './components/UseRef';
import UseEffect from './components/UseEffect';
import Pagination from './components/Pagination';

function App() {
  return (
    <Router>
      <div className="App ">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="navbar-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/redux">Redux</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/hooks">Hooks</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/useState">UseState</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/useRef">UseRef</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/useEffect">UseEffect</NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/pagination">Pagination</NavLink>
            </li>
          </ul>
        </nav>

        <div className="App-content">
          <Routes>
            <Route exact path="/redux" element={<Redux />} />
            <Route exact path="/hooks" element={<Hooks />} />
            <Route exact path="/useState" element={<UseState />} />
            <Route exact path="/useRef" element={<UseRef />} />
            <Route exact path="/useEffect" element={<UseEffect />} />
            <Route exact path="/pagination" element={<Pagination />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
