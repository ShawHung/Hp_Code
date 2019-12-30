import React, { memo, useCallback, useMemo, useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./index.css";

function Child1(props) {
  // console.log(props);
  const { num, handleClick } = props;
  return (
    <div
      onClick={() => {
        handleClick(num + 1);
      }}
    >
      child
    </div>
  );
}

function Child2(props) {
  // console.log(props);
  const { text, handleClick } = props;
  return (
    <div>
      <Grandson text={text} handleClick={handleClick} />
      child
    </div>
  );
}

//演示父子组件传递
function Grandson(props) {
  // console.log(props);
  const { text, handleClick } = props;
  return (
    <div
      onClick={() => {
        handleClick(text + 1);
      }}
    >
      grandson
    </div>
  );
}

//useEffect使用（同时演示useState每次渲染都是独立的闭包）
function Counter(props) {
  const { number, handleClick } = props;
  function alertNumber() {
    setTimeout(() => {
      alert(number);
    }, 3000);
  }
  useEffect(() => {
    document.title = `You clicked ${number} times`;
  });
  return (
    <div>
      <h2>useEffect使用（同时演示useState每次渲染都是独立的闭包）</h2>
      <p>{number}</p>
      <button
        onClick={() => {
          handleClick(number + 1);
        }}
      >
        +
      </button>
      <button onClick={alertNumber}>alert</button>
    </div>
  );
}

//演示函数式更新
function FuncLoad() {
  const [number, setNumber] = useState(0);
  function lazy() {
    setTimeout(() => {
      // setNumber(number+1);
      setNumber(number => number + 1);
    }, 3000);
  }

  return (
    <div>
      <h2>演示函数式更新</h2>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={lazy}>+</button>
    </div>
  );
}
//演示惰性初始化state
function LazyInit(props) {
  function getInitState() {
    return { number: props.number };
  }
  let [counter, setCounter] = useState(getInitState());
  return (
    <div>
      <h2>演示惰性初始化state</h2>
      <p>{counter.number}</p>
      <button onClick={() => setCounter({ number: counter.number + 1 })}>
        +
      </button>
      <button onClick={() => setCounter(counter)}>setCounter</button>
    </div>
  );
}
//演示性能比较（通过Object.is比较）
function ObjectIs() {
  let [counter, setCounter] = useState({ name: "计数器", number: 0 });
  console.log('render ObjectIs');
  return (
    <div>
      <h2>演示性能比较</h2>
      <p>{counter.number}</p>
      <button
        onClick={() => {
          setCounter({ ...counter, number: counter.number + 1 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter);
          //在这里新旧state一致所以不重新渲染
          console.log(counter);
        }}
      >
        setCounter
      </button>
    </div>
  );
}
//性能优化（减少渲染次数），这里父组件state值更新还是会重新渲染
function SubCounter({ onClick, data }) {
  console.log("render SubCounter");
  return <button onClick={onClick}>{data.number}</button>;
}
SubCounter = memo(SubCounter);

function Counter06() {
  const [name, setName] = useState("Shaw");
  const [number, setNumber] = useState(0);
  const data = { number };
  const addClick = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h2>演示减少渲染</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <SubCounter data={data} onClick={addClick} />
    </div>
  );
}

//演示更深优化渲染
//复用SubCounter函数
let oldData,oldAddClick;
function Counter07(){
  console.log("Counter07 render");
  const [name,setName] = useState('Shaw');
  const [number,setNumber] = useState(0);

  //传入依赖项数组，若依赖项数组改变时才会重新计算memoized值
  const data = useMemo(()=>({number}),[number]);
  console.log('data===oldData',data===oldData);
  oldData=data;

  //接受依赖项数组，只有某个依赖项改变时才会重新渲染
  const addClick = useCallback(()=>{
    setNumber(number+1);
  },[number]);
  console.log('addClick===oldAddClick',addClick===oldAddClick);
  oldAddClick=addClick;
  return(
    <div>
      <h2>演示减少渲染优化版</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <SubCounter data={data} onClick={addClick} />
    </div>
  )
}

//
function Parent() {
  let [num, setNum] = useState(0);
  let [text, setText] = useState(1);
  let [number, setNumber] = useState(2);
  return (
    <div>
      <Child1 num={num} handleClick={setNum} />
      <Child2 text={text} handleClick={setText} />
      <Counter number={number} handleClick={setNumber} />
      <FuncLoad></FuncLoad>
      <LazyInit number={number}></LazyInit>
      <ObjectIs></ObjectIs>
      <Counter06></Counter06>
      <Counter07></Counter07>
    </div>
  );
}

ReactDom.render(<Parent />, document.getElementById("root"));
