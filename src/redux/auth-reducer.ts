import { usersAPI } from "../API/api"
import { AuthDataType, AuthStateType } from "../components/types/StateType"

type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export type AuthActionType = SetUserDataACType

const initialState = {
    data: {
    },
    isAuth: false
} as AuthStateType
export const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': ; return {
            ...state, data: { ...action.data }, isAuth: true
        }
        default: return state
    }
}

export const setAuthUserDataAC = (data: AuthDataType) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}
export const authThunkCreator = () => (dispatch: (action: AuthActionType) => void) => {
    usersAPI.auth()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(data.data))
            }
        })


}