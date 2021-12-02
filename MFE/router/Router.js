import React from 'react';
import Home from '../src/pages/Home'
import Provider from '../store/Provider'

function Router(){
    return(
        <Provider>
            <Home />
        </Provider>
    );
}
export default Router;