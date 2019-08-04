import config from 'config';
import { authHeader, globals } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    getById,
    update,
    delete: _delete
};

function login(email, password) {
    return axios.post(globals().backendRoot + 'login', { email, password })
        .then(user => {
            if (user.data.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user.data));
                location.replace('/')
            }
            return user;
        })
        .catch(function (error) {
            return Promise.reject(error.response.data.message);
        });
}

function logout() {
    // remove user from local storage to log user out
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user')
        location.replace('/')
    }
}

function register(user) {
    return axios.post(globals().backendRoot + 'signup', {
            'name': user.name,
            'email': user.email,
            'password': user.password,
            'password_confirmation': user.password,
        })
        .then(user => {
            if (user.data.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user.data));
            }
            return user;
        })
        .catch(function (error) {
            return Promise.reject(error.response.data.errors.email[0]);
        });
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}