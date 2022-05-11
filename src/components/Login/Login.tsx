import axios from "axios";
import { LoginForm } from "./LoginForm"

export const LoginPage = () => {
    const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        headers: {
            "API-KEY": "1b228bfc-8734-47cb-b840-f8cc669c3e6c"
        }
    })
    const auth = (formData: { login: string, password: string, rememberMe: boolean }) => {

    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={auth} />
        </div>
    )
}