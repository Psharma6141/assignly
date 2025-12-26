import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/login";
import Employee from "./component/Dashboard/Employee";
import Admin from "./component/Dashboard/Admin";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";
import { AuthContext } from "./context/AuthProvider";


function App() {
 // localStorage.clear()


    useEffect (() =>{
     setLocalStorage()
    getLocalStorage()
    },[])
        
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setUserData]  = useContext(AuthContext)
  
  //console.log(userData)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      console.log("User logged in hai")
    }
  },[])

  const handleLogin = (email, password) => {
    if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
        const employe = userData.find((e) => email == e.email && password == e.password)
      if (employe) {
        setUser('employe')
        setloggedInUserData(employe)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }
     else
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {user ? ' ' : <Login handleLogin={handleLogin} />}
      {user == 'admin' ? <Admin changeUser={setUser} /> : (user == 'employe' ? <Employee changeUser={setUser}  data={loggedInUserData}/> : ' ')}
      {/* <Employee/> */}
      {/* <Admin/> */}
    </>
  )
}
export default App