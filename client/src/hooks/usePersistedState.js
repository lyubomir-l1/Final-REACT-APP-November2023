import { useState } from "react"
import { json } from "react-router-dom";

export default function usePersistedState(key, defaultValue){

    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
        if(persistedState) {
            return JSON.parse(persistedState);
        }
        return defaultValue;
    })



    const setPersistedState = (value) => { 
        
        setState(value);

        let serializedValue;

        if(typeof value === 'function'){
            serializedValue = JSON.stringify(value(state))
        }else {
            serializedValue = JSON.stringify(value)

        }

        localStorage.setItem(key, serializedValue)
    }

    return [
        state,
        setPersistedState,
    ]
}