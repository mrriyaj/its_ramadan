<?php

namespace App\Policies;

use App\Models\Onboarding;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class OnboardingPolicy
{
    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager() || $user->isUser();
    }

}
