<?php

namespace App\Http\Controllers;

use App\Models\QuizRegistrations;
use Illuminate\Http\Request;

class QuizRegistrationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'user_id' => 'required|exists:users,id',
        ]);

        if (QuizRegistrations::where('quiz_id', $request->quiz_id)->where('user_id', $request->user_id)->exists()) {
            return response()->json(['message' => 'User already enrolled in this quiz']);
        }

        QuizRegistrations::create($request->all());

        return response()->json(['message' => 'Quiz enrollments stored successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(QuizRegistrations $quizRegistrations)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(QuizRegistrations $quizRegistrations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, QuizRegistrations $quizRegistrations)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuizRegistrations $quizRegistrations)
    {
        //
    }
}
