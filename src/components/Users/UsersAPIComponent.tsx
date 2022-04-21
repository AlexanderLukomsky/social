import React from "react";
import { usersAPI } from "../../API/api";
import { Preloader } from "../common/Preloader";

import { UsersForUserPageType, UsersPageType } from "../types/StateType";
import { Users } from "./Users";
type UsersPropsType = {
    usersPage: UsersPageType
    follow: (userID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: UsersForUserPageType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
        document.title = 'Users'
    }
    changeCurrentPage = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }
    render() {
        return <>
            <button onClick={() => this.props.toggleIsFetching(!this.props.usersPage.isFetching)}>+</button>
            {this.props.usersPage.isFetching ? <Preloader /> :
                <Users
                    totalUsersCount={this.props.usersPage.totalUsersCount}
                    pageSize={this.props.usersPage.pageSize}
                    currentPage={this.props.usersPage.currentPage}
                    users={this.props.usersPage.users}
                    changeCurrentPage={this.changeCurrentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}

                />}
        </>
    }
}