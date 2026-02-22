import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import api from "../../utils/api";

const CreateUser = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/users', { name, email, password });

            if (response.status === 201) {
                setUserData([...userData, response.data]);
                setName('');
                setEmail('');
                setPassword('');
                alert("Employee Account Created Successfully");
            }
        } catch (error) {
            console.error("Error creating user:", error);
            alert(error.response?.data?.message || "Failed to create user");
        }
    };

    return (
        <div className="card-flat rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-5 text-blue-500">Add New Employee</h2>

            <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase text-zinc-500">Full Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" placeholder="John Doe"
                        className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase text-zinc-500">Login Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder="email@company.com"
                        className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase text-zinc-500">Initial Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" placeholder="••••••••"
                        className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm"
                        required
                    />
                </div>

                <button className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase py-2.5 rounded-lg transition-all tracking-widest">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
