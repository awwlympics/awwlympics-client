import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function rootReducer() {
    return {
        currentState: "Hello"
    }
}


const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
