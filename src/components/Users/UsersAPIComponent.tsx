import React from "react";
import { Preloader } from "../common/Preloader";
import { UsersPageType } from "../types/StateType";
import { Users } from "./Users";
type UsersPropsType = {
    usersPage: UsersPageType
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userID: number) => void
    unfollowThunkCreator: (userID: number) => void
}
export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
        document.title = 'Users'
    }
    changeCurrentPage = (page: number) => {
        this.props.getUsersThunkCreator(page, this.props.usersPage.pageSize)
    }
    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader /> :
                <Users
                    {...this.props.usersPage}
                    totalUsersCount={this.props.usersPage.totalUsersCount}
                    pageSize={this.props.usersPage.pageSize}
                    currentPage={this.props.usersPage.currentPage}
                    users={this.props.usersPage.users}
                    changeCurrentPage={this.changeCurrentPage}
                    unfollowThunkCreator={this.props.unfollowThunkCreator}
                    followThunkCreator={this.props.followThunkCreator}
                />}
        </>
    }
}