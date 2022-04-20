import { ProfileType } from './../components/types/StateType';
import { v1 } from 'uuid';
import { ProfilePageType } from '../components/types/StateType';
type AddPostACType = ReturnType<typeof addPostAC>
type ChangePostTextACType = ReturnType<typeof changePostTextAC>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export type ProfileActionType = AddPostACType | ChangePostTextACType | SetUserProfileACType
const profilePage: ProfilePageType = {
    profile: null,
    posts: [
        { id: v1(), message: 'message-1', likesCount: 5 },
        { id: v1(), message: 'message-2', likesCount: 8 },
        { id: v1(), message: 'message-3', likesCount: 11 },
        { id: v1(), message: 'message-4', likesCount: 14 },
        { id: v1(), message: 'message-5', likesCount: 17 },
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfilePageType = profilePage, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            return { ...state, posts: [{ id: v1(), message: state.newPostText, likesCount: 1 }, ...state.posts], newPostText: '' }
        case 'CHANGE-POST-TEXT':
            return { ...state, newPostText: action.payload.value }
        case 'SET-USER-PROFILE': return { ...state, profile: action.profile }
        default: return state
    }
}
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changePostTextAC = (value: string) => {
    return {
        type: 'CHANGE-POST-TEXT',
        payload: { value }
    } as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}