import React,{useState} from 'react';
import { increment, decrement,add } from "../actions/actions";
import { useSelector,useDispatch, RootStateOrAny } from "react-redux";


const TestingRedux = () => {
    const {counter ,list}= useSelector((state:RootStateOrAny)=>state);
    const dispatch = useDispatch();
    const [input, setInput]= useState<string>("")

    console.log(counter);
    console.log(list);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        dispatch(add(input))
    }

    return (
        <div>
            
            <h1>Counter: {counter}</h1>
            <button onClick={()=>{dispatch(increment(3))}}>+</button>
            <button onClick={()=>{dispatch(decrement(2))}}>-</button>


            {list.map((el:string)=>(<div>{el}</div>))}
            <form >
                <input type="text" onChange={handleChange} />
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    );
}

export default TestingRedux;
