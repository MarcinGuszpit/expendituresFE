import { useState,useEffect } from "react";
export const useCounter = () => {
    const [state,setState] = useState(0);
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setState((state)=>state+1)
        }, 1000);
        return (() => clearInterval(intervalId));
    },[]);

    return state;
};