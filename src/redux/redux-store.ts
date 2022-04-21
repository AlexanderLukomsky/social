
import { sidebarReducer } from './sidebar-reducer';
import { combineReducers, createStore } from "redux"
import { ProfileActionType, profileReducer } from './profile-reducer';
import { DialogsActionType, dialogsReducer } from './dialogs-reducer';
import { UsersPageActionType, usersReducer } from './user-reducer';
import { authReducer } from './auth-reducer';
import axios from 'axios';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


export type ActionType = ProfileActionType | DialogsActionType | UsersPageActionType


