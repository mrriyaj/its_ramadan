<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());
        $user = User::find($request->user()->id);

        // Check if all other columns are filled
        if (!is_null($user->first_name) && !is_null($user->last_name) && !is_null($user->gender) && !is_null($user->dob) && !is_null($user->address_line_1) && !is_null($user->city) && !is_null($user->district) && !is_null($user->country) && !is_null($user->postal_code) && !is_null($user->education_level) && !is_null($user->institute_name) && !is_null($user->phone) && !is_null($user->whatsapp)) {
            // Update the 'onboarding' column to 1
            $request->user()->onboarding = '1';
            $request->user()->save();

        }

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
