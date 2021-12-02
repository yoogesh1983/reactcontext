import React, { Component } from 'react';
import Home from '../src/pages/Home'
import Provider from '../store/Provider'

class Router extends Component {

    render(){
        return(
            <Provider>
                <Home />
            </Provider>
        );
    }
}
export default Router;