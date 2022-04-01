import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StateType } from './components/types/StateType';
import { store } from './redux/redux-store';



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// const rerenderThree = () => {
// }
// rerenderThree();
// store.subscribe(() => {
//     const state = store.getState()
//     rerenderThree(state)
// })