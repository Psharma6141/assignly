import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import api from "../../utils/api";

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const deleteEmployee = async (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            try {
                await api.delete(`/users/${id}`);
                const updatedData = userData.filter(emp => emp._id !== id);
                setUserData(updatedData);
            } catch (error) {
                console.error("Error deleting employee:", error);
                alert("Failed to delete employee");
            }
        }
    }

    return (
        <div className="card-flat rounded-xl mt-8 p-6 overflow-hidden">
            <h2 className="text-lg font-bold text-white mb-6">Team Management</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-800">
                            <th className="pb-3 text-[10px] font-bold uppercase text-zinc-500 tracking-widest">Employee</th>
                            <th className="pb-3 text-[10px] font-bold uppercase text-zinc-500 tracking-widest text-center">Active</th>
                            <th className="pb-3 text-[10px] font-bold uppercase text-zinc-500 tracking-widest text-center">New</th>
                            <th className="pb-3 text-[10px] font-bold uppercase text-zinc-500 tracking-widest text-center">Done</th>
                            <th className="pb-3 text-[10px] font-bold uppercase text-zinc-500 tracking-widest text-center">Failed</th>
                            <th className="pb-3 text-[10px] font-bold uppercase text-zinc-500 tracking-widest text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {Array.isArray(userData) && userData.map(function (elem, idx) {
                            return (
                                <tr key={idx} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                                    <td className="py-3.5 font-medium text-zinc-200">{elem.name}</td>
                                    <td className="py-3.5 text-center text-amber-500 font-bold">{elem.taskNumbers.active}</td>
                                    <td className="py-3.5 text-center text-blue-500 font-bold">{elem.taskNumbers.newTask}</td>
                                    <td className="py-3.5 text-center text-green-500 font-bold">{elem.taskNumbers.completed}</td>
                                    <td className="py-3.5 text-center text-red-500 font-bold">{elem.taskNumbers.failed}</td>
                                    <td className="py-3.5 text-right">
                                        <button
                                            onClick={() => deleteEmployee(elem._id)}
                                            className="text-zinc-600 hover:text-red-500 text-xs font-bold uppercase px-2 py-1"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllTask;