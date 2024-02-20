import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import OnboardForm from "../Onboarding/Partials/OnboardingForm";
import OnboardingLayout from "@/Layouts/OnboardingLayout";

const Onboarding = ({ auth, mustVerifyEmail, status }) => {
    return (
        <OnboardingLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Onboarding
                </h2>
            }
        >
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <OnboardForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
