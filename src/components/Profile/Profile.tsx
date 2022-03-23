import { PostsType } from '../../state/state'
import { Posts } from './Posts/Posts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
type ProfilePropsType = {
    posts: PostsType[]
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className='profile'>
            <ProfileInfo />
            <Posts posts={props.posts} />
        </div>
    )
}