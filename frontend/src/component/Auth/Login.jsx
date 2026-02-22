import React, { useState } from "react";

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-[#111111]">
            <div className="card-flat w-full max-w-sm p-8 rounded-xl">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white">Sign In</h1>
                    <p className="text-zinc-500 text-sm mt-1">Enter your credentials to continue</p>
                </div>

                <form onSubmit={submitHandler} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-zinc-400">Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            className="w-full bg-[#1c1c1e] border border-[#2c2c2e] rounded-lg py-2.5 px-4 focus:outline-none focus:border-green-500/50 text-sm placeholder:text-zinc-700"
                            placeholder="email@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-zinc-400">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            className="w-full bg-[#1c1c1e] border border-[#2c2c2e] rounded-lg py-2.5 px-4 focus:outline-none focus:border-green-500/50 text-sm placeholder:text-zinc-700"
                            placeholder="Password"
                        />
                    </div>

                    <button className="btn-primary w-full py-2.5 rounded-lg mt-2 text-sm">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;