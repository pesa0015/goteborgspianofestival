export function addYears(years) {
    return {
        type: 'ADD_YEARS',
        payload: years
    }
}

export function addCurrentYear(year) {
    return {
        type: 'ADD_CURRENT_YEAR',
        payload: year
    }
}

export function listYears() {
    return {
        type: 'LIST_YEARS'
    }
}

export function listYear(year) {
    return {
        type: 'LIST_YEAR',
        payload: year
    }
}

export function listCurrentYear(year) {
    return {
        type: 'LIST_CURRENT_YEAR',
        payload: year
    }
}
