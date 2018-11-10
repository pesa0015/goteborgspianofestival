import http from './http'

export function getSponsors() {
    return http.get('sponsors');
}
