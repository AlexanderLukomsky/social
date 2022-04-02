import { v1 } from "uuid"
import { UsersPageType, UserType } from "../types/StateType"
type UsersPropsType = {
    usersPage: UsersPageType
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}
export const Users = ({ usersPage, follow, unfollow, ...props }: UsersPropsType) => {

    return (
        <div>
            {usersPage.users.map(el =>
                <li key={el.id}>
                    <div>
                        <img src={el.photoUrl} alt="" />
                        {!el.followed && <button onClick={() => { follow(el.id) }}>Follow</button>}
                        {el.followed && <button onClick={() => { unfollow(el.id) }}>unfollow</button>}
                    </div>
                    <div>
                        <div>
                            <span>
                                {el.name}
                            </span>
                            <span>
                                {el.status}
                            </span>
                        </div>
                        <div>
                            <span>
                                {el.address.country}
                            </span>
                            <span>
                                {el.address.city}
                            </span>
                        </div>
                    </div>
                </li>)}
        </div>

    )
}