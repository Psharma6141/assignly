import React, { useState } from "react";
const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
         setEmail("")
         setPassword("")
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2  border-emerald-600 rounded-xl px-3 py-20">
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className="flex flex-col items-center justify-center" >

                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required type="email" className="text-gray-100 outline-none border-2 bg-transparent border-emerald-400 rounded-full py-2 px-4 mx-2 my-1 mt-3" placeholder="@email"></input>

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required type="password" className="text-gray-50 outline-none  border-2 bg-transparent border-emerald-400 rounded-full py-2 px-4 mx-2 my-1 mt-3" placeholder="password"></input>

                    <button className="text-white outline-none bg-emerald-400 rounded-full px-20 py-1 mt-7">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;