import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { useState } from "react";
import { Link } from "@inertiajs/react";

const OnboardingLayout = ({ user, header, children }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-main dark:bg-main">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-48 mb-6 fill-current" />
                </Link>
            </div>

            <main>
                {children}
            </main>
        </div>
    )
};

export default OnboardingLayout;
