<?php

namespace App\Policies;

use App\Models\Organization;
use App\Models\Panel;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PanelPolicy
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

}
