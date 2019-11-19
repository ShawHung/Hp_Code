import React, { Component } from 'react'
import Cat from '../Cat'
import Door from '../Door'

export default class House extends Component {
    constructor(props){
        super(props);
        this.state = {
            doorStatus:'closed'
        }
    }

    toogleDoorStatus(){
        this.state.doorStatus === 'closed'?
            this.setState({
                doorStatus:'open'
            })
       :
            this.setState({
                doorStatus:'closed'
            })
        
    }
    catFun(){
        if(this.state.doorStatus === 'open'){
            return 'awaking';
        }else{
            return 'sleeping';
        }
    };

    render() {
        return (
            <div>
               <Door status = {this.state.doorStatus} onClick={this.toogleDoorStatus.bind(this)}/>
                <Cat status = {this.catFun()}/>
            </div>
        )
    }
}

