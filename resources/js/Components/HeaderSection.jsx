export default function HeaderSection({Header, Title, Description}) {
    return (
        <div className="bg-main-600">
            <div className="mx-auto max-w-7xl py-8 px-6 sm:py-12 lg:px-8">
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-second-600">{Header}</h2>
                    <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {Title}
                    </p>
                    <p className="mx-auto mt-5 max-w-xl text-xl text-gray-100">
                        {Description}
                    </p>
                </div>
            </div>
        </div>
    )
}
