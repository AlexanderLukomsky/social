type SetUserDataACType = ReturnType<typeof setUserDataAC>
type AuthActionType = SetUserDataACType

export type AuthStateType = {
    data: {
        id: number,
        login: string
        email: string
        messages: [],
        fieldsErrors: [],
        resultCode: number
    }

}

const initialState = {} as AuthStateType

export const authReducer = (state: AuthStateType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case 'SET_USER_DATA': return { ...state, ...action.data }
        default: return state
    }
}

export const setUserDataAC = (data: AuthStateType) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}