import React from 'react';

const ContextDB = React.createContext({
    jwt: '1qaswer43hj5rgf', 
    isTestEnvironment: true
});

console.log("Default Context is", ContextDB)


export default ContextDB;