// import Packages
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux'

// import Store
import store from "./store"

// import LayOut
import LayOut from './layout/'

// import Pages
import Home from './pages/Home'

// DOM
const app = document.getElementById('app');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// renderDOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={LayOut}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
  , app);
