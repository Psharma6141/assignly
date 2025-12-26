import React, { useContext } from "react";
import AuthProvider, { AuthContext } from "../../context/AuthProvider";
const AllTask=({data})=>{
    const [userData, setUserData]=useContext(AuthContext)
    return(
        <div className="bg-zinc-800 h-44 mt-3 px-3 py-2.5 rounded-sm">
            <div className="bg-red-400 px-3 py-1 h-7 mb-1.5 flex justify-between rounded-sm">                <h2 className="w-1/5 text-sm">Employee Name</h2>
                <h2 className="w-1/5 text-sm">Active Task</h2>
                <h2 className="w-1/5 text-sm">New Task</h2>
                <h2 className="w-1/5 text-sm">Completed</h2>
                <h2 className="w-1/5 text-sm">Failed</h2>
            </div>

            <div className="h-[78%]  overflow-auto"> 
            {userData.map(function(elem, idx){
                return <div key={idx} className="border-2 border-emerald-400  px-3 py-0.5 h-7 mb-1 flex justify-between rounded-sm">
                <h2 className="w-1/5 text-sm">{elem.name}</h2>
                <h2 className="w-1/5 text-yellow-400 text-sm">{elem.taskNumbers.active}</h2>
                <h2 className="w-1/5 text-blue-500 text-sm">{elem.taskNumbers.newTask}</h2>
                <h2 className="w-1/5 text-white text-sm">{elem.taskNumbers.completed}</h2>
                <h2 className="w-1/5 text-red-500 text-sm">{elem.taskNumbers.failed}</h2>
            </div>
                
            })}
            </div>
            

        </div>
    )
}
export default AllTask