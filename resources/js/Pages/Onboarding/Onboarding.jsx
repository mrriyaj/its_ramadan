import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import OnboardForm from "../Onboarding/Partials/OnboardingForm";
import OnboardingLayout from "@/Layouts/OnboardingLayout";

const Onboarding = ({ auth, mustVerifyEmail, status }) => {
    return (
        <OnboardingLayout user={auth.user}>
            <div className="mt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="pb-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <OnboardForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className=""
                        />
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
