import { connect } from "react-redux";
import { ActionType, AppStateType } from "../../redux/redux-store";
import { changeCurrentPageAC, followAC, setTotalCountAC, setUsersAc, unfollowAC } from "../../redux/user-reducer";
import { UsersForUserPageType } from "../types/StateType";
import { UsersAPIComponent } from "./UsersAPIComponent";
const MapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
    }
}
const MapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userID: number) => { (dispatch(followAC(userID))) },
        unfollow: (userID: number) => { (dispatch(unfollowAC(userID))) },
        setUsers: (users: UsersForUserPageType[]) => { (dispatch(setUsersAc(users))) },
        setCurrentPage: (currentPage: number) => { dispatch(changeCurrentPageAC(currentPage)) },
        setTotalCount: (totalCount: number) => { dispatch(setTotalCountAC(totalCount)) }
    }
}
export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersAPIComponent)