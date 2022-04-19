import { UsersForUserPageType, UsersPageType } from "../components/types/StateType"
const initialState: UsersPageType = {
    users: [

    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    error: null
}
type SetUsersACType = ReturnType<typeof setUsersAc>
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type ChangeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>

export type UsersPageActionType = SetUsersACType | FollowACType | UnfollowACType | ChangeCurrentPageACType | SetTotalCountACType

export const usersReducer = (state: UsersPageType = initialState, action: UsersPageActionType) => {
    switch (action.type) {
        case 'FOLLOW': return { ...state, users: state.users.map(u => u.id === action.payload.userID ? { ...u, followed: true } : u) }
        case 'UNFOLLOW': return { ...state, users: state.users.map(u => u.id === action.payload.userID ? { ...u, followed: false } : u) }
        case 'SET-USERS': return { ...state, users: [...action.payload.users] }
        case 'CHANGE-CURRENT-PAGE': return { ...state, currentPage: action.payload.currentPage }
        case 'SET-TOTAL-COUNT': return { ...state, totalUsersCount: action.totalCount }
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
export const changeCurrentPageAC = (currentPage: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        payload: { currentPage }
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
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount
    } as const
}