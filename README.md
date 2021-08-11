# react-ts-link

routeUrlConstant.ts

```js
export const ROUTER_URL_CONSTANT = {
  MAIN: '/',
  LOGIN: '/login',
  HOME: '/home',
  EMPLOYEELIST: '/employeelist'
};
```

Login.tsx

```js
import React from 'react';

export function Login() {
  return <div>Login</div>;
}
```

EmployeeList.tsx

```js
import React from 'react';

export function EmployeeList() {
  return (
    <div>
      Employee List
      <hr />
    </div>
  );
}
```

NavigationBar.tsx

```js
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTER_URL_CONSTANT } from '../../constant/routeUrlConstant';

export function NavigationBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to={ROUTER_URL_CONSTANT.EMPLOYEELIST}>
              Employee List
            </Link>
          </Nav>
          <Nav className="pr-5">
            <NavDropdown title="Akshay" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-link" to={ROUTER_URL_CONSTANT.LOGIN}>
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
```

Home.tsx

```js
import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Redirect, Route, Router } from 'react-router-dom';
import { ROUTER_URL_CONSTANT } from '../../constant/routeUrlConstant';
import { EmployeeList } from '../employee/EmployeeList';
import { NavigationBar } from './NavigationBar';

export function Home() {
  return (
    <div>
      <NavigationBar />
      <div>
        <Route
          path={ROUTER_URL_CONSTANT.EMPLOYEELIST}
          component={EmployeeList}
        />
      </div>
    </div>
  );
}
```

App.tsx

```js
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ROUTER_URL_CONSTANT } from './constant/routeUrlConstant';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/Home';
import { EmployeeList } from './pages/employee/EmployeeList';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to={ROUTER_URL_CONSTANT.LOGIN} />}
          />

          <Route path={ROUTER_URL_CONSTANT.LOGIN} component={Login} />
          <Route path={ROUTER_URL_CONSTANT.HOME} component={Home} />
          <Route
            path={ROUTER_URL_CONSTANT.EMPLOYEELIST}
            component={EmployeeList}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
```

Call below urls:
1. {baseUrl}
2. {baseUrl}/Home
