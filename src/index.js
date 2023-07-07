import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ResultsPage from './views/results-page'
import Pricing from './views/pricing'
import ErrorPage from './views/error-page'
import Home from './views/home'
import About from './views/about'
import Team from './views/team'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ResultsPage} exact path="/results-page" />
        <Route component={Pricing} exact path="/pricing" />
        <Route component={ErrorPage} exact path="/error-page" />
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Team} exact path="/team" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
