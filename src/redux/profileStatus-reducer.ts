import { ProfileAPI } from '../API/api';
import { ProfileStatus } from './../components/Profile/ProfileStatus/ProfileStatus';
type EditModeProfileStatusACType = ReturnType<typeof editModeProfileStatusAC>
type SetProfileStatusACType = ReturnType<typeof setProfileStatusAC>
type ProfileStatusActionType = EditModeProfileStatusACType | SetProfileStatusACType
export type ProfileStatusType = typeof initialState
const initialState = {
    editMode: false,
    status: 'default status'
}
export const profileStatusReducer = (state: ProfileStatusType = initialState, action: ProfileStatusActionType): ProfileStatusType => {
    switch (action.type) {
        case 'EDIT-MODE': return { ...state, editMode: action.editMode }
        case 'SET-STATUS': return { ...state, status: action.status }
        default: return state
    }
}

export const editModeProfileStatusAC = (editMode: boolean) => {
    return {
        type: 'EDIT-MODE',
        editMode
    } as const
}
export const setProfileStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

export const getProfileStatusThunk = (id: string) => (dispatch: (action: ProfileStatusActionType) => void) => {
    ProfileAPI.getStatus(id)
        .then(data => {
            dispatch(setProfileStatusAC(data))
        })
}
export const updateProfileStatusThunk = (status: string) => (dispatch: (action: ProfileStatusActionType) => void) => {
    ProfileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setProfileStatusAC(status))
            }

        })
}