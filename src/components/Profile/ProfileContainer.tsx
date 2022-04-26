import React from "react";
import { connect } from "react-redux";
import { Location, NavigateFunction, Params, useLocation, useNavigate, useParams } from "react-router-dom";
import { setUserProfileThunkCreator } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../types/StateType";
import { Profile } from "./Profile";
type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfileThunkCreator: (userId: string | undefined) => void
}
type RouterType = {
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

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile as ProfileType,
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




export default connect(MapStateToProps, { setUserProfileThunkCreator: setUserProfileThunkCreator })(withRouter(ProfileContainer))