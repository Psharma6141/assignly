import React from "react";

const AcceptTask = ({data}) =>{
    console.log(data)
    return (
       <div className=" flex-shrink-0 h-[100%] w-[400px] py-2 bg-purple-400 rounded-xl  ">
                <div className="flex items-center justify-between px-3 py-3 bg-transparent">
                    <h3 className=" text-sm bg-red-500 px-2 rounded-sm">{data.category}</h3>
                    <h4 className="bg-transparent text-sm">{data.date}</h4>
                </div>
                <div className="h-36 overflow-y-auto">
                   <h2 className="bg-transparent text-2xl px-3 font-semibold">{data.title}</h2>
                   <p className="text-sm bg-transparent px-3 mt-2">{data.description}</p>
                </div>
             <div className="flex justify-between px-3 mt-1">
                <button className="bg-green-500 border-2 border-emerald-100 py-1 px-2  rounded-sm text-sm">Mark as Completed</button>
                <button className="bg-red-500 py-1 px-2  rounded-sm text-sm">Mark as Failed</button>
             </div>
      </div>

    )
}
export default AcceptTask