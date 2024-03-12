<?php

namespace App\Policies;

use App\Models\Question;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class QuestionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager();
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager() || $user->isUser();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager();
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager();
    }

    /**
     * Determine whether the user can delete the model.
     */

    public function delete(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager();
    }

    public function restore(User $user)
    {
        return $user->isSuperadmin() || $user->isAdmin() || $user->isOrgAdmin() || $user->isManager();
    }
}
