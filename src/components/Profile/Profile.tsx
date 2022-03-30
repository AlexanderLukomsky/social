import { reduxStore } from '../../state/redux/redux-store'
import { UserPostsContainer } from './Posts/UserPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = () => {
    return (
        <div className='profile'>
            <ProfileInfo />
            <UserPostsContainer store={reduxStore} />
        </div>
    )
}