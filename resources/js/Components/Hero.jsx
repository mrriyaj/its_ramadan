import { ChevronRightIcon } from "@heroicons/react/20/solid";
import image from "../../../public/image/Image.png";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-4 pb-24 sm:pb-32 lg:flex lg:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className="mt-12 sm:mt-16 lg:mt-8">
                        <a href="#" className="inline-flex space-x-6">
                            <span className="rounded-full bg-second-500/10 px-3 py-1 text-sm font-semibold leading-6 text-second-400 ring-1 ring-inset ring-second-500/20">
                                What's new
                            </span>
                            <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-main-300">
                                <span>Just shipped v0.2(Beta)</span>
                                <ChevronRightIcon
                                    className="h-5 w-5 text-main-500"
                                    aria-hidden="true"
                                />
                            </span>
                        </a>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold font-ramadhan-karim tracking-tight text-white sm:text-[8rem] sm:leading-[6rem] ">
                        Ramadan <br />
                        <span className="text-second-500 font-ramadhan-karim">Kareem</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-main-300">
                        Happy Ramadan!! in the holy month of Ramadan, May your
                        heart be filled with peace, harmony and joy.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="/organizations"
                            className="rounded-md bg-second-500 px-8 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-second-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-second-400"
                        >
                            Organizations
                        </a>
                        <a
                            href="#"
                            className="text-base font-semibold leading-7 text-white"
                        >
                            Ramadan Calendar <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <img
                            src={image}
                            alt="Image of Ramadan Kareem"
                            width={2432}
                            height={1442}
                            className="w-[32rem] rounded-md bg-cover bg-no-repeat bg-center "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
