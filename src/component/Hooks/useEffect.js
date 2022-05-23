import React, {useState, useEffect} from 'react';
import './style.css';

const UseEffect = () => {
    const initialData = 12;
    const [myNum, setMyNum] = useState(initialData);
    useEffect(()=>{
        console.log("Hii Calling Use Effect Hook only for first render");
        // document.title = `Chats(${myNum})`;
    },[]);
    useEffect(()=>{
        console.log("Hii this use effect hook always called on render");
        document.title = `Chats(${myNum})`;
    });
    console.log(myNum);
      return (
      <div>
          <p>{ myNum }</p>
          <button onClick={ ()=> setMyNum( myNum + 1)}>Left Button</button>
      </div>
    )
}

export default UseEffect