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
    console.log(props.currentPage);
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
                        <img src={u.photos.small ? u.photos.small : usersDefaultPhoto} alt="description" />
                    </div>
                    {u.name}
                    {
                        u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }

                </div>)}
        </div>
    )
}