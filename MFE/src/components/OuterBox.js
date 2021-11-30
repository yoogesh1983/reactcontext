import React, { Component } from 'react';
import InnerBox from './InnerBox'


class  OuterBox extends Component {
    render(){
        return <InnerBox />
    }
}

export default OuterBox;