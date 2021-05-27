import React,{FC} from 'react';


interface Props {
   children?: React.ReactNode 

}


const Hello :FC<Props> = ({children}) => {
    return (
        <div >
            {children}
        </div>
    );
}

export default Hello;
