import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './state/state';

const rerenderThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} addPost={store.addPost.bind(store)} onChangePostText={store.onChangePostText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderThree();
store.subscribe(rerenderThree)