import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { AuthStateType } from "../types/StateType";
import { Header } from "./Header";
export const HeaderContainer = () => {
    const state = useSelector<AppStateType, AuthStateType>(state => state.auth)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutThunk())
    }
    return (
        <Header state={state} logout={logout} />
    )
}