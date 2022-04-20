import axios from "axios";
import React from "react";
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
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // headers:     {
    //     "API-KEY": "ваш-ключ"
    // }
});
export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
        console.log('Users did mount');
        document.title = 'Users'
    }
    changeCurrentPage = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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