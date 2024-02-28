<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
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

        return Inertia::render('Question/Create', [
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
            'title' => 'required|max:255',
            'question_number' => 'required|max:255',
            'quiz_text' => 'required|max:1024',
            'quiz_image' => 'nullable|image',
            'quiz_audio' => 'nullable|file',
            'quiz_video' => 'nullable|file',
            'answer_option1' => 'required|max:255',
            'image_option1' => 'nullable|image',
            'answer_option2' => 'required|max:255',
            'image_option2' => 'nullable|image',
            'answer_option3' => 'required|max:255',
            'image_option3' => 'nullable|image',
            'answer_option4' => 'required|max:255',
            'image_option4' => 'nullable|image',
            'correct_answer' => 'required|in:option1,option2,option3,option4',
            'quiz_explanation' => 'nullable|max:1024',
            'quiz_hint' => 'nullable|max:1024',
            'quiz_points' => 'nullable|max:255',
            'status' => 'required|in:active,inactive',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'created_by' => 'required|exists:users,id'
        ]);

        Question::create($validated);

        return redirect()->route('quizzes.user.show', $request->quiz_id);

    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        //
    }
}
