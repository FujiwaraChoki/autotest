import UserContext from "../contexts/UserContext";
import Notification from "../components/Notification";

import { SearchIcon, XIcon } from '@heroicons/react/solid';

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [search, setSearch] = useState('');
    const [notification, setNotification] = useState(null);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const addTest = async (title, subject, objectives, difficultyLevel) => {
        const questions = fetch('/api/genTest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                subject,
                objectives,
                difficultyLevel,
                email: user.email
            })
        }).then(res => res.json());

        setTests([...tests, {
            id: tests.length + 1,
            title: title,
            description: objectives,
            questions: questions
        }]);
    }

    const CreateTestModal = () => {
        const [title, setTitle] = useState('');
        const [subject, setSubject] = useState('');
        const [description, setDescription] = useState('');
        const [difficultyLevel, setDifficultyLevel] = useState('Einfach');
        const [showDiff, setShowDiff] = useState(false);

        return (
            <div
                tabIndex={- 1}
                aria-hidden="true"
                className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0"
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white border-7 rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="authentication-modal"
                            onClick={() => setOpen(false)}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Neuen Test erstellen
                            </h3>
                            <form className="space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="titel"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Titel
                                    </label>
                                    <input
                                        type="text"
                                        id="titel"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Physik 11.09.2023"
                                        required=""
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Beschreibung
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required=""
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="thema"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Thema
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required=""
                                        id="thema"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="dropdownDefaultButton"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Schwierigkeit
                                    </label>
                                    <button
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="dropdown"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="button"
                                        onClick={(e) => setShowDiff(!showDiff)}
                                    >
                                        {difficultyLevel}
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {
                                        showDiff && (
                                            <div
                                                id="dropdown"
                                                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul
                                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownDefaultButton"
                                                >
                                                    <li>
                                                        <button
                                                            onClick={(e) => setDifficultyLevel('Einfach')}
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Einfach
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={(e) => setDifficultyLevel('Mittel')}
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Mittel
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={(e) => setDifficultyLevel('Schwierig')}
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            Schwierig
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpen(false);

                                        addTest(title, subject, description, difficultyLevel);

                                        setNotification({
                                            title: 'Test wurde erstellt.',
                                            message: 'Der Test wurde erfolgreich erstellt.',
                                            type: 'success'
                                        });
                                    }}
                                >
                                    Test hinzufügen
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    const [tests, setTests] = useState([]);

    useEffect(() => {
        if (!user?.email) return router.push('/login');

        const userTests = fetch('/api/getTests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email
            })
        }).then(res => res.json());

        setTests(userTests);
    }, []);

    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }
    });

    useEffect(() => {
        setTests(tests.filter(test => test.title.toLowerCase().includes(search.toLowerCase())));

        if (search === '') {
            setTests(tests);
        };
    }, [search]);

    return (
        <div className="container p-20">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Dashboard</h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Hier findest du alle Tests die du erstellt hast.</p>
            <br />
            <div className="flex justify-start space-x-2 pb-8">
                <div>
                    <button onClick={() => setOpen(!open)} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Test erstellen</button>
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5 text-white" />
                    </span>
                    <input
                        type="text"
                        name="search"
                        className="pl-10 pr-8 py-2 text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        placeholder="Suchen..."
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        value={search}
                    />
                    {
                        search !== '' && (
                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                <XIcon className="h-5 w-5 text-white" onClick={(e) => setSearch('')} />
                            </span>
                        )
                    }
                </div>
            </div>
            {
                open && <CreateTestModal />
            }
            <div className="flex flex-wrap -m-4 ">
                {
                    tests?.map(test => (
                        <div className="px-4 lg:w-1/3 mb-5" key={test.id}>
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TEST</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{test.title}</h1>
                                <p className="leading-relaxed mb-3">{test.description}</p>

                                <div className="flex flex-col space-y-2 mt-5">
                                    <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={(e) => setNotification({
                                        title: 'Test wurde gelöscht.',
                                        message: 'Der Test wurde erfolgreich gelöscht.',
                                        type: 'success'
                                    })}>Löschen</button>
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Bearbeiten</button>
                                    <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={(e) => setNotification({
                                        title: 'Test wird geöffnet.',
                                        message: 'Der Test wird in Kürze geöffnet.',
                                        type: 'info'
                                    })}>Öffnen</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                notification && (
                    <Notification
                        title={notification.title}
                        message={notification.message}
                        type={notification.type}
                    />
                )
            }
        </div >
    )
}

export default Dashboard;
