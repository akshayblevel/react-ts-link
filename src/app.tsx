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
