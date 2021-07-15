import { createContext, useState, useEffect, useContext } from 'react'
import {user} from '../database'
const DataContext = createContext()
const DataContextProvider = ({children}) =>{
    const [data, setData] = useState(user)
    return(
        <DataContext.Provider
            value = {{
                data,
                setData
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider

export function useData(){
    const context = useContext(DataContext)
    const {data,setData} = context
    return {data,setData}
}