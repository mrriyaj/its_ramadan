export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-main-default dark:bg-second-default border border-transparent rounded-md font-semibold text-xs text-white dark:text-second-800 uppercase tracking-widest hover:bg-second-700 dark:hover:bg-white focus:bg-second-700 dark:focus:bg-white active:bg-second-900 dark:active:bg-second-300 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
