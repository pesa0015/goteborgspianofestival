import http from './http'

export default function sendMembership(payload) {
    return http.post('member', payload);
}
