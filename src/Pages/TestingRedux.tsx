import React,{useState} from 'react';
import { increment, decrement } from "../actions/actions";
import { useSelector,useDispatch } from "react-redux";


const TestingRedux = () => {
    const counter= useSelector(state=>state)
    const dispatch = useDispatch();



    const handleChange = ()=>{
        
    }

    return (
        <div>

            <h1>Counter: {counter}</h1>


    
            <button onClick={()=>{dispatch(increment(3))}}>+</button>
            <button onClick={()=>{dispatch(decrement(2))}}>-</button>

        </div>
    );
}

export default TestingRedux;
