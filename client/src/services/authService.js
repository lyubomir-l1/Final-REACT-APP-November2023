import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    try {
        const result = await request.post(`${baseUrl}/login`, {
            email,
            password,
        });
        return result
    } catch (error) {
        console.log('An error occurred:', error);
    }

}

export const register = async (email, username, password, confirmPassword) => {

    try {
        const result = await request.post(`${baseUrl}/register`, {
            email,
            username,
            password,
            confirmPassword,
        });
        return result
    } catch (error) {
        alert(`${error.message}`);
    }

}

export const logout = () => {
    try {
        const result = request.get(`${baseUrl}/logout`);
        return result
    } catch (error) {
        console.log(error);
    }

}
