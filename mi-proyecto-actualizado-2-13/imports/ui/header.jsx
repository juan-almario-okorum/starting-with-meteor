import React from "react"

export const Header = () => {
    return (
        <header className="bg-indigo-600">
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="text-white text-xl font-semibold">Meteor Wallet</span>
                        </a>
                    </div>
                </div>  
            </nav>
        </header>
    )
}