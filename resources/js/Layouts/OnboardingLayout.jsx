import Logo from "@/Components/Logo";
import { Link } from "@inertiajs/react";

const OnboardingLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center sm:pt-0 bg-main-default">
            <div>
                <Link href="/">
                    <Logo className="w-36 mt-4 fill-current" />
                </Link>
            </div>

            <main className="w-full">{children}</main>
        </div>
    );
};

export default OnboardingLayout;
