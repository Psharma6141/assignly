import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

export const AuthContext = createContext()

const AuthProvider=({children})=>{

    const [userData, setUserData] = useState(null)

    useEffect(() => {
    const {employee} = getLocalStorage()
    setUserData(employee)
   }, [])


    return(
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
             {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider