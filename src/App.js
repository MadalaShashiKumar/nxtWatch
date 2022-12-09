import './App.css'

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/trending" component={Trending} />
    <Route exact path="/gaming" component={Gaming} />
  </Switch>
)

export default App
