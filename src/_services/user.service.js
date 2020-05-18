import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const userService = {
    getAll
};

export function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apertumnUrl}/users`, requestOptions).then(handleResponse);
}