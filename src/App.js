import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import viewFeedback from './components/viewFeedback';
import addFeedback from './components/addFeedback';
import addRating from './components/addRating';
import contactUs from './components/contactUs';



class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={viewFeedback}/>
                        <Route exact path='/addFeedback' component={addFeedback}/>
                        <Route exact path='/addRating' component={addRating}/>
                        <Route exact path='/contactUs' component={contactUs}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;