import axios from "axios"

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})


export const requestApi = {
    checkPost(status: boolean) {
        return instance.post('', {success: status})
    }
}