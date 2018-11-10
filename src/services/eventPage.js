import http from './http'

export function getEventPage(year, slug) {
    return http.get('program/' + year + '/' + slug);
}
