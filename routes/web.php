<?php

use App\Http\Controllers\Auth\ProviderController;
use App\Http\Controllers\OnboardingController;
use App\Http\Controllers\Admin\OrganizationController as AdminOrganizationController;
use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\Admin\ProfileImageController as AdminProfileImageController;
use App\Http\Controllers\Admin\QuizController as AdminQuizController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\ComingSoonController;
use App\Http\Controllers\User\PanelController;
use App\Http\Controllers\User\OrganizationController;
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
            Route::post('/profile', [AdminProfileImageController::class, 'store'])->name('file.upload.store');

            Route::get('/dashboard', function () {
                return Inertia::render('Dashboard');
            })->middleware(['auth', 'verified'])->name('dashboard');

            Route::get('/', function () {
                return Inertia::render('Dashboard');
            })->middleware(['auth', 'verified'])->name('dashboard');

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
            // Organization Routes
            Route::get('/organizations', [OrganizationController::class, 'index'])->name('organizations.user.index');
            Route::get('/organizations/{id}', [OrganizationController::class, 'show'])->name('organizations.user.show');
            // Panel
            Route::get('/panel', [PanelController::class, 'index'])->name('panel');
        });

});


require __DIR__ . '/auth.php';
