import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import { Route } from 'react-router'
import Geolocation from 'redux-browser-geolocation';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import reducers from './reducers/index.js'
import location from './middleware/location/location';
import forecastMiddleware from './middleware/Forecast/forecast';
import Splash from './components/splash/splash.container';
import Search from './components/search/search.container';
import Forecast from './components/forecast/forecast.container';
import './index.css';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    default: reducers,
    router: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(Geolocation, rMiddleware, location, forecastMiddleware),
)

if (window.cordova) {
  document.addEventListener("deviceready", function() {
    console.log('cordova loaded');
    init();
  }, false);
} else {
  init();
}

function init() {
  ReactDOM.render(
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <div>
          <Route exact path="/android_asset/www/index.html" component={ Splash } />
          <Route exact path="/" component={ Splash } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/w/:id" component={ Forecast } />
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}
