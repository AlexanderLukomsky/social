import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
export type PostsType = { id: string, message: string, likesCount: number }
export type DialogsType = { id: string, name: string, img: string }
export type MessagesType = { id: string, message: string }
type SidebarType = { id: string, name: string }
export type ProfilePageType = {
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
export const rerenderThree = (state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App profilePage={state.profilePage} addPost={state.profilePage.addPost} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

