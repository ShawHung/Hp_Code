import React, { Component } from "react";
import ReactDom from "react-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

//BoilinfVerdict组件
function BoilingVerdict(props) {
  if (props.value >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

//转换函数
function toCelsius(fahrenheit){
    return (fahrenheit - 32)*5/9;
}

function toFahrenheit(celsius){
    return (celsius - 32)*5/9;
}

//检测输入
function tryConvert(temperature,convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output*1000) / 1000;
    return rounded. toString();
}

//父组件
class Calculator extends Component {
  constructor(props){
    super(props);
    this.handleCelsiusChange  = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
        temperature:'',
        sacle:'f'
    }
  }

  handleCelsiusChange(temperature){
      this.setState({temperature,scale:'c'});
  }

  handleFahrenheitChange(temperature){
      this.setState({temperature,scale:'f'});
  }

  render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature,toCelsius):temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit):temperature;
    return (
      <div>
        <Temperature scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <Temperature scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict value={parseFloat(celsius)}/>
      </div>
    );
  }
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value); 
  }

  render() {
    const temp = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temp} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
