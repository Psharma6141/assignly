import React from "react";
const CompletedTask = ({data})=>{
    return(
        <div className=" flex-shrink-0 h-[100%] w-[400px] py-2 bg-purple-400 rounded-xl overflow-y-auto ">
                <div className="flex items-center justify-between px-3 py-3 bg-transparent">
                    <h3 className=" text-sm bg-red-500 px-2 rounded-sm">{data.category}</h3>
                    <h4 className="bg-transparent text-sm">{data.date}</h4>
                </div>
             <div className="h-36 overflow-y-auto">
                   <h2 className="bg-transparent text-2xl px-3 font-semibold">{data.title}</h2>
                   <p className="text-sm bg-transparent px-3 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum laboriosam tenetur inventore illum, omnis, eum deserunt molestiae ipsa commodi nemo magni nihil esse doloremque, dolores eius repellat saepe. Similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, delectus. Nesciunt facere esse quas iste veritatis id quae quia tempora, eligendi, reprehenderit illo possimus suscipit soluta, sed eius cumque qui.</p>
                </div>
             <div className=" flex justify-center px-3 mt-1"> 
                <button className="w-36 border-2 border-emerald-100 rounded-sm bg-green-500 text-sm py-1 px-2">Complete</button>
             </div>
            </div>
    )
}
export default CompletedTask