import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { followThunkCreator, getUsersThunkCreator, toggleFollowingProgressAC, unfollowThunkCreator } from "../../redux/user-reducer";
import { UsersAPIComponent } from "./UsersAPIComponent";
const MapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
    }
}
// const MapDispatchToProps = (dispatch: (action: ActionType) => void) => {
//     return {
//         follow: (userID: number) => { (dispatch(followAC(userID))) },
//         unfollow: (userID: number) => { (dispatch(unfollowAC(userID))) },
//         setUsers: (users: UsersForUserPageType[]) => { (dispatch(setUsersAC(users))) },
//         setCurrentPage: (currentPage: number) => { dispatch(changeCurrentPageAC(currentPage)) },
//         setTotalCount: (totalCount: number) => { dispatch(setTotalCountAC(totalCount)) },
//         toggleIsFetching: (isFetching: boolean) => { dispatch(toggleIsFetchingAC(isFetching)) }
//     }
// }

const AC = {
    togleFollowingProgress: toggleFollowingProgressAC,
    getUsersThunkCreator: getUsersThunkCreator,
    followThunkCreator: followThunkCreator,
    unfollowThunkCreator: unfollowThunkCreator
}
export const UsersContainer = connect(MapStateToProps, AC)(UsersAPIComponent)