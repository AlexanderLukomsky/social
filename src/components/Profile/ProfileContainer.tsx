import React from "react";
import { connect } from "react-redux";
import { Location, NavigateFunction, Params, useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { setUserProfileThunkCreator } from "../../redux/profile-reducer";
import { getProfileStatusThunk, ProfileStatusType, updateProfileStatusThunk } from "../../redux/profileStatus-reducer";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../types/StateType";
import { Profile } from "./Profile";
type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
    profileStatus: ProfileStatusType
}
type MapDispatchPropsType = {
    getProfileStatusThunk: (userId: string) => void
    setUserProfileThunkCreator: (userId: string | undefined) => void
    updateProfileStatusThunk: (status: string) => void
}
export type RouterType = {
    router: {
        location: Location;
        navigate: NavigateFunction;
        params: Readonly<Params<string>>;
    }
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType & RouterType> {

    componentDidMount = () => {
        const userId = this.props.router.params.userId
        this.props.setUserProfileThunkCreator(userId)
        this.props.getProfileStatusThunk(userId ? userId : '19615')

    }
    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />

        )
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        profileStatus: state.profilestatus,
        profile: state.profilePage.profile as ProfileType,
        isAuth: state.auth.isAuth
    }
}
type WithRouterParamType = typeof ProfileContainer

function withRouter(Component: WithRouterParamType) {
    function ComponentWithRouterProp(props: ProfileContainerPropsType) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}




export default compose(
    connect(MapStateToProps, {
        getProfileStatusThunk: getProfileStatusThunk,
        setUserProfileThunkCreator: setUserProfileThunkCreator,
        updateProfileStatusThunk: updateProfileStatusThunk
    }),
    withRouter
)(ProfileContainer)