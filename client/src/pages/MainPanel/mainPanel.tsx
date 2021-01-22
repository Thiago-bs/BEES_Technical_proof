import React from 'react';
import NavBar from '../NavBar/navBar'
import Card from '../Card/card'

function mainPanel() {
    return (
        <div id="page-beer">
            <NavBar></NavBar>
            <Card></Card>
        </div>
    );
}

export default mainPanel;