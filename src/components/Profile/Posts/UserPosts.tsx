import React from "react"
import { ChangeEvent } from "react"
import { ProfilePageType } from "../../types/StateType"
import { Button } from "../Button/Button"
import { PostItem } from "./Post/PostItem"
import s from './Posts.module.scss'

type PostsPropsType = {
    profilePage: ProfilePageType
    changeNewPostTextValue: (value: string) => void
    addNewPost: () => void
}
export const UserPosts = ({ profilePage, addNewPost, changeNewPostTextValue, ...props }: PostsPropsType) => {
    const onClickHandler = () => {
        addNewPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value
        changeNewPostTextValue(newValue)
    }
    return (
        <div className={s.posts}>
            <div>
                <textarea
                    onChange={onChangeHandler}
                    value={profilePage.newPostText}
                />
                <Button title='add post' callback={onClickHandler} />
            </div>
            <ul>
                {profilePage.posts.map(el => <li key={el.id} id={el.id}>
                    <PostItem message={el.message} />
                </li>)}
            </ul>
        </div>
    )
}