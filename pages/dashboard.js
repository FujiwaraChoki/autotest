import Link from "next/link";

import UserContext from "../contexts/UserContext";
import Notification from "../components/Notification";

import { SearchIcon, XIcon } from '@heroicons/react/solid';

import { useContext, useEffect, useState } from "react";

const Dashboard = () => {
    const { user } = useContext(UserContext);
    const [search, setSearch] = useState('');
    const [notification, setNotification] = useState(null);
    const [open, setOpen] = useState(false);

    const CreateTestModal = () => {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');

        return (
            <div div
                id="authentication-modal"
                tabIndex={- 1}
                aria-hidden="true"
                className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0"
            >
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
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
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Titel
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
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
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpen(false);

                                        setTests([...tests, {
                                            id: tests.length + 1,
                                            title: title,
                                            description: description,
                                            questions: []
                                        }]);

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

    const [tests, setTests] = useState([
        {
            id: 1,
            title: 'Physik 05.06.2023',
            description: 'Test über die Newton\'schen Gesetze, vorbereitung auf die Prüfung vom 05.06.2023',
            questions: [
                {
                    id: 1,
                    question: 'Was besagt das erste Newton\'sche Gesetz?',
                    answers: 'Das erste Newton\'sche Gesetz besagt, dass ein Körper in Ruhe verharrt oder sich mit konstanter Geschwindigkeit in einer geraden Linie bewegt, solange keine äußeren Kräfte auf ihn wirken.'
                },
                {
                    id: 2,
                    question: 'Was besagt das zweite Newton\'sche Gesetz?',
                    answers: 'Das zweite Newton\'sche Gesetz besagt, dass die Beschleunigung eines Körpers direkt proportional zur resultierenden Kraft ist und umgekehrt proportional zu seiner Masse.'
                }
            ]
        },
        {
            id: 2,
            title: 'Chemie 15.07.2023',
            description: 'Test über das Periodensystem der Elemente, vorbereitung auf die Prüfung vom 15.07.2023',
            questions: [
                {
                    id: 1,
                    question: 'Wie ist das Periodensystem der Elemente aufgebaut?',
                    answers: 'Das Periodensystem der Elemente ist nach steigender Ordnungszahl der Elemente geordnet und in Perioden und Gruppen unterteilt.'
                },
                {
                    id: 2,
                    question: 'Was ist die Bedeutung der Gruppen im Periodensystem?',
                    answers: 'Die Gruppen im Periodensystem geben Aufschluss über die chemischen Eigenschaften der Elemente.'
                }
            ]
        },
        {
            id: 3,
            title: 'Geschichte 25.09.2023',
            description: 'Test über den Zweiten Weltkrieg, vorbereitung auf die Prüfung vom 25.09.2023',
            questions: [
                {
                    id: 1,
                    question: 'Wann begann der Zweite Weltkrieg?',
                    answers: 'Der Zweite Weltkrieg begann am 1. September 1939 mit dem deutschen Überfall auf Polen.'
                },
                {
                    id: 2,
                    question: 'Welche Länder waren an dem Zweiten Weltkrieg beteiligt?',
                    answers: 'Die Hauptkriegsparteien waren Deutschland, Italien, Japan auf der einen Seite und die Alliierten (u.a. Großbritannien, USA, Sowjetunion) auf der anderen Seite.'
                }
            ]
        },
        {
            id: 4,
            title: 'Englisch 10.11.2023',
            description: 'Test über Grammatik und Vokabeln, vorbereitung auf die Prüfung vom 10.11.2023',
            questions: [
                {
                    id: 1,
                    question: 'Was ist die richtige Verwendung von "there", "their" und "they\'re"?',
                    answers: ' "There" wird verwendet, um einen Ort anzugeben. "Their" wird verwendet, um den Besitz von mehreren Personen auszudrücken. "They\'re" ist eine Kontraktion von "they are".'
                },
                {
                    id: 2,
                    question: 'Was sind unregelmäßige Verben?',
                    answers: 'Unregelmäßige Verben sind Verben, deren Konjugation im Simple Past und Past Participle unregelmäßig ist und nicht nach den üblichen Regeln gebildet wird.'
                }
            ]
        },
        {
            id: 5,
            title: 'Geographie 20.12.2023',
            description: 'Test über die Kontinente und Ozeane, vorbereitung auf die Prüfung vom 20.12.2023',
            questions: [
                {
                    id: 1,
                    question: 'Wie viele Kontinente gibt es?',
                    answers: 'Es gibt insgesamt sieben Kontinente: Afrika, Asien, Europa, Nordamerika, Südamerika, Australien und Antarktis.'
                },
                {
                    id: 2,
                    question: 'Welcher ist der größte Ozean?',
                    answers: 'Der Pazifische Ozean ist der größte Ozean der Erde.'
                }
            ]
        }
    ]);

    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }
    });

    useEffect(() => {
        setTests(tests.filter(test => test.title.toLowerCase().includes(search.toLowerCase())));

        if (search === '') {
            setTests([
                {
                    id: 1,
                    title: 'Physik 05.06.2023',
                    description: 'Test über die Newton\'schen Gesetze, vorbereitung auf die Prüfung vom 05.06.2023',
                    questions: [
                        {
                            id: 1,
                            question: 'Was besagt das erste Newton\'sche Gesetz?',
                            answers: 'Das erste Newton\'sche Gesetz besagt, dass ein Körper in Ruhe verharrt oder sich mit konstanter Geschwindigkeit in einer geraden Linie bewegt, solange keine äußeren Kräfte auf ihn wirken.'
                        },
                        {
                            id: 2,
                            question: 'Was besagt das zweite Newton\'sche Gesetz?',
                            answers: 'Das zweite Newton\'sche Gesetz besagt, dass die Beschleunigung eines Körpers direkt proportional zur resultierenden Kraft ist und umgekehrt proportional zu seiner Masse.'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Chemie 15.07.2023',
                    description: 'Test über das Periodensystem der Elemente, vorbereitung auf die Prüfung vom 15.07.2023',
                    questions: [
                        {
                            id: 1,
                            question: 'Wie ist das Periodensystem der Elemente aufgebaut?',
                            answers: 'Das Periodensystem der Elemente ist nach steigender Ordnungszahl der Elemente geordnet und in Perioden und Gruppen unterteilt.'
                        },
                        {
                            id: 2,
                            question: 'Was ist die Bedeutung der Gruppen im Periodensystem?',
                            answers: 'Die Gruppen im Periodensystem geben Aufschluss über die chemischen Eigenschaften der Elemente.'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Geschichte 25.09.2023',
                    description: 'Test über den Zweiten Weltkrieg, vorbereitung auf die Prüfung vom 25.09.2023',
                    questions: [
                        {
                            id: 1,
                            question: 'Wann begann der Zweite Weltkrieg?',
                            answers: 'Der Zweite Weltkrieg begann am 1. September 1939 mit dem deutschen Überfall auf Polen.'
                        },
                        {
                            id: 2,
                            question: 'Welche Länder waren an dem Zweiten Weltkrieg beteiligt?',
                            answers: 'Die Hauptkriegsparteien waren Deutschland, Italien, Japan auf der einen Seite und die Alliierten (u.a. Großbritannien, USA, Sowjetunion) auf der anderen Seite.'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Englisch 10.11.2023',
                    description: 'Test über Grammatik und Vokabeln, vorbereitung auf die Prüfung vom 10.11.2023',
                    questions: [
                        {
                            id: 1,
                            question: 'Was ist die richtige Verwendung von "there", "their" und "they\'re"?',
                            answers: ' "There" wird verwendet, um einen Ort anzugeben. "Their" wird verwendet, um den Besitz von mehreren Personen auszudrücken. "They\'re" ist eine Kontraktion von "they are".'
                        },
                        {
                            id: 2,
                            question: 'Was sind unregelmäßige Verben?',
                            answers: 'Unregelmäßige Verben sind Verben, deren Konjugation im Simple Past und Past Participle unregelmäßig ist und nicht nach den üblichen Regeln gebildet wird.'
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'Geographie 20.12.2023',
                    description: 'Test über die Kontinente und Ozeane, vorbereitung auf die Prüfung vom 20.12.2023',
                    questions: [
                        {
                            id: 1,
                            question: 'Wie viele Kontinente gibt es?',
                            answers: 'Es gibt insgesamt sieben Kontinente: Afrika, Asien, Europa, Nordamerika, Südamerika, Australien und Antarktis.'
                        },
                        {
                            id: 2,
                            question: 'Welcher ist der größte Ozean?',
                            answers: 'Der Pazifische Ozean ist der größte Ozean der Erde.'
                        }
                    ]
                }
            ]);
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
                    tests.map(test => (
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
