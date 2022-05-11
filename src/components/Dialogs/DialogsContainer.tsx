import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { compose } from "redux"
import { addMessageAC, changeNewMessageTextAC } from "../../redux/dialogs-reducer"
import { ActionType, AppStateType } from "../../redux/redux-store"
import { Dialogs, DialogsPropsType } from "./Dialogs"

const MapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const MapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageAC())
        },
        onChangeMessage: (value: string) => {
            dispatch(changeNewMessageTextAC(value))
        }
    }
}
function withRouter(Component: typeof Dialogs) {
    function ComponentWithRouterProp(props: DialogsPropsType) {
        if (!props.isAuth) return <Navigate replace to="/login" />
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
