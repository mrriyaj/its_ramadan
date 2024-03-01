export default function Index({}) {
    return (
        <div className="min-h-screen bg-white py-16 px-6 sm:py-24 md:flex md:justify-center md:items-center lg:px-8 flex justify-center items-center">
            <div className="mx-auto my-auto max-w-max">
                <main className="sm:flex">
                    <p className="text-4xl font-bold tracking-tight text-main-600 sm:text-5xl">404</p>
                    <div className="sm:ml-6">
                        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                            <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
                        </div>
                        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                            <a
                                href="/"
                                className="inline-flex items-center rounded-md border border-transparent bg-main-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2"
                            >
                                Go back home
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center rounded-md border border-transparent bg-main-100 px-4 py-2 text-sm font-medium text-main-700 hover:bg-main-200 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2"
                            >
                                Contact support
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
