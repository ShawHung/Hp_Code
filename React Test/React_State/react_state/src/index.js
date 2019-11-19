import React from 'react'
import ReactDom from 'react-dom'
import House from './components/House'
import Cat from './components/Cat'
import Door from './components/Door'



const ele = <House>
     <Cat />
     <Door />
</House>
ReactDom.render(ele,document.getElementById('root'))