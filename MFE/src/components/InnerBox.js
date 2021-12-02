import React, { Component } from 'react';
import Consumer from '../../store/Consumer'

class InnerBox extends Component {

        render(){
            return(
                <Consumer>
                    {value => this.renderWithContextValues(value)}
                </Consumer>
            ) 
        }

        renderWithContextValues(ctx){
            const {jwt, isTestEnvironment, firstName} = ctx;
            return(
                <React.Fragment>
                    <p>JWT: <strong>{jwt}</strong></p>
                    <p>Is Test Environment: <strong>{isTestEnvironment ? 'True' : 'False'}</strong> </p>
                    <p>FirstName: <strong>{firstName}</strong> </p>
                </React.Fragment>
            ) 
        }
}

export default InnerBox;
