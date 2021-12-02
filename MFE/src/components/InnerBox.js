import React, { useContext } from 'react';
import ContextDB from '../../store/Context'

function InnerBox() {

    const {jwt, isTestEnvironment, firstName, setState} = useContext(ContextDB);

    if(jwt != '999999999'){
        setState(prevState => ({
            ...prevState,
            jwt: '999999999'
        }))
    }
    
    return(
        <React.Fragment>
            <p>JWT: <strong>{jwt}</strong></p>
            <p>Is Test Environment: <strong>{isTestEnvironment ? 'True' : 'False'}</strong> </p>
            <p>FirstName: <strong>{firstName}</strong> </p>
        </React.Fragment>
    ) 
}

export default InnerBox;
