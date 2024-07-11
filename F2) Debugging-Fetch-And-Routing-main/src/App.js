import {Route, Switch} from 'react-router-dom' // 4

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <div className="app-body">
        <Header /> {/* 1 */}
        <Switch>
          <Route exact path="/" component={Home} /> {/* 12 */}
          <Route exact path="/about" component={About} /> {/* 3 */}
          <Route exact path="/contact" component={Contact} /> {/* 13 */}
          <Route exact path="/blogs/:id" component={BlogItemDetails} />{' '}
          {/* 14 */}
          <Route component={NotFound} /> {/* 2 */}
        </Switch>
      </div>
    </div>
  </div>
)

export default App
