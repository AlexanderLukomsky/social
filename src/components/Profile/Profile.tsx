import { url } from 'inspector'
import { ProfileType } from '../types/StateType'
import { UserPostsContainer } from './Posts/UserPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
type ProfilePropsType = {
    profile: ProfileType
    updateProfileStatusThunk: (status: string) => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className='profile'>
            <ProfileInfo profile={props.profile} updateStatus={props.updateProfileStatusThunk} />
            <UserPostsContainer />
        </div>
    )
}