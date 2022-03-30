import { ActionType, ProfilePageType } from '../../state/state'
import { Posts } from './Posts/Posts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void

}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className='profile'>
            <ProfileInfo />
            <Posts profilePage={props.profilePage} dispatch={props.dispatch} />
        </div>
    )
}