import { PostsType } from "../../../state/state"
import { Button } from "../Button/Button"
import { PostItem } from "./Post/PostItem"
import s from './Posts.module.scss'

type PostsPropsType = {
    posts: PostsType[]
}
export const Posts = (props: PostsPropsType) => {

    return (
        <div className={s.posts}>
            <div>
                <textarea name="" id=""></textarea>
                <Button title='add post' callback={() => { alert('hi') }} />
            </div>
            <ul>
                {props.posts.map(el => <li key={el.id} id={el.id}>
                    <PostItem message={el.message} />
                </li>)}
            </ul>
        </div>
    )
}