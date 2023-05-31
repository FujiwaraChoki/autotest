import Link from "next/link";

import UserContext from "../contexts/UserContext";

import { useContext } from "react";

const Navbar = () => {
    const { user } = useContext(UserContext);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <Link href="/" className="ml-3 text-xl">AutoTest</Link>
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    {user && <Link href="" className="mr-5 hover:text-blue hover:font-bold transition duration-200">Dashboard</Link>}

                    <Link href="/about" className="mr-5 hover:text-blue-500 transition ease-in duration-200">About Us</Link>
                    <Link href="/about" className="mr-5 hover:text-blue-500 transition ease-in duration-200">Reviews</Link>
                </nav>
                {
                    !user ? (
                        <Link href="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    ) : (
                        <Link href="/logout" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    )
                }
            </div>
        </header>
    );
}

export default Navbar;