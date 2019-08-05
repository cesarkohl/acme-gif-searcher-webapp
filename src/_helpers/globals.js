var accessToken = (localStorage.getItem('user') != null) ? JSON.parse(localStorage.getItem('user')).access_token : null

export function globals() {
    return {
        authenticationHeader: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        backendRoot: 'http://acme-gif-searcher.sg8iabcwyc.sa-east-1.elasticbeanstalk.com/api/'
    };
}