import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../API/api';
import usersDefaultPhoto from '../../assets/usersImg.jpg';
import { UsersForUserPageType } from '../types/StateType';
type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersForUserPageType[]
    changeCurrentPage: (currentPage: number) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesCountArr: number[] = []
    for (let page = 1; page <= pagesCount; page++) {
        pagesCountArr = [...pagesCountArr, page]
    }

    const unfollow = (userID: number) => {
        usersAPI.unFollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(userID)
                }
            })
    }
    const follow = (userID: number) => {
        usersAPI.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(userID)
                }
            })
    }
    return (
        <div className="users">
            <ul className="users__list_pages">
                {props.currentPage !== 1 && <li onClick={() => { props.changeCurrentPage(1) }}>
                    1
                </li>}
                {
                    pagesCountArr.splice(
                        props.currentPage - 1, props.currentPage + 8 - props.currentPage
                    ).map((p, i) =>
                        <li key={i} className={p === props.currentPage ? 'users__selected' : ''}
                            onClick={() => { props.changeCurrentPage(p) }} >
                            {p}
                        </li>
                    )}
            </ul>
            {props.users.map(u =>
                <div key={u.id}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}><img src={u.photos.small || u.photos.small ? u.photos.small || u.photos.small : usersDefaultPhoto} alt="description" /></NavLink>
                    </div>
                    {u.name}
                    {
                        u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> : <button onClick={() => follow(u.id)}>Follow</button>
                    }

                </div>)}
        </div>
    )
}