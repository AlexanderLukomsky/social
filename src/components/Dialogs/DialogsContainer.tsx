import { connect } from "react-redux"
import { addMessageAC, changeNewMessageTextAC } from "../../redux/dialogs-reducer"
import { ActionType, AppStateType } from "../../redux/redux-store"
import { Dialogs } from "./Dialogs"

const MapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
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


export const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)
