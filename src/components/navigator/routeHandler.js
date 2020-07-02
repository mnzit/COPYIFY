import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Home from './pages/home'
import Artiste from './pages/artiste'
import Album from './pages/album'
import Playlist from './pages/playlist'
import Search from './pages/search'
import Library from './pages/library'

export default function RouteHandler() {
    return (
        <Switch>
            <Route exact path='/'>
                <Library />
            </Route>

            <Route path='/artiste/:id'>
                <Artiste />
            </Route>

            <Route path='/playlist/:id'>
                <Playlist />
            </Route>

            <Route path='/album/:id'>
                <Album />
            </Route>

            <Route path='/search'>
                <Search />
            </Route>

            <Route path='/library'>
                <Library />
            </Route>
        </Switch>
    )
}
