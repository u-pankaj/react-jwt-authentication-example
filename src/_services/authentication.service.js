import { BehaviorSubject } from 'rxjs';

import config from 'config';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(accountId, pswd) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accountId, pswd })
    };

    return fetch(`${config.apertumnUrl}/user/login`, requestOptions)
    .then(response =>{
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if(!data.token)
            {
            return Promise.reject("Invalid Credentials");
            }
            return data;
        });
    } )
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
