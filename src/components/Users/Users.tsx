import axios from "axios";
import React from "react";
import usersDefaultPhoto from '../../assets/usersImg.jpg';
import { UsersForUserPageType } from "../types/StateType";
type UsersPropsType = {
    users: UsersForUserPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: UsersForUserPageType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
}
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // headers:     {
    //     "API-KEY": "ваш-ключ"
    // }
});
export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        // instance.get('https://social-network.samuraijs.com/api/1.0/users').then(
        //     response => {
        //         return this.props.setUsers(
        //             response.data.items
        //         )
        //     }
        // )
        console.log(this.props.currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                }
            })
        console.log('Users did mount');
        document.title = 'Users'
    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
    // getUsers = () => {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(response => this.props.setUsers(
    //             response.data.items
    //         ))
    // }
    changeCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                { this.props.setUsers(response.data.items) }
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pagesCountArr: number[] = []
        for (let page = 1; page <= pagesCount; page++) {
            pagesCountArr = [...pagesCountArr, page]
        }
        return (
            <div className="users">
                <ul className="users__list_pages">
                    <li onClick={() => { this.changeCurrentPage(1) }}>
                        1
                    </li>
                    {
                        pagesCountArr.splice(
                            this.props.currentPage, this.props.currentPage + 8 - this.props.currentPage
                        ).map((p, i) =>
                            <li key={i} className={p === this.props.currentPage ? 'users__selected' : ''}
                                onClick={() => { this.changeCurrentPage(p) }} >
                                {p}
                            </li>
                        )}
                </ul>
                {/* <button onClick={this.getUsers}>get</button> */}
                {this.props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <img src={u.photos.small ? u.photos.small : usersDefaultPhoto} alt="description" />
                        </div>
                        {u.name}
                        {
                            u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                        }

                    </div>)}
            </div>
        )
    }
}