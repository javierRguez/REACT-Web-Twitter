import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppFrame from './components/AppFrame'
const DataChecker = React.lazy(() => import('./components/DataChecker'))
const Home = React.lazy(() => import('./pages/Home'))
const UserTimeline = React.lazy(() => import('./pages/UserTimeline'))
const Page404 = React.lazy(() => import('./pages/Page404'))
export default (
  <DataChecker>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <AppFrame {...props}>
              <Home />
            </AppFrame>
          )}
        />
        <Route
          path="/timeline/:userId"
          component={(props) => (
            <AppFrame {...props}>
              <UserTimeline />
            </AppFrame>
          )}
        />
        <Route
          component={(props) => (
            <AppFrame {...props}>
              <Page404 />
            </AppFrame>
          )}
        />
      </Switch>
    </Router>
  </DataChecker>
)
