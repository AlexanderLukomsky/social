
import { NavLink } from "react-router-dom"
import { AuthStateType } from "../types/StateType"

type HeaderPropsType = AuthStateType
export const Header = (props: HeaderPropsType) => {
    return (
        <header className='header'>
            <img className='header__img' src="https://i.redd.it/yh47wtwmbj961.png" alt="logo" />

            <div>
                {
                    props.isAuth ? props.data.login : <NavLink to='/login'>Login</NavLink>
                }


            </div>
        </header>
    )
}