import { UsersForUserPageType, UsersPageType } from "../components/types/StateType"
const initialState: UsersPageType = {
    users: [

    ],
    totalCount: 0,
    error: null
}
type SetUsersACType = ReturnType<typeof setUsersAc>
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
export type UsersPageActionType = SetUsersACType | FollowACType | UnfollowACType

export const usersReducer = (state: UsersPageType = initialState, action: UsersPageActionType) => {
    switch (action.type) {
        case 'FOLLOW': return { ...state, users: state.users.map(u => u.id === action.payload.userID ? { ...u, followed: true } : u) }
        case 'UNFOLLOW': return { ...state, users: state.users.map(u => u.id === action.payload.userID ? { ...u, followed: false } : u) }
        case 'SET-USERS': return { ...state, users: [...state.users, ...action.payload.users] }
        default: return state
    }
}




//*
export const setUsersAc = (users: UsersForUserPageType[]) => {
    return {
        type: 'SET-USERS',
        payload: { users }
    } as const
}
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: { userID }
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: { userID }
    } as const
}