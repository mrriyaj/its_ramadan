<?php

namespace App\Providers;
use App\Models\User;
use App\Policies\UserPolicy;
use Illuminate\Support\Facades\Gate;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => UserPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
        $this->defineUserPolicies();

        /* define a admin user role */
        Gate::define('isSuperAdmin', function ($user) {
            return $user->role == 'superadmin';
        });

        /* define a admin user role */
        Gate::define('isOrgAdmin', function ($user) {
            return $user->role == 'orgadmin';
        });

        /* define a admin user role */
        Gate::define('isAdmin', function ($user) {
            return $user->role == 'admin';
        });

        /* define a manager user role */
        Gate::define('isManager', function ($user) {
            return $user->role == 'manager';
        });

        /* define a user role */
        Gate::define('isUser', function ($user) {
            return $user->role == 'user';
        });
}

    /**
     * Define user-related policies.
     */
    private function defineUserPolicies(): void
    {
        Gate::define('create_user', [UserPolicy::class, 'create']);
        Gate::define('update_user', [UserPolicy::class, 'update']);
        Gate::define('delete_user', [UserPolicy::class, 'delete']);
        Gate::define('view_user', [UserPolicy::class, 'view']);
        Gate::define('view_any_user', [UserPolicy::class, 'viewAny']);
    }
}
