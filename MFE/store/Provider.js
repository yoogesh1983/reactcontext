import React, { Component } from 'react';
import Home from '../src/pages/Home'
import ContextDB from './Context'

class Provider extends Component {

    constructor(props){
        super(props)

        this.state = {
            jwt: '1qaswer43hj5rgf', 
            isTestEnvironment: true,
        }
    }
    
    render(){
        return(
            <ContextDB.Provider value = {{...this.state, firstName: 'Yoogesh'}}>
                <Home />
            </ContextDB.Provider>
        );
    }
}
export default Provider;