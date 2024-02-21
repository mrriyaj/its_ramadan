<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Redirect;

class OnboardingController extends Controller
{


    public function update(ProfileUpdateRequest $request)
    {
        $request->user()->fill($request->validated());

        $user = User::find($request->user()->id);

        // Check if all other columns are filled
        if (!is_null($user->first_name) && !is_null($user->last_name) && !is_null($user->gender) && !is_null($user->dob) && !is_null($user->address_line_1) && !is_null($user->city) && !is_null($user->district) && !is_null($user->country) && !is_null($user->postal_code) && !is_null($user->education_level) && !is_null($user->institute_name) && !is_null($user->phone) && !is_null($user->whatsapp)) {
            // Update the 'onboarding' column to 1
            $request->user()->onboarding = '1';
            $request->user()->save();
            return Redirect::route('dashboard');

        } else {
            $request->user()->onboarding = '0';
            $request->user()->save();
            return Redirect::route('onboarding');
        }

    }
}
