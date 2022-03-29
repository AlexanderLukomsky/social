import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { state, subscribe } from './state/state';

const rerenderThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App profilePage={state.profilePage} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderThree();
subscribe(rerenderThree)
type PostsType = { id: string, message: string, likesCount: number }
type DialogsType = { id: string, name: string, img: string }
type MessagesType = { id: string, message: string }
type SidebarType = { id: string, name: string }
type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    onChange: (value: string) => void
    addPost: () => void
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType[]
}