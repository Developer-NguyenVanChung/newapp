import React from "react";
import { useState } from "react";
import '../../App.css'

function Counter(){
    const [counter,setCounter] = useState(0)
    const handelCounter = ()=>{
        setCounter(counter+1)
    }

    return(
        <div className='appCounter'>
            <h1>{counter}</h1>
            <button
                type='button'
                onClick={handelCounter}
            >Change Number</button>
        </div>
    )
}

export default Counter