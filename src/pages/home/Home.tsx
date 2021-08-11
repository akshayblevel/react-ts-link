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
