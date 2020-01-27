import React, {Component} from 'react';

export default class LifecycleHooks extends React.Component {
    constructor(){
        super();
    }
    componentWillMount(){
        console.log("componentWillMount");

    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    componentDidCatch(){
        console.log("componentDidCatch");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        return(
            <div>LifecycleHooks</div>
        )
    }
}