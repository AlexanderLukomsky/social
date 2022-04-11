import axios from "axios";
import React from "react";
import usersDefaultPhoto from '../../assets/usersImg.jpg';
import { UsersForUserPageType } from "../types/StateType";
type UsersPropsType = {
    users: UsersForUserPageType[]
    follow: (userID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: UsersForUserPageType[]) => void
}
export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        console.log('Users did mount');
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(
                response.data.items
            ))
    }
    // componentDidUpdate() {

    // }
    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(
                response.data.items
            ))
    }
    render() {
        return (
            <div>
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