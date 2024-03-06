<?php

namespace App\Policies;

use App\Models\QuizAnswer;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class QuizAnswerPolicy
{
    /**
     * Determine whether the user can create models.
     */
    public function create(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin() || $user->isOrgAdmin() || $user->isManager() || $user->isUser();
    }

}
