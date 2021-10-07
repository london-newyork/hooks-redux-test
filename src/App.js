import React, { useState } from 'react'

const App = () => {
const initialState = 0
const [count,setCount] = useState(initialState)
const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)

const increment2 = () => setCount(previousCount => previousCount +1)
const decrement2 = () => setCount(previousCount => previousCount -1)
const reset = () => setCount(initialState)
const double = () => setCount(count * 2)
const divideByThree = () => setCount(previousCount => {
  if(previousCount % 3 === 0){
    return previousCount / 3
  }else{
    return previousCount
  }})

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divideByThree}>3の倍数の時だけ３で割る</button>
      </div>
    </>
  );
}

export default App





