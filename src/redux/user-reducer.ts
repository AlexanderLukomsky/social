import { v1 } from "uuid"
import { UsersPageType, UserType } from "../components/types/StateType"
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
export type UsersPageActionType = FollowACType | UnfollowACType | SetUsersACType
const initialState = {
    users: [
        {
            id: v1(), name: 'Alex', followed: false, status: 'hi',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFg9YWrPCikOVmQmybvtVRWsI4ZBj6nWO0Bw&usqp=CAU',
            address: { country: 'Belarus', city: 'Minsk' }
        },
        {
            id: v1(), name: 'Jora', followed: true, status: 'hi',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFg9YWrPCikOVmQmybvtVRWsI4ZBj6nWO0Bw&usqp=CAU',
            address: { country: 'Belarus', city: 'Grodno' }
        },
        {
            id: v1(), name: 'Roma', followed: true, status: 'hi',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFg9YWrPCikOVmQmybvtVRWsI4ZBj6nWO0Bw&usqp=CAU',
            address: { country: 'Belarus', city: 'Brest' }
        },
        {
            id: v1(), name: 'Vasya', followed: false, status: 'hi',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFg9YWrPCikOVmQmybvtVRWsI4ZBj6nWO0Bw&usqp=CAU',
            address: { country: 'Belarus', city: 'Vitebsk' }
        },
        {
            id: v1(), name: 'Igor', followed: true, status: 'hi',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFg9YWrPCikOVmQmybvtVRWsI4ZBj6nWO0Bw&usqp=CAU',
            address: { country: 'Belarus', city: 'Gomel' }
        },
    ]
}
export const usersReducer = (state: UsersPageType = initialState, action: UsersPageActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return { ...state, users: state.users.map(u => u.id === action.payload.userID ? { ...u, followed: true } : u) }
        case 'UN-FOLLOW':
            return { ...state, users: state.users.map(u => u.id === action.payload.userID ? { ...u, followed: false } : u) }
        case 'SET-USERS':
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return { ...state }
    }
}
export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: { userID }
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: 'UN-FOLLOW',
        payload: { userID }
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}