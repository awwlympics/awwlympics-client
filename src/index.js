import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

//Reducers
import formReducer from './reducers/formReducer';

//Styles
import './index.css';

const reducers = combineReducers({
    form: formReducer
});

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
