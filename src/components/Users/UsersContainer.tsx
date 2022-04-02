import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { followAC, setUsersAC, unfollowAC, UsersPageActionType } from "../../redux/user-reducer";
import { UserType } from "../types/StateType";
import { Users } from "./Users";
const MapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage
    }
}
const MapDispatchToProps = (dispatch: (action: UsersPageActionType) => void) => {
    return {
        follow: (userID: string) => { dispatch(followAC(userID)) },
        unfollow: (userID: string) => { dispatch(unfollowAC(userID)) },
        setUsers: (users: UserType[]) => { dispatch(setUsersAC(users)) }
    }
}
export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)