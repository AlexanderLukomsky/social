type PostsType = { id: string, message: string, likesCount: number }
type DialogsType = { id: string, name: string, img: string }
type MessagesType = { id: string, message: string }
type AddressUserType = { country: string, city: string }
export type UserType = {
    id: string;
    name: string;
    followed: boolean;
    status: string;
    photoUrl: string;
    address: AddressUserType
}
export type UsersPageType = {
    users: UserType[]
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessage: string
}
type SidebarType = { id: string, name: string }
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType[]
}