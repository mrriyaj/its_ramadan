<?php

use App\Http\Controllers\Auth\ProviderController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\OrganizationController as AdminOrganizationController;
use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\Admin\ProfileImageController as AdminProfileImageController;
use App\Http\Controllers\Admin\QuizController as AdminQuizController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\ComingSoonController;
use App\Http\Controllers\PanelController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\OnboardingController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\QuizRewardController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizRegistrationsController;
use App\Http\Controllers\QuizAnswersController;
use App\Http\Controllers\FollowController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//google auth
Route::get('/auth/{provider}/redirect', [ProviderController::class, 'redirect']);
Route::get('/auth/{provider}/callback', [ProviderController::class, 'callback']);
Route::get('/coming-soon', [ComingSoonController::class, 'index'])->name('coming_soon');



// Route with "coming soon" middleware
Route::middleware(['coming_soon'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    });
    Route::get('/contact', function () {
        return Inertia::render('Contact');
    })->name('contact');

    Route::get('/about', function () {
        return Inertia::render('About');
    });

    Route::get('/test', function (){
        return Inertia::render('test');
    });
});

Route::middleware('auth')->group(function () {
    Route::patch('/onboarding', [OnboardingController::class, 'update'])->name('onboarding.update');
    Route::get('/onboarding', function () {
        return Inertia::render('Onboarding/Onboarding');
    })->name('onboarding');

    //Admin Routes
    Route::prefix('admin')->group(function () {
        Route::group(['middleware' => 'onboarding', 'coming_soon', 'auth'], function () {
            Route::get('/profile', [AdminProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/profile', [AdminProfileController::class, 'update'])->name('profile.update');
            Route::delete('/profile', [AdminProfileController::class, 'destroy'])->name('profile.destroy');

            // Route::get('/profile', [ProfileImageController::class, 'show'])->name('file.upload');
            Route::post('/admin/profile', [AdminProfileImageController::class, 'store'])->name('file.upload.store');

            // Dashboard Route
            Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
            Route::get('/', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

            // User Routes
            Route::resource('/users', AdminUserController::class);

            //Quiz Route
            Route::resource('/quizzes', AdminQuizController::class);

            // Organization Routes
            Route::resource('/organizations', AdminOrganizationController::class);
        });
    });

    // User Routes
        Route::group(['middleware' => 'onboarding', 'coming_soon'], function () {
            // Panel
            Route::get('/panel', [PanelController::class, 'index'])->name('panel');

            // Organization Routes
            Route::get('/organizations', [OrganizationController::class, 'index'])->name('organizations.user.index');
            Route::get('/organizations/{id}', [OrganizationController::class, 'show'])->name('organizations.user.show');

            // Quiz Routes
            Route::get('/quizzes/create/{organizationId}', [QuizController::class, 'create'])->name('quizzes.user.create');
            Route::post('/quizzes', [QuizController::class, 'store'])->name('quizzes.user.store');
            Route::get('/quizzes/{quiz}', [QuizController::class, 'show'])->name('quizzes.user.show');

            // Quiz Reward Routes
            Route::get('/reward/create/{quizId}', [QuizRewardController::class, 'create'])->name('rewards.user.create');
            Route::post('/reward', [QuizRewardController::class, 'store'])->name('rewards.user.store');

            // Question Routes
            Route::get('/questions/create/{quizId}', [QuestionController::class, 'create'])->name('questions.user.create');
            Route::post('/questions', [QuestionController::class, 'store'])->name('questions.user.store');
            Route::get('/questions/{question}', [QuestionController::class, 'show'])->name('questions.user.show');

            // Quiz Registration Routes
            Route::post('/quiz-registrations', [QuizRegistrationsController::class, 'store'])->name('quiz-registrations.store');

            // Quiz Answers Routes
            Route::post('/quiz-answers', [QuizAnswersController::class, 'store'])->name('quiz-answers.store');

            // Follow Routes
            Route::post('/follows', [FollowController::class, 'follow'])->name('follows.follow');
            Route::delete('/follows/{id}', [FollowController::class, 'unfollow'])->name('follows.unfollow');

        });

});

require __DIR__ . '/auth.php';
