<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index()
    {
    
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
        
    }

    public function edit(Quiz $quiz)
    {
        
    }

    public function update(Request $request, Quiz $quiz)
    {
     
    }

    public function destroy(Quiz $quiz)
    {
        
    }
}
