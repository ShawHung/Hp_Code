import React, { Component } from 'react'

export default class Door extends Component {
    render() {
        return (
            <button onClick ={this.props.onClick}>     
                {this.props.status} Door
            </button>
        )
    }
}


