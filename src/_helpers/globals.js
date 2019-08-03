var accessToken = (localStorage.getItem('user') != null) ? JSON.parse(localStorage.getItem('user')).access_token : null

export function globals() {
    return {
        authenticationHeader: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        backendRoot: 'http://127.0.0.1:8000/api/'
    };
}