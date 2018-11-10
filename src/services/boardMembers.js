import http from './http'

export function getBoardMembers() {
    return http.get('boardmembers');
}
