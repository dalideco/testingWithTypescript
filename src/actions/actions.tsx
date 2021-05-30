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

const add = (node:string)=>{
    return {
        type: "ADD",
        node
    }
}

export {increment,decrement,add}