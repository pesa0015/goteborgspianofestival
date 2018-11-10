import {combineReducers} from 'redux'
import years from './years'
import currentYear from './currentYear'
import sponsors from './sponsors'
import loading from './loading'
import eventPages from './eventPages'
import news from './news'
import boardMembers from './boardMembers'

export default combineReducers({
    years: years,
    currentYear: currentYear,
    sponsors: sponsors,
    loading: loading,
    eventPages: eventPages,
    news: news,
    boardMembers: boardMembers
});
