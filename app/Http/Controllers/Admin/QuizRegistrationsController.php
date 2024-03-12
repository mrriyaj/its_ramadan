<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\QuizRegistrations;
use App\Models\Organization;
use App\Models\Quiz;
use App\Models\User;
use Inertia\Inertia;

class QuizRegistrationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        $organizations = Organization::where('owner', $user->id)->get();

        $quizzes = Quiz::whereIn('organization_id', $organizations->pluck('id'))->get();

        $quizRegistrations = QuizRegistrations::whereIn('quiz_id', $quizzes->pluck('id'))->get();

        $quizRegistrations->load('quiz', 'user');

        return Inertia::render('Admin/QuizRegistrations/Index', [
            'quizRegistrations' => $quizRegistrations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
