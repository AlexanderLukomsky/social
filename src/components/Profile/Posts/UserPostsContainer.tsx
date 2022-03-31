import React, { createRef } from "react"
import { addPostAC, changePostTextAC } from "../../../state/redux/profile-reducer"
import { StoreType } from "../../../state/redux/redux-store"
import { StoreContext } from "../../StoreContext"
import { UserPosts } from "./UserPosts"

type PostsPropsType = {
    store: StoreType
}
export const UserPostsContainer = (props: PostsPropsType) => {
    //*! const PostsWrapper = React.memo(UserPosts) *//
    // const state = props.store.getState()
    // const addNewPost = () => {
    //     props.store.dispatch(addPostAC())
    //     props.store.dispatch(changePostTextAC(''))
    // }
    // const changeNewPostTextValue = (value: string) => {
    //     props.store.dispatch(changePostTextAC(value))
    // }
    return <>
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    const state = store.getState()
                    const addNewPost = () => {
                        store.dispatch(addPostAC())
                        store.dispatch(changePostTextAC(''))
                    }
                    const changeNewPostTextValue = (value: string) => {
                        store.dispatch(changePostTextAC(value))
                    }
                    return <UserPosts state={state.profilePage} changeNewPostTextValue={changeNewPostTextValue} addNewPost={addNewPost} />
                }
            }
        </StoreContext.Consumer>
    </>
}

