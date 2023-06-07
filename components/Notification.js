import React, { useEffect } from "react";

const Notification = ({ title, message, type }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeNotification();
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const removeNotification = () => {
        const notification = document.getElementById("notification");
        if (notification) {
            notification.remove();
        }
    };

    if (message === null) {
        return null;
    }

    if (type === "error") {
        return (
            <div
                id="notification"
                className="fixed bottom-0 right-0 mb-4 mr-4 z-50 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
            >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
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
                        ></path>
                    </svg>
                    <span className="sr-only">{title}</span>
                </div>
                <div className="ml-3 text-sm font-normal">{message}</div>
            </div>
        );
    }

    if (type === "success") {
        return (
            <div
                id="notification"
                className="fixed bottom-0 right-0 mb-4 mr-4 z-50 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
            >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">{title}</span>
                </div>
                <div className="ml-3 text-sm font-normal">{message}</div>
            </div>
        );
    }

    // Default to info type if not error or success
    return (
        <div
            id="notification"
            className="fixed bottom-0 right-0 mb-4 mr-4 z-50 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
        >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-5a1 1 0 011-1V9a1 1 0 01-2 0v1a1 1 0 011 1zm0-4a1 1 0 011-1V5a1 1 0 01-2 0v1a1 1 0 011 1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <span className="sr-only">{title}</span>
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
        </div>
    );
};

export default Notification;
