type PostsType = { id: string, message: string, likesCount: number }
type DialogsType = { id: string, name: string, img: string }
type MessagesType = { id: string, message: string }



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
    usersPage: UsersPageType
}

export type UsersForUserPageType = {
    followed: boolean
    id: number
    name: string
    photos: { small: null, large: null }
    status: null
    uniqueUrlName: null
}
export type UsersPageType = {
    users: UsersForUserPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    error: null
}