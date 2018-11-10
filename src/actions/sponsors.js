export function addSponsors(sponsors) {
    return {
        type: 'ADD_SPONSORS',
        payload: sponsors
    }
}

export function listSponsors() {
    return {
        type: 'LIST_SPONSORS'
    }
}