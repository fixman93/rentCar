import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { getFirestore, reduxFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>, document.getElementById('root'));
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
