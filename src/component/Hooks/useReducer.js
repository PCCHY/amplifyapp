import React, {useState, useEffect, useReducer} from 'react';
import './style.css';


const reducer = (state, action) =>{
    if(state<50 && action.type === "INCR"){
        state = state +  1;
    }
    return state;
};
const UseReducer = () => {
    const initialData = 12;
    // const [myNum, setMyNum] = useState(initialData);
    const [state, dispatch] = useReducer(reducer, initialData);
    
      return (
      <div>
          <p>{ state }</p>
          <button onClick={ ()=> dispatch({type:"INCR"})}>Left Button</button>
      </div>
    )
}

export default UseReducer;