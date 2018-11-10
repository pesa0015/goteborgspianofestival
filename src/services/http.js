import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies();

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Locale': cookies.get('locale')
    },
});

export default http;
