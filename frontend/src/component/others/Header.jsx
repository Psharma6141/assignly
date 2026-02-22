import React from "react";

const Header = (props) => {

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }

    return (
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#2c2c2e]">
            <div>
                <p className="text-sm text-zinc-500 font-medium">Workspace Dashboard</p>
                <h1 className="text-2xl font-bold text-white mt-0.5">
                    Welcome, {props.data?.name || 'Admin'} 👋
                </h1>
            </div>
            <div className="flex items-center gap-3">
                {props.isAdmin && (
                    <button
                        onClick={props.showCreateUser}
                        className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-lg border border-[#333336]"
                    >
                        Create User
                    </button>
                )}
                <button
                    onClick={logOutUser}
                    className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-lg transition-all"
                >
                   Log Out
                </button>
            </div>
        </div>
    )
}

export default Header;