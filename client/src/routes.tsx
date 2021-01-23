import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPanel from './pages/MainPanel/mainPanel';
import NavBar from './pages/NavBar/navBar'
import Cart from './pages/Cart/cart';

function Routes() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route path="/" exact component={MainPanel} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; 