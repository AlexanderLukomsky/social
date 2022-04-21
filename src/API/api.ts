import axios from "axios";

export const usersAPI = {
    _instance: axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "1b228bfc-8734-47cb-b840-f8cc669c3e6c"
        }
    }),
    auth() {
        return this._instance.get('auth/me')
            .then(response => response.data)
    }
    ,
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return this._instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUserProfile(userId: string | undefined) {
        return this._instance.get(`profile/${userId ? userId : '19615'}`)
            .then(response => response.data)
    }
    ,
    follow(userID: number) {
        return this._instance.post(`follow/${userID}`)
            .then(response => response.data)
    },
    unFollow(userID: number) {
        return this._instance.delete(`follow/${userID}`)
            .then(response => response.data)
    }

}
