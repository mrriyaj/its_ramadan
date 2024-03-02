<?php

namespace App\Providers;
use App\Models\User;
use App\Policies\UserPolicy;
use App\Policies\DashboardPolicy;
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
        $this->defineDashboardPolicies();
}

    /**
     * Define dashboard-related policies.
     */
    private function defineDashboardPolicies(): void
    {
        Gate::define('view_dashboard', [DashboardPolicy::class, 'view']);
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
