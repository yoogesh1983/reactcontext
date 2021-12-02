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
    
    
     //If you dont wrap the {this.props.children} by ContextDB.Provider, it will always take the value from the default context
    // Since you are wrapping the {this.props.children} with Provider, the context default value will be overridden by the value you provided
    // Also notice that you can add more value if you want directly here also like we have added a new field firstName with the value 'Yoogesh'
    render(){
        return(
            <ContextDB.Provider value = {{...this.state, firstName: 'Yoogesh'}}>
                {this.props.children}
            </ContextDB.Provider>
        );
    }
}
export default Provider;