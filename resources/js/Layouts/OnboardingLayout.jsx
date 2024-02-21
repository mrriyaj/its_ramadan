import Logo from "@/Components/Logo";
import { Link } from "@inertiajs/react";

const OnboardingLayout = ({ children }) => {

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-main dark:bg-main">
            <div>
                <Link href="/">
                    <Logo className="w-48 mb-6 fill-current" />
                </Link>
            </div>

            <main>
                {children}
            </main>
        </div>
    )
};

export default OnboardingLayout;
