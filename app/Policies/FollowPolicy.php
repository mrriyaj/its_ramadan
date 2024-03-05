<?php

namespace App\Policies;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class FollowPolicy
{
        /**
     * Determine whether the user can update the model.
     */
    public function follow(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager() || $user->isUser();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function unfollow(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager() || $user->isUser();
    }
}
