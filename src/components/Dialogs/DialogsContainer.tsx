import { useEffect, useState } from "react"
import { connect, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { compose } from "redux"
import { authAPI } from "../../API/api"
import { addMessageAC } from "../../redux/dialogs-reducer"
import { ActionType, AppStateType } from "../../redux/redux-store"
import { AuthStateType, DialogsPageType } from "../types/StateType"
import { Dialogs, DialogsPropsType } from "./Dialogs"

const MapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const MapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addNewMessage: (newMessage: string) => {
            console.log(newMessage);
            dispatch(addMessageAC(newMessage))
        },
    }
}
function withRouter(Component: typeof Dialogs) {
    function ComponentWithRouterProp(props: DialogsPropsType) {
        const state = useSelector<AppStateType, AuthStateType>(state => state.auth)

        //  if (!auth) return <Navigate replace to="/login" />
        return (
            <Component
                {...props}
            />
        );
    }
    return ComponentWithRouterProp;
}



export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withRouter
)(Dialogs)
