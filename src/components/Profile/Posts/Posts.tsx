import React, { ChangeEvent, ChangeEventHandler, createRef, useRef } from "react"
import { ProfilePageType } from "../../../state/state"
import { Button } from "../Button/Button"
import { PostItem } from "./Post/PostItem"
import s from './Posts.module.scss'

type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
}
export const Posts = (props: PostsPropsType) => {
    const addNewPost = () => {
        const value = newPostElement.current as HTMLTextAreaElement
        props.addPost()
        console.log(props.profilePage.posts);
    }

    const newPostElement = createRef<HTMLTextAreaElement>()
    return (
        <div className={s.posts}>
            <div>
                <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { props.profilePage.onChange(e.currentTarget.value) }} ref={newPostElement} name="" id="" value={props.profilePage.newPostText}></textarea>
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