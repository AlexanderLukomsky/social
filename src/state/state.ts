import { v1 } from 'uuid';
type AddPostACType = ReturnType<typeof addPostAC>
type ChangePostTextACType = ReturnType<typeof changePostTextAC>
export type ActionType = AddPostACType | ChangePostTextACType
export type PostsType = { id: string, message: string, likesCount: number }
export type DialogsType = { id: string, name: string, img: string }
export type MessagesType = { id: string, message: string }
type SidebarType = { id: string, name: string }
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType[]
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    addPost: () => void
    onChangePostText: (value: string) => void
    dispatch: (action: any) => void
}
export const store: StoreType = {
    _callSubscriber() { },
    _state: {
        profilePage: {
            posts: [
                { id: v1(), message: 'message-1', likesCount: 5 },
                { id: v1(), message: 'message-2', likesCount: 8 },
                { id: v1(), message: 'message-3', likesCount: 11 },
                { id: v1(), message: 'message-4', likesCount: 14 },
                { id: v1(), message: 'message-5', likesCount: 17 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: v1(), name: 'Alex', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngVwb85JwgOn247xcWn16PWH9_vF6vbn4rA&usqp=CAU' },
                { id: v1(), name: 'Roma', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6s275QyZ2fucw7JUjetZniag8_KHEy-Phw&usqp=CAU' },
                { id: v1(), name: 'Jora', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVzPNAf1Ho_LeMi1RvbyKfHsTwj1iLGY3Dw&usqp=CAU' },
                { id: v1(), name: 'Petya', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPhc-UqiuZfT4V37eO5MVVvSI3D_tUG5dIQ&usqp=CAU' },
            ],
            messages: [
                { id: v1(), message: 'Message 1' },
                { id: v1(), message: 'Message 2' },
                { id: v1(), message: 'Message 3' },
                { id: v1(), message: 'Message 4' },
            ]
        },
        sidebar: [
            { id: v1(), name: 'Alex' },
            { id: v1(), name: 'Roma' },
            { id: v1(), name: 'Jora' },
        ]
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    addPost() {
        this._state.profilePage.posts = [{ id: v1(), message: this._state.profilePage.newPostText, likesCount: 1 }, ... this._state.profilePage.posts]
        store._callSubscriber()
    },
    onChangePostText(value: string) {
        this._state.profilePage.newPostText = value
        store._callSubscriber()
    },
    dispatch(action: ActionType) {
        switch (action.type) {
            case 'ADD-POST':
                this._state.profilePage.posts = [{ id: v1(), message: this._state.profilePage.newPostText, likesCount: 1 }, ... this._state.profilePage.posts]
                store._callSubscriber()
                return
            case 'CHANGE-POST-TEXT':
                this._state.profilePage.newPostText = action.payload.value
                store._callSubscriber()
                return
            default: return
        }
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