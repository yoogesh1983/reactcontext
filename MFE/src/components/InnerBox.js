import React, { Component } from 'react';
import ContextDB from '../../store/Context'

class InnerBox extends Component {

  static contextType = ContextDB;
  
        render(){
            console.log(this.context)
            const {jwt, isTestEnvironment} = this.context
          
            return(
                <React.Fragment>
                    <p>JWT: <strong>{jwt}</strong></p>
                    <p>Is Test Environment: <strong>{isTestEnvironment ? 'True' : 'False'}</strong> </p>
                </React.Fragment>
            ) 
        }
}

export default InnerBox;
