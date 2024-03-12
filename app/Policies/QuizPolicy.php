<?php

namespace App\Policies;

use App\Models\Quiz;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class QuizPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin() || $user->isOrgAdmin();
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin() || $user->isOrgAdmin() || $user->isUser();
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin() || $user->isOrgAdmin();
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin();
    }
}
