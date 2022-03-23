import { v1 } from 'uuid';
export type PostsType = { id: string, message: string, likesCount: number }
export type DialogsType = { id: string, name: string, img: string }
export type MessagesType = { id: string, message: string }
type SidebarType = { id: string, name: string }
type ProfilePageType = {
    posts: PostsType[]
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType[]
}


export const state: StateType = {
    profilePage: {
        posts: [
            { id: v1(), message: 'message-1', likesCount: 5 },
            { id: v1(), message: 'message-2', likesCount: 8 },
            { id: v1(), message: 'message-3', likesCount: 11 },
            { id: v1(), message: 'message-4', likesCount: 14 },
            { id: v1(), message: 'message-5', likesCount: 17 },
        ]
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
}
