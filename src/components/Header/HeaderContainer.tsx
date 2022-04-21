
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../API/api";
import { AuthStateType, setUserDataAC } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Header } from "./Header";

type MapStatePropsType = {
    state: AuthStateType
}
type MapDispatchPropsType = {
    setUserData: (data: AuthStateType) => void
}
type AuthPropsType = MapStatePropsType & MapDispatchPropsType
export class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        usersAPI.auth()
            .then(data => this.props.setUserData(data))
    }

    render() {
        return (
            <Header {...this.props.state} />
        )
    }

}
const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.auth
    }
}


export default connect(MapStateToProps, { setUserData: setUserDataAC })(HeaderContainer)