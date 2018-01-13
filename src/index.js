import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reduxpromise from 'redux-promise';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';
const createStoreWithMiddleware = applyMiddleware(Reduxpromise)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
