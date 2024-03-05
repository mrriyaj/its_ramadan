<?php

namespace App\Policies;

use App\Models\QuizRegistration;
use App\Models\User;
use Illuminate\Auth\Access\Response;

use function PHPUnit\Framework\returnSelf;

class QuizRegistrationPolicy
{
    /**
     * Determine whether the user can create models.
     */
    public function create(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin() || $user->isOrgAdmin() || $user->isManager() || $user->isUser();
    }
}
