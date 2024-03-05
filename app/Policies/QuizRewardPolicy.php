<?php

namespace App\Policies;

use App\Models\QuizReward;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class QuizRewardPolicy
{
    /**
     * Determine whether the user can create models.
     */
    public function create(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin() || $user->isOrgAdmin();
    }
}
