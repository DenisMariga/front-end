import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Department } from './Department';
import { Employee } from './Employee';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item- m-1">
                <NavLink className="btn btn-light btn-outline-primary" activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item- m-1">
                <NavLink className="btn btn-light btn-outline-primary" activeClassName="active" to="/department">
                  Department
                </NavLink>
              </li>
              <li className="nav-item- m-1">
                <NavLink className="btn btn-light btn-outline-primary" activeClassName="active" to="/employee">
                  Employee
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <h3 className="d-flex justify-content-center m-3">My first React app</h3>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
