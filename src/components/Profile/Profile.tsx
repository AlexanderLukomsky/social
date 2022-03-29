import { ProfilePageType } from '../../state/state'
import { Posts } from './Posts/Posts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
type ProfilePropsType = {
    profilePage: ProfilePageType
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className='profile'>
            <ProfileInfo />
            <Posts profilePage={props.profilePage} />
        </div>
    )
}