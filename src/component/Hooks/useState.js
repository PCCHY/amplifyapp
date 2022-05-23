import React from 'react';
import './style.css';

const UseState = () => {
    const initialData = 12;
  const [myNum, setMyNum] = React.useState(initialData);
  console.log(myNum);
    return (
    <div>
        <p>{ myNum }</p>
        <button onClick={ ()=> setMyNum(myNum > 0 ? myNum - 1 : 0)}>Left Button</button>
        <button onClick={()=>setMyNum(myNum < 50 ? myNum + 1 :50)}>Right Button</button>
    </div>
  )
}

export default UseState