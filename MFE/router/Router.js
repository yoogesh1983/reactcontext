import React, { Component } from 'react';
import Home from '../src/pages/Home'

class Router extends Component {

    constructor(props){
        super(props)
    }
    
    render(){
        return(
               <Home />
        );
    }
}
export default Router;