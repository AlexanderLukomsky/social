
import { sidebarReducer } from './sidebar-reducer';
import { applyMiddleware, combineReducers, createStore } from "redux"
import { ProfileActionType, profileReducer } from './profile-reducer';
import { DialogsActionType, dialogsReducer } from './dialogs-reducer';
import { UsersPageActionType, usersReducer } from './user-reducer';
import { AuthActionType, authReducer } from './auth-reducer';
import thunk from 'redux-thunk';
import { profileStatusReducer } from './profileStatus-reducer';
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    profilestatus: profileStatusReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type ActionType = ProfileActionType | DialogsActionType | UsersPageActionType | AuthActionType


