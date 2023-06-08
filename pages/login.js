import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import UserContext from '../contexts/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [clear, setClear] = useState(false);

    const { setUser } = useContext(UserContext);

    const router = useRouter();

    const handleLogin = () => {
        if (email === 'test@admin.com' && password === 'admin') {
            console.log('Login successful');
            setClear(true)
            setLoggedIn(true);
            setUser({
                email: 'email',
                password: 'password'
            });

            // Redirect to dashboard after 2 seconds
            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } else {
            console.log('Login failed');
            setClear(true);
            setLoggedIn(false);

            setTimeout(() => {
                setClear(false);
            }, 2000);
        }
    };
    /**
        const login = useCallback(async () => {
            try {
                await signIn("credentials", {
                    email,
                    password,
                    callbackUrl: "/profiles",
                });
            } catch (error) {
                console.log(error);
            }
        }, [email, password]);
    
        const register = useCallback(async () => {
            try {
                await axios.post("/api/register", {
                    email,
                    name,
                    password,
                });
    
                login();
    
            } catch (error) {
                console.log(error);
            }
        }, [email, name, password, login]); */

    const Status = () => (
        <div className="text-center">
            {
                clear && (
                    loggedIn ? (
                        <h1 className="text-2xl text-green-500" > Sie werden bald weitergeleitet.</h1>
                    ) : (
                        <h1 className="text-2xl text-red-500">Falsche Anmeldeinformationen.</h1>
                    )
                )
            }

        </div >
    );

    return (
        <section className="text-gray-600 body-font flex justify-center items-center">
            <div className="px-20 py-24">
                <div>
                    <Status />
                </div>
                <br />
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-fit mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Anmeldung</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">E-Mail</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Passwort</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleLogin}>Anmelden</button>
                    <p className="text-xs text-gray-500 mt-3">Ihre Daten sind mit uns sicher.</p>
                </div>
            </div>
        </section>
    )
}

export default Login;
