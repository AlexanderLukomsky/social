import { ChangeEvent } from "react"
import { ProfilePageType } from "../../../state/redux/profile-reducer"
import { Button } from "../Button/Button"
import { PostItem } from "./Post/PostItem"
import s from './Posts.module.scss'

type PostsPropsType = {
    state: ProfilePageType
    changeNewPostTextValue: (value: string) => void
    addNewPost: () => void
}
export const UserPosts = (props: PostsPropsType) => {
    const onClickHandler = () => {
        props.addNewPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value
        props.changeNewPostTextValue(newValue)
    }
    return (
        <div className={s.posts}>
            <div>
                <textarea
                    onChange={onChangeHandler}
                    value={props.state.newPostText}
                />
                <Button title='add post' callback={onClickHandler} />
            </div>
            <ul>
                {props.state.posts.map(el => <li key={el.id} id={el.id}>
                    <PostItem message={el.message} />
                </li>)}
            </ul>
        </div>
    )
}