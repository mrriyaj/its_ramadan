<?php

use App\Http\Controllers\Auth\ProviderController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\OnboardingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileImageController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ComingSoonController;
use App\Http\Controllers\User\OrganizationsController as UserOrganizationsController;
use Illuminate\Foundation\Application;
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
});

Route::middleware('auth')->group(function () {
    Route::patch('/onboarding', [OnboardingController::class, 'update'])->name('onboarding.update');
    Route::get('/onboarding', function () {
        return Inertia::render('Onboarding/Onboarding');
    })->name('onboarding');

    //Admin Routes
    Route::prefix('admin')->group(function () {
    Route::group(['middleware' => 'onboarding','coming_soon'], function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        // Route::get('/profile', [ProfileImageController::class, 'show'])->name('file.upload');
        Route::post('/profile', [ProfileImageController::class, 'store'])->name('file.upload.store');

        Route::get('dashboard', function () {
            return Inertia::render('Dashboard');
        })->middleware(['auth', 'verified'])->name('dashboard');

        // User Routes
        Route::resource('users', UserController::class);

        //Quiz Route
        Route::resource('quizzes', QuizController::class);

        // Organization Routes
        Route::resource('organizations', OrganizationController::class);
    });
    });

    // User Routes
    Route::group(['middleware' => 'onboarding', 'coming_soon'], function () {
        // Organization Routes
        Route::resource('organizations', UserOrganizationsController::class);
    });

});


require __DIR__ . '/auth.php';
