import { UserPostsContainer } from './Posts/UserPostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export const Profile = () => {
    return (
        <div className='profile'>
            <ProfileInfo />
            <UserPostsContainer />
        </div>
    )
}