import { usersReducer } from './user-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { combineReducers, createStore } from "redux"
import { ProfileActionType, profileReducer } from './profile-reducer';
import { DialogsActionType, dialogsReducer } from './dialogs-reducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


export type ActionType = ProfileActionType | DialogsActionType
