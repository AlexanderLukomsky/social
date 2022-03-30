import { ProfilePageType } from '../../state/state'
import { Posts } from './Posts/Posts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    onChangePostText: (value: string) => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div className='profile'>
            <ProfileInfo />
            <Posts profilePage={props.profilePage} addPost={props.addPost} onChangePostText={props.onChangePostText} />
        </div>
    )
}