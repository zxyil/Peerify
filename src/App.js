import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import CreateRoom from './pages/CreateRoom/CreateRoom';
import JoinRoom from './pages/JoinRoom/JoinRoom';
import WaitingRoom from './pages/WaitingRoom/WaitingRoom';
import Play from './pages/Play/Play';
import Results from './pages/Results/Results';

import './App.css';

global.clearLocalStorage = function() {
    localStorage.removeItem('prompt');
    
    localStorage.removeItem('user-response');
    localStorage.removeItem('user-evaluation');

    localStorage.removeItem('evaluation');
    localStorage.removeItem('feedback');

    localStorage.removeItem('response-ready');
    localStorage.removeItem('evaluation-ready');
    localStorage.removeItem('feedback-ready');

    localStorage.removeItem('feedback-rating');

    localStorage.removeItem('ready_next_game');
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Router>
                <div className = 'top-border'> </div>
                <Switch>
                    <Route exact path = '/' component = { Home } />
                    <Route exact path = '/create-room' component = { CreateRoom } />
                    <Route exact path = '/join-room' component = { JoinRoom } />
                    <Route exact path = '/waiting' component = { WaitingRoom } />
                    <Route exact path = '/play' component = { Play } />
                    <Route exact path = '/results' component = { Results } />
                </Switch>
            </Router>
        );
    }
}

export default App;
