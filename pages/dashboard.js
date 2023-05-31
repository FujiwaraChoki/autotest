import Link from "next/link";

const Dashboard = () => {
    const tests = [
        {
            id: 1,
            title: 'Biologie 31.05.2023',
            description: 'Test über die Zellteilung, vorbereitung auf die Prüfung vom 31.05.2023',
            questions: [
                {
                    id: 1,
                    question: 'Was ist die Zellteilung?',
                    answers: 'Die Zellteilung ist der Prozess, durch den eine Zelle in zwei Tochterzellen aufgeteilt wird.'
                },
                {
                    id: 2,
                    question: 'Was ist die Mitose?',
                    answers: 'Die Mitose ist der Prozess, durch den eine Zelle in zwei Tochterzellen aufgeteilt wird.'
                }
            ]
        }
    ];

    return (
        <div div className="container p-20">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Dashboard</h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Hier findest du alle Tests die du erstellt hast.</p>
            <br />
            <div className="flex flex-wrap -m-4">
                {
                    tests.map(test => (
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TEST</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{test.title}</h1>
                                <p className="leading-relaxed mb-3">{test.description}</p>
                                <Link href={`/test/${test.id}`} className="text-indigo-500 inline-flex items-center">Mehr erfahren
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard;
