<?php

namespace App\Http\Controllers;

use App\Models\QuizReward;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizRewardController extends Controller
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
    public function create(int $quizId)
    {
        $quiz = Quiz::findOrFail($quizId);

        return Inertia::render('QuizRewards/Create', [
            'quiz' => $quiz
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'name' => 'required|max:255',
            'description' => 'required|max:1024',
            'quantity' => 'required|integer',
            'image' => 'required|image',
            'status' => 'required|in:active,inactive',
            'created_by' => 'required|exists:users,id',
            'redeem_date' => 'required|date'
        ]);

        $quizReward = new QuizReward();
        $quizReward->fill($validated);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $request->name . time() . '.' . $image->extension();
            $image->storeAs('public/images/quiz/rewards', $imageName);
            $quizReward->image = $imageName;
        }

        $quizReward->save();

        return redirect()->route('quizzes.user.show', $validated['quiz_id']);
    }

    /**
     * Display the specified resource.
     */
    public function show(QuizReward $quizReward)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(QuizReward $quizReward)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, QuizReward $quizReward)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuizReward $quizReward)
    {
        //
    }
}
