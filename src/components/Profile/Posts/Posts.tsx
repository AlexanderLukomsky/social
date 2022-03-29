import React, { ChangeEvent, createRef } from "react"
import { ProfilePageType } from "../../../state/state"
import { Button } from "../Button/Button"
import { PostItem } from "./Post/PostItem"
import s from './Posts.module.scss'

type PostsPropsType = {
    profilePage: ProfilePageType
}
export const Posts = (props: PostsPropsType) => {
    const addNewPost = () => {
        props.profilePage.addPost()
        props.profilePage.onChange('')
    }
    const onPostChangeHandler = () => {
        const value = newPostElement.current as HTMLTextAreaElement
        props.profilePage.onChange(value.value)
    }
    const newPostElement = createRef<HTMLTextAreaElement>()
    return (
        <div className={s.posts}>
            <div>
                <textarea
                    onChange={onPostChangeHandler}
                    ref={newPostElement}
                    value={props.profilePage.newPostText}
                />
                <Button title='add post' callback={addNewPost} />
            </div>
            <ul>
                {props.profilePage.posts.map(el => <li key={el.id} id={el.id}>
                    <PostItem message={el.message} />
                </li>)}
            </ul>
        </div>
    )
}