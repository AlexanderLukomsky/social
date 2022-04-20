import { Preloader } from "../../common/Preloader"
import { ProfileType } from "../../types/StateType"

type ProfileInfoType = {
    profile: ProfileType
}
export const ProfileInfo = ({ profile, ...props }: ProfileInfoType) => {
    if (!profile) return <Preloader />
    return (
        <div className="profile__header">
            <div>
                <img src="https://wallpaperaccess.com/full/109672.jpg" alt="" />
                <p>{profile.fullName}</p>
                <p>{profile.aboutMe}</p>
            </div>
            <div>
                <img src={profile.photos.large} alt="" style={{ width: '200px', height: '200px' }} />
            </div>
        </div>
    )
}