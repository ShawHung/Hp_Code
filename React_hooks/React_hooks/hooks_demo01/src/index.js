import React, { useState } from "react";
import ReactDom from "react-dom";

function Example() {
  console.log(useState())
  const [count, setCount]   = useState(0);

  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 2)}>Click me</button>
    </div>
  );
}

ReactDom.render(<Example />, document.getElementById("root"));
