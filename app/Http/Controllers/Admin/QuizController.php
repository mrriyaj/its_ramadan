<?php

namespace App\Http\Controllers\Admin;

use App\Models\Quiz;
use App\Models\User;
use App\Models\Organization;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index()
    {

        $user = auth()->user();
        $user = User::find($user->id);

        if (Gate::allows('view_any_quiz')) {

            if ($user->isAdmin() || $user->isSuperadmin()){
                $quizzes = Quiz::all();
                return Inertia::render('Admin/Quizzes/Index', [
                    'quizzes' => $quizzes
                ]);
            }

            if ($user->isOrgAdmin()) {

                $organizations = Organization::where('owner', $user->id)->get();
                $quizzes = Quiz::whereIn('organization_id', $organizations->pluck('id'))->get();

                return Inertia::render('Admin/Quizzes/Index', [
                    'quizzes' => $quizzes
                ]);
            }

        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    public function create()
    {
        if (Gate::allows('create_quiz')) {
            return Inertia::render('Admin/Quizzes/Create');
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    public function store(Request $request)
    {
        if (Gate::allows('create_quiz')) {
            $validated = $request->validate([
                'organization_id' => 'required|exists:organizations,id',
                'title' => 'required|max:255',
                'description' => 'required|max:1024',
                'start_date' => 'required|date',
                'end_date' => 'required|date|after_or_equal:start_date',
                'approval_type' => 'required|in:auto,manual'
            ]);

            Quiz::create($validated);

            return Redirect::route('quizzes.index')->with('success', 'Quiz has been created');
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    public function show(Quiz $quiz)
    {
        if (Gate::allows('view_quiz')) {
            return Inertia::render('Admin/Quizzes/Show', [
                'quiz' => $quiz
            ]);
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    public function edit(Quiz $quiz)
    {
        if (Gate::allows('update_quiz')) {
            return Inertia::render('Admin/Quizzes/Edit', [
                'quiz' => $quiz
            ]);
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    public function update(Request $request, Quiz $quiz)
    {
        if (Gate::allows('update_quiz')) {
            $validated = $request->validate([
                // 'organization_id' => 'required|exists:organizations,id',
                'title' => 'required|max:255',
                'description' => 'required|max:1024',
                'start_date' => 'required|date',
                'end_date' => 'required|date|after_or_equal:start_date',
                'approval_type' => 'required|in:auto,manual'
            ]);

            $quiz->update($validated);
            return Redirect::route('quizzes.index')->with('success', 'Quiz has been Updated');
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    public function destroy(Quiz $quiz)
    {
        if (Gate::allows('delete_quiz')) {
            $quiz->delete();
            return Redirect::route('quizzes.index')->with('success', 'Quiz has been deleted');
        } else {
            abort(403, 'Unauthorized Action');
        }
    }
}
