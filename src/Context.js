import { useState } from "react";
import { createContext } from "react";

export const DataContext=createContext({});
export function DataContextProvider({children}){
    const [data,setData]=useState({});
    const [city,setCity]=useState('');
    // const apiKey=process.env.REACT_APP_API;
    return (
    <DataContext.Provider value={{data,setData,city,setCity}}>
        {children}
    </DataContext.Provider>
    );
}