import http from './http'

export function getNews() {
    return http.get('news');
}
