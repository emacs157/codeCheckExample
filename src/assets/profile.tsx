import axios from 'axios';

const apiKey = '9tVGt58dYTYVi3cT3owHobAHmpybodFiyqREBn52';
const url = 'https://opendata.resas-portal.go.jp';
export const instance = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'X-API-KEY': apiKey,
    },
    baseURL: url,
});
