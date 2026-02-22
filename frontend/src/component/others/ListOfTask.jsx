import React from "react";

const ListOfTask = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {/* New Tasks */}
      <div className="card-flat rounded-xl p-5 overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest">New</p>
            <h1 className="text-3xl font-bold mt-1">{data?.taskNumbers?.newTask || 0}</h1>
          </div>
          <div className="bg-blue-500/10 p-2 rounded-lg">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
        <p className="text-zinc-500 text-xs mt-3 font-medium">Unassigned Objectives</p>
      </div>

      {/* Active Tasks */}
      <div className="card-flat rounded-xl p-5 overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-black uppercase text-amber-500 tracking-widest">Active</p>
            <h1 className="text-3xl font-bold mt-1">{data?.taskNumbers?.active || 0}</h1>
          </div>
          <div className="bg-amber-500/10 p-2 rounded-lg">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <p className="text-zinc-500 text-xs mt-3 font-medium">In-Progress Work</p>
      </div>

      {/* Completed */}
      <div className="card-flat rounded-xl p-5 overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-black uppercase text-green-500 tracking-widest">Done</p>
            <h1 className="text-3xl font-bold mt-1">{data?.taskNumbers?.completed || 0}</h1>
          </div>
          <div className="bg-green-500/10 p-2 rounded-lg">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <p className="text-zinc-500 text-xs mt-3 font-medium">Verified Results</p>
      </div>

      {/* Failed */}
      <div className="card-flat rounded-xl p-5 overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-black uppercase text-red-500 tracking-widest">Failed</p>
            <h1 className="text-3xl font-bold mt-1">{data?.taskNumbers?.failed || 0}</h1>
          </div>
          <div className="bg-red-500/10 p-2 rounded-lg">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <p className="text-zinc-500 text-xs mt-3 font-medium">Overdue/Failed</p>
      </div>
    </div>
  )
}

export default ListOfTask;