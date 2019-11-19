import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class App extends Component {
    render() {
        return (
            <div>
                <FormName />
                <Select />
                <MutiForm />
            </div>
        )
    }
}


class FormName extends Component{
    constructor(props){
        super(props)
        this.state={value:'玉垒浮云变古今的下一句'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState(
            {
                value:e.target.value
            }
        )
    }

    handleSubmit(e){
        console.log('提交的文章：'+this.state.value)
        e.preventDefault()
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    姓名：
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='提交'/>
            </form>
        )
    }
}


class Select extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState(
            {
                value:e.target.value
            }
        )
    }

    handleSubmit(e){
        console.log('喜欢的游戏是:'+this.state.value)
        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='overwatch'>overwatch</option>
                    <option value='overwatch'>overwatch</option>
                    <option value='overwatch'>overwatch</option>   
                </select>

                <input type='submit' value='submit'/>
            </form>
       
        )
    }
}


class MutiForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing:true,
            guestNumber:2
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = target.value === 'checked' ? target.checked:target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })

        console.log(value);
    }

    render(){
        return(
            <form>
                <label>
                    参与:
                    <input 
                        name = 'isGoing'
                        type = 'checked'
                        onChange = {this.handleChange}
                    />
                </label>
                <br />
                <label>
                    来宾人数:
                    <input 
                        name = 'guestNumber'
                        type = 'number'
                        onChange = {this.handleChange}
                    />
                </label>
            </form>  
        )
    }
}
ReactDom.render(<App />,document.getElementById('root'))