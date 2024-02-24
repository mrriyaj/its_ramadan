<?php

namespace App\Http\Controllers\Admin;

use App\Models\Quiz;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index()
    {
        $quizzes = Quiz::all();
        return Inertia::render('Admin/Quizzes/Index',[
            'quizzes' => $quizzes
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Quizzes/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            // 'organization_id' => 'required|exists:organizations,id',
            'title' => 'required|max:255',
            'description' => 'required|max:1024',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'approval_type' => 'required|in:automatic,manual'
        ]);

        Quiz::create($validated);

        return Redirect::route('quizzes.index')->with('success', 'Quiz has been created');
    }

    public function show(Quiz $quiz)
    {
        return Inertia::render('Admin/Quizzes/Show',[
            'quiz'=>$quiz
        ]);
    }

    public function edit(Quiz $quiz)
    {
        return Inertia::render('Admin/Quizzes/Edit',[
            'quiz' =>$quiz
        ]);
    }

    public function update(Request $request, Quiz $quiz)
    {
        $validated = $request->validate([
            // 'organization_id' => 'required|exists:organizations,id',
            'title' => 'required|max:255',
            'description' => 'required|max:1024',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'approval_type' => 'required|in:automatic,manual'
        ]);

        $quiz->update($validated);
        return Redirect::route('quizzes.index')->with('success', 'Quiz has been Updated');
    }

    public function destroy(Quiz $quiz)
    {
        $quiz->delete();
        return response()->json(['message', 'Quiz has been deleted']);
    }
}
