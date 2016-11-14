import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Abouts from './react_components/Abouts'
import App from './react_components/App'
import Repos from './react_components/Repos'
import Repo from './react_components/Repo'
import About from './react_components/About'
import Home from './react_components/Home'

render(
  <Router history={browserHistory}>
             <Route path="/" component={App}>
               <IndexRoute component={Home}/>
                 <Route path="/repos" component={Repos}>
                     <Route path="/repos/:userName/:repoName" component={Repo}/>
                 </Route>
                 <Route path="/abouts" component={Abouts}>
                     <Route path="/abouts/:userName/:repoName" component={About}/>
                 </Route>
             </Route>
  </Router>,
  document.getElementById('app')
)
