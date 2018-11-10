import React, { Component } from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import i18n from './i18n'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { instanceOf } from 'prop-types'
import { withCookies } from 'react-cookie'
import { getYears, getCurrentYear } from './services/years'
import { addYears, listYears, addCurrentYear } from './actions/years'
import { loadingDone } from './actions/loading'
import { getSponsors } from './services/sponsors'
import { addSponsors } from './actions/sponsors'
import { getNews } from './services/news'
import { addNews } from './actions/news'
import { getBoardMembers } from './services/boardMembers'
import { addBoardMembers } from './actions/boardMembers'
import reducer from './reducers'
import Nav from './views/Nav/Nav'
import Home from './views/Home/Home'
import Program from './views/Program/Program'
import Loader from './views/Loader/Loader'
import EventPage from './views/Program/EventPage/EventPage'
import News from './views/News/News'
import Board from './views/Board/Board'
import Sponsors from './views/Sponsors/Sponsors'
import Adult from './views/Applicant/Adult/Adult'
import Young from './views/Applicant/Young/Young'
import Volunteer from './views/Applicant/Volunteer/Volunteer'
import Contact from './views/Contact/Contact'
import Membership from './views/Membership/Membership'
import './App.css'
import './loader.css'

// Add the reducer to your store on the `routing` key
const store = createStore(
    reducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
        getYears().then((response) => {
            store.dispatch(addYears(response.data));
            store.dispatch(listYears());
        });
        getSponsors().then((response) => {
            store.dispatch(addSponsors(response.data));
        });
        getCurrentYear().then((response) => {
            store.dispatch(addCurrentYear(response.data));
        });
        getNews().then((response) => {
            store.dispatch(addNews(response.data));
        });
        getBoardMembers().then((response) => {
            store.dispatch(addBoardMembers(response.data));
            store.dispatch(loadingDone());
            this.setState({loading: false});
        });
        // var propTypes = {
        //     cookies: instanceOf(Cookies).isRequired
        // };
        const { cookies } = props;
        if (i18n.language !== cookies.get('locale')) {
            i18n.changeLanguage(cookies.get('locale'));
        }
    }
  render() {
    // store.subscribe(() => {
    //     if (!store.getState().loading) {
    //         this.setState({loading: false});
    //     }
    // });
    
    return (
        <Provider store={store}>
            { /* Tell the Router to use our enhanced history */ }
            <BrowserRouter>
                <div>
                    <Nav/>
                    {
                        this.state.loading ? <Loader/> :
                        <div id="wrapper">
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/program/:year' component={Program}/>
                                <Route path='/program/:year/:slug' component={EventPage}/>
                                <Route path='/nyheter' component={News}/>
                                <Route path='/styrelsen' component={Board}/>
                                <Route path='/sponsorer' component={Sponsors}/>
                                <Route path='/anmalan/hogre-niva' component={Adult}/>
                                <Route path='/anmalan/barn-och-unga' component={Young}/>
                                <Route path='/anmalan/bli-volontar' component={Volunteer}/>
                                <Route path='/kontakt' component={Contact}/>
                                <Route path='/bli-medlem' component={Membership}/>
                            </Switch>
                        </div>
                    }
                </div>
            </BrowserRouter>
          </Provider>
    );
  }
}

export default withCookies(App);
