import React, { ChangeEvent, createRef } from "react"
import { ProfilePageType } from "../../../state/state"
import { Button } from "../Button/Button"
import { PostItem } from "./Post/PostItem"
import s from './Posts.module.scss'

type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    onChangePostText: (value: string) => void
}
export const Posts = (props: PostsPropsType) => {
    const addNewPost = () => {
        props.addPost()
        props.onChangePostText('')
    }
    const onPostChangeHandler = () => {
        const value = newPostElement.current as HTMLTextAreaElement
        props.onChangePostText(value.value)
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