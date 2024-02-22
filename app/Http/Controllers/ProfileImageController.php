<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
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

        $fileName = time() . '.' . $request->file('profile')->extension();
        $request->file('profile')->move(public_path('uploads'), $fileName);

        $request->user()->profile = $fileName;
        $request->user()->save();

        return redirect()->route('profile.edit');
    }


}
