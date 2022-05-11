import { connect } from "react-redux"
import { addPostAC, changePostTextAC } from "../../../redux/profile-reducer"
import { ActionType, AppStateType } from "../../../redux/redux-store"
import { UserPosts } from "./UserPosts"


const MapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth
    }
}
const MapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addNewPost: () => {
            dispatch(addPostAC())
        },
        changeNewPostTextValue: (value: string) => {
            dispatch(changePostTextAC(value))
        }
    }
}
export const UserPostsContainer = connect(MapStateToProps, MapDispatchToProps)(UserPosts)

