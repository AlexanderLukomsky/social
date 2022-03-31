import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StoreContext } from './components/StoreContext';
import { reduxStore, StateType } from './state/redux/redux-store';



const rerenderThree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={reduxStore}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderThree(reduxStore.getState());
reduxStore.subscribe(() => {
    const state = reduxStore.getState()
    rerenderThree(state)
})

//*! Props for App   =   state={state} dispatch={reduxStore.dispatch}