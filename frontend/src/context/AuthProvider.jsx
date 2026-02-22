import React, { createContext, useEffect, useState } from "react";
import api from "../utils/api";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState([])

    // 🔹 Initial load (READ from API)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users');
                if (Array.isArray(response.data)) {
                    setUserData(response.data);
                } else {
                    console.error('API response is not an array:', response.data);
                    setUserData([]);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
                setUserData([]);
            }
        };
        fetchUsers();
    }, [])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider