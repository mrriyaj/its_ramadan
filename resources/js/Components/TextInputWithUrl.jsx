import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="mt-1 flex rounded-md shadow-sm">
            <span className={`inline-flex items-center px-3 py-2 rounded-l-md bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-300`}>
                https://itsramadan.com/
            </span>
            <input
                {...props}
                type={type}
                className={
                    `flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:ring-main-500 dark:focus:ring-main-600 rounded-r-md shadow-sm` +
                    className
                }
                ref={input}
            />
        </div>
    );
});
