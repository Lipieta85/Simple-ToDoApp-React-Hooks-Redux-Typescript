import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PageNotFound from './components/NotFound'
import Todo from './containers/TodoContainer'
import Nav from './components/Nav'
import DoneList from './components/DoneList'

import './App.css'

const App: React.FC = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/Todo" />
                </Route>
                <Route path="/Todo" component={Todo} />
                <Route path="/Done" component={DoneList} />
                <Route path="*" component={PageNotFound} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App
