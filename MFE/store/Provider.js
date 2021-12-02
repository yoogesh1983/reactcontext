import React, { useState } from 'react';
import ContextDB from './Context'

function Provider(props) {

    const [state, setState] = useState({
        jwt: '1qaswer43hj5rgf', 
        isTestEnvironment: true,
    });

    
    return(
        <ContextDB.Provider value = {{...state, setState, firstName: 'Yoogesh'}}>
            {props.children}
        </ContextDB.Provider>
    );
}
export default Provider;