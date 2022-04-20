
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { ProfilePageType, ProfileType } from "../types/StateType";
import { Profile } from "./Profile";
export type ProfileContainerType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
}
export class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount = () => {
        console.log(this.props);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => this.props.setUserProfile(response.data))
    }


    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile as ProfileType
    }
}


const AC = {
    setUserProfile: setUserProfileAC
}
export default connect(MapStateToProps, AC)(ProfileContainer)