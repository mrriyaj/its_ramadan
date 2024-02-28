<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class OnboardingController extends Controller
{
    /**
     * Display the onboarding form
     */
    public function update(ProfileUpdateRequest $request)
    {
        $user = $request->user();
        $user->fill($request->validated());

        // Check if all required columns are filled
        $requiredColumns = [
            'first_name', 'last_name', 'gender', 'dob', 'address_line_1', 'city',
            'district', 'country', 'postal_code', 'education_level', 'institute_name',
            'phone', 'whatsapp'
        ];

        $hasAllColumns = true;
        foreach ($requiredColumns as $column) {
            if (!$user->getAttribute($column)) {
                $hasAllColumns = false;
                break;
            }
        }

        $user->onboarding = $hasAllColumns ? '1' : '0';
        $user->save();

        return redirect('/panel');
    }
}
