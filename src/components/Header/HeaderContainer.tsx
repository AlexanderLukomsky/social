import React from "react";
import { connect } from "react-redux";
import { authThunkCreator } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { AuthStateType } from "../types/StateType";
import { Header } from "./Header";

type MapStatePropsType = {
    state: AuthStateType
}
type MapDispatchPropsType = {
    authThunkCreator: () => void
}
type AuthPropsType = MapStatePropsType & MapDispatchPropsType
export class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {

        this.props.authThunkCreator()
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


export default connect(MapStateToProps, { authThunkCreator: authThunkCreator })(HeaderContainer)