import React,{useState,PureComponent,useMemo,useCallback,memo} from 'react';
import ReactDOM from 'react-dom';


function Memo(){
    let num = 0;
    console.log("Memo render!");

    return(
        <button onClick={this.num++}>+</button>
    )
}

Memo =memo(Memo);

class Purecom extends PureComponent{
    
    constructor(){}
}


