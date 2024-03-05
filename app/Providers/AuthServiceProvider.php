<?php

namespace App\Providers;
use App\Models\User;
use App\Policies\ComingSoonPolicy;
use App\Policies\UserPolicy;
use App\Policies\DashboardPolicy;
use App\Policies\FollowPolicy;
use App\Policies\OnboardingPolicy;
use App\Policies\OrganizationPolicy;
use App\Policies\PanelPolicy;
use App\Policies\QuestionPolicy;
use App\Policies\QuizAnswerPolicy;
use App\Policies\QuizPolicy;
use App\Policies\QuizRegistrationPolicy;
use App\Policies\QuizRewardPolicy;
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
        $this->defineFollow();
        $this->defineOnboarding();
        $this->defineOrganization();
        $this->definePanel();
        $this->defineQuestion();
        $this->defineQuizAnswer();
        $this->defineQuiz();
        $this->defineQuizRegistration();
        $this->defineQuizReward();
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
        Gate::define('restore_user', [UserPolicy::class, 'restore']);
        Gate::define('force_delete_user', [UserPolicy::class, 'forceDelete']);
    }

    public function defineFollow(): void
    {
        Gate::define('follow_organization', [FollowPolicy::class, 'follow']);
        Gate::define('unfollow_organization', [FollowPolicy::class, 'unfollow']);
    }

    public function defineOnboarding(): void
    {
        Gate::define('update_onboarding', [OnboardingPolicy::class, 'update']);
    }

    public function defineOrganization(): void
    {
        Gate::define('create_organization', [OrganizationPolicy::class, 'create']);
        Gate::define('update_organization', [OrganizationPolicy::class, 'update']);
        Gate::define('delete_organization', [OrganizationPolicy::class, 'delete']);
        Gate::define('view_organization', [OrganizationPolicy::class, 'view']);
        Gate::define('view_any_organization', [OrganizationPolicy::class, 'viewAny']);
    }

    public function definePanel(): void
    {
        Gate::define('view_panel', [PanelPolicy::class, 'view']);
    }

    public function defineQuestion(): void
    {
        Gate::define('create_question', [QuestionPolicy::class, 'create']);
        Gate::define('update_question', [QuestionPolicy::class, 'update']);
        Gate::define('view_question', [QuestionPolicy::class, 'view']);
    }

    public function defineQuizAnswer(): void
    {
        Gate::define('create_quiz_answer', [QuizAnswerPolicy::class, 'create']);
    }

    public function defineQuiz(): void
    {
        Gate::define('create_quiz', [QuizPolicy::class, 'create']);
        Gate::define('update_quiz', [QuizPolicy::class, 'update']);
        Gate::define('delete_quiz', [QuizPolicy::class, 'delete']);
        Gate::define('view_quiz', [QuizPolicy::class, 'view']);
        Gate::define('view_any_quiz', [QuizPolicy::class, 'viewAny']);
    }

    public function defineQuizRegistration(): void
    {
        Gate::define('create_quiz_registration', [QuizRegistrationPolicy::class, 'create']);
    }

    public function defineQuizReward(): void
    {
        Gate::define('create_quiz_reward', [QuizRewardPolicy::class, 'create']);
    }
}
