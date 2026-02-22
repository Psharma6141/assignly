import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import api from "../../utils/api";

function CreateTask() {
    const [userData, setUserData] = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [AsignTo, setAsignTo] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/tasks', {
                title,
                description,
                date,
                category,
                email: AsignTo
            });

            if (response.status === 201) {
                const updatedUsersResponse = await api.get('/users');
                setUserData(updatedUsersResponse.data);

                setAsignTo('');
                setTitle('');
                setDate('');
                setCategory('');
                setDescription('');
                alert("Task Created Successfully");
            }
        } catch (error) {
            console.error("Error creating task:", error);
            alert(error.response?.data?.message || "Failed to create task");
        }
    };

    return (
        <div className="card-flat rounded-xl p-6 mt-6">
            <h2 className="text-lg font-bold text-white mb-5 text-green-500">Create New Task</h2>

            <form onSubmit={submitHandler} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Task Title</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text" placeholder="Objective title"
                            className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500 text-sm"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-[10px] font-bold uppercase text-zinc-500">Deadline</label>
                            <input
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500 text-sm"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[10px] font-bold uppercase text-zinc-500">Category</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text" placeholder="Dev, Design, etc."
                                className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500 text-sm"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Assign To (Email)</label>
                        <input
                            value={AsignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            type="email" placeholder="employee@company.com"
                            className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500 text-sm"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 h-full mb-4">
                        <label className="text-[10px] font-bold uppercase text-zinc-500">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500 text-sm resize-none h-full min-h-[120px]"
                            placeholder="Optional task details..."
                        ></textarea>
                    </div>

                    <button className="bg-green-600 hover:bg-green-500 text-black font-black text-xs uppercase py-3 rounded-lg transition-all tracking-widest">
                        Dispatch Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask;