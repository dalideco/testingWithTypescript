import { NodeBuilderFlags } from "typescript"


const increment = (nbr:number)=>{
    return {
        type : "INCREMENT",
        diff: nbr
    }
}

const decrement = (nbr:number)=>{
    return {
        type: "DECREMENT",
        diff: nbr
    }
}

export {increment,decrement}