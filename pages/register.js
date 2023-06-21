import { useRouter } from "next/router";
import { useState } from "react";

const register = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        if (response.status === 200) {
            console.log("Registration successful");
            if (typeof window !== "undefined") {
                router.push("/login");
            }
        } else {
            console.log("Registration failed");
        }
    };

    return (
        <>
            <section className="text-gray-600 body-font flex justify-center items-center">
                <div className="px-20 py-24">
                    <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-fit mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registrieren</h2>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">E-Mail</label>
                            <input onChange={(e) => {
                                setEmail(e.target.value);
                            }} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Passwort</label>
                            <input onChange={(e) => {
                                setPassword(e.target.value);
                            }} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={register} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Registrieren</button>
                        <p className="text-xs text-gray-500 mt-3">Ihre Daten sind mit uns sicher.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default register;
