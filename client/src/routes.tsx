import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPanel from './pages/MainPanel/mainPanel'

function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPanel} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; 