<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ProfileImageController extends Controller
{
    public function show()
    {
        $files = User::latest()->get();
        return Inertia::render('profile', compact('files'));
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'profile' => ['required'],
        ])->validate();

        $fileName = $request->user()->first_name . '-profile-' . time() . '.' . $request->file('profile')->extension();
        $request->file('profile')->storeAs('profile_images', $fileName, 'public');
        $request->user()->profile = $fileName;
        $request->user()->save();


        return redirect()->route('profile.edit');
    }


}
