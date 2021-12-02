import React from 'react';

const ContextDB = React.createContext({
    jwt: '', 
    isTestEnvironment: false
});

console.log("Default Context is", ContextDB)


export default ContextDB;