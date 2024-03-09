<?php

namespace App\Policies;

use App\Models\User;

class DashboardPolicy
{
    /**
     * Determine if the given user can view the dashboard.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function view(User $user)
    {
        return $user->isAdmin() || $user->isSuperadmin()|| $user->isOrgAdmin();
    }
}
