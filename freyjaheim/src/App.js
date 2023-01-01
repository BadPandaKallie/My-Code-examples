import MyHeader from './header'
import Menubar from './menu'
import 'fomantic-ui-css/semantic.min.css'
import Home from './home'
import Preemie from './preemie'
import SocialLinks from './soical-links'
import Girls from './girls'
import Boys from './boys'
import Neutral from './neutral'
import Accessories from './accessories'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='page-container'>
        <MyHeader/>
        <Menubar />
        <div className='content-wrap'>
          <Switch>
            <Route path='/accessories'>
              <Accessories />
            </Route>
            <Route path='/neutral'>
              <Neutral />  
            </Route> 
            <Route path='/boys'>
              <Boys />
            </Route>
          <Route path='/girls'>
              <Girls />
            </Route>
            <Route path='/preemie'>
              <Preemie />
            </Route>
            <Route path ='/'>
              <Home />
            </Route>
          </Switch>
        </div>
        <div className='sociallinks'>
          <SocialLinks />
        </div>
      </div>
    </Router>
  )
}

export default App;
