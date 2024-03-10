import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import OnboardForm from "../Onboarding/Partials/OnboardingForm";
import OnboardingLayout from "@/Layouts/OnboardingLayout";

const Onboarding = ({ auth, mustVerifyEmail, status }) => {
    return (
        <OnboardingLayout user={auth.user}>
            <Head title="Onboarding" />
            <div className="mt-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="pb-4 bg-white dark:bg-gray-800 shadow rounded-lg">
                        <OnboardForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
