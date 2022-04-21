
import { ProfileType } from '../types/StateType'
import { UserPostsContainer } from './Posts/UserPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
type ProfilePropsType = {
    profile: ProfileType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className='profile'>

            <ProfileInfo profile={props.profile} />
            <UserPostsContainer />
        </div>
    )
}