import React from "react";

function SearchBar() {
    return (
        <form className="w-full md:w-8/12 p-5 md:p-0  mx-auto"> {/* Aumentando a largura da barra de pesquisa */}
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                    <svg className="w-4 h-4 ml-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input 
                    type="search" 
                    id="default-search" 
                    className="block w-full p-4 ps-12 text-sm text-gray-500 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Buscar Serviços..." 
                    required 
                />
                <button 
                    type="submit" 
                    className="text-white absolute end-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
