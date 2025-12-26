import React from "react";
const Header = (props)=>{
   
          
const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  //console.log(props)
    //window.location.reload()
}

    return (
        <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">Hello <br/><span className="text-3xl font-semibold">sandip👋</span> </h1>
        <button onClick={logOutUser} className="bg-red-500 rounded-sm px-2">Log out</button>
        </div>
    )
}
export default Header