<?php

namespace App\Http\Controllers;

use App\Models\QuizAnswers;
use App\Models\Question;
use Illuminate\Http\Request;

class QuizAnswersController extends Controller
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

        $validated = $request->validate([
            'quiz_registration_id' => 'required|exists:quiz_registrations,id',
            'question_id' => 'required|exists:questions,id',
            'answer' => 'required',
        ]);

        $check_quizAnswer = QuizAnswers::where('quiz_registration_id', $validated['quiz_registration_id'])
            ->where('question_id', $validated['question_id'])
            ->first();

        $check_already_answered = QuizAnswers::where('quiz_registration_id', $validated['quiz_registration_id'])
            ->where('question_id', $validated['question_id'])
            ->where('created_by', auth()->id())
            ->first();

        if ($check_already_answered) {

            return redirect()->with('error', 'You have already answered this question');

        }

        $quizAnswer = new QuizAnswers();

        $quizAnswer->fill($validated);

        $question = Question::find($validated['question_id']);

        $quizAnswer->created_by = auth()->id();

        if ($question->correct_answer == $validated['answer']) {
            $quizAnswer->is_correct = true;
            $quizAnswer->points = $question->quiz_points;
        } else {
            $quizAnswer->is_correct = false;
            $quizAnswer->points = 0;
        }

        if ($check_quizAnswer) {

            return redirect()->with('error', 'Quiz answers already saved');

        } else {
            $quizAnswer->save();

        }

        return redirect()->with('success', 'Quiz answers saved successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(QuizAnswers $quizAnswers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(QuizAnswers $quizAnswers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, QuizAnswers $quizAnswers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuizAnswers $quizAnswers)
    {
        //
    }
}
