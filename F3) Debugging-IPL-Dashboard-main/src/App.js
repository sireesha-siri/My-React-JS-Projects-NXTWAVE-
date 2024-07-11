import {Route, Switch} from 'react-router-dom' // 2

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} /> {/* 4 */}
    <Route path="/team-matches/:id" component={TeamMatches} /> {/* 1,5 */}
    <Route component={NotFound} />
  </Switch> // 3
)

export default App
