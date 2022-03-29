import { PostsType, ProfilePageType } from '../../state/state'
import { Posts } from './Posts/Posts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className='profile'>
            <ProfileInfo />
            <Posts addPost={props.addPost} profilePage={props.profilePage} />
        </div>
    )
}