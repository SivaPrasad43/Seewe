/* eslint-disable prettier/prettier */
import React,{ createContext, useState, useContext, useEffect }  from 'react'

export const LoginContext = createContext()

const LoginProvider = ({children}) => {

    useEffect(()=>{
        console.log("Hello")
        console.log(LoginContext._currentValue.status)
    })
    const [isLoggedIn,setIsLoggedIn] = useState(true)
  return (
    <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </LoginContext.Provider>
  )
}
export default LoginProvider;