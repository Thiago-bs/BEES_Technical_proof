import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPanel from './pages/MainPanel/mainPanel';
import BeerForm from './pages/BeerForm/beerForm';
import NavBar from './pages/NavBar/navBar'

function Routes() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route path="/" exact component={MainPanel} />
                <Route path="/add-beer" component={BeerForm} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; 