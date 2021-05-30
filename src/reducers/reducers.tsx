

const counter = (state=0, action:{type:String,diff:number}) =>{
    switch (action.type){
         case "INCREMENT":{return state+action.diff}
         case "DECREMENT":{return state-action.diff}
         default: {return state}
    }
}

const list = (state =[] , action:{type:String,node: String})=>{
    
}

export {counter};