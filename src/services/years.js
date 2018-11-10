import http from './http'

export function getYears() {
    return http.get('years');
}

export function getCurrentYear() {
    return http.get('years/current');
}
