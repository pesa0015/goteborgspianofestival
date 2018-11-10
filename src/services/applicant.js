import http from './http'

export default function postApplicant(payload) {
    return http.post('applications', payload);
}
