import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import Employee from "./component/Dashboard/Employee";
import Admin from "./component/Dashboard/Admin";
import { AuthContext } from "./context/AuthProvider";
import api from "./utils/api";


function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserLoginData, setLoggedInUserLoginData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      try {
        const parsedData = JSON.parse(loggedInUser)
        if (parsedData && parsedData.role) {
          setUser(parsedData.role)
          setLoggedInUserLoginData(parsedData.data)
        }
      } catch (error) {
        console.error("Error parsing loggedInUser from localStorage:", error)
        localStorage.removeItem('loggedInUser')
      }
    }
  }, [])

  const handleLogin = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });

      if (response.data.success) {
        const { role, data } = response.data;
        setUser(role);
        setLoggedInUserLoginData(data);
        localStorage.setItem('loggedInUser', JSON.stringify({ role, data }));
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.response?.data?.message || "Login failed. Is the server running?");
    }
  }

  // Derive the latest data for the logged in employee from userData to ensure reactivity
  const currentEmployeeData = (user === 'employee' && Array.isArray(userData))
    ? userData.find(e => e.email === loggedInUserLoginData?.email)
    : null;

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == 'admin' ? <Admin changeUser={setUser} /> : (user == 'employee' ? <Employee changeUser={setUser} data={currentEmployeeData} /> : ' ')}
    </>
  )
}
export default App