import http from './http'

export default function sendContact(payload) {
    return http.post('contact', payload);
}
