import React, { Component } from 'react'

export default class Cat extends Component {
 
    render() {
        return (
            <div>
                {this.props.status} Cat
            </div>
        )
    }
}
