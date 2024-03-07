<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quiz;
use App\Models\Organization;
use App\Models\QuizReward;
use App\Models\Question;
use App\Models\QuizRegistrations;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class QuizController extends Controller
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
    public function create(int $organizationId)
    {
        if (Gate::allows('create_quiz')) {
            $organization = Organization::findOrFail($organizationId);

            return Inertia::render('Quizzes/Create', [
                'organization' => $organization
            ]);
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (Gate::allows('create_quiz')) {
            $validated = $request->validate([
                'organization_id' => 'required|exists:organizations,id',
                'title' => 'required|max:255',
                'description' => 'required|max:1024',
                'image' => 'nullable|image',
                'start_date' => 'required|date',
                'end_date' => 'required|date|after_or_equal:start_date',
                'approval_type' => 'required|in:auto,manual',
                'status' => 'required|in:active,inactive',
                'created_by' => 'required|exists:users,id'
            ]);

            $quiz = new Quiz();
            $quiz->fill($validated);

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = $request->name . '-image-' . time() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images/org/', $imageName);
                $quiz->image = $imageName;
            }

            $quiz->save();

            return redirect()->route('organizations.user.show', $request->organization_id)->with('success', 'Quiz has been added');
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Quiz $quiz)
    {
        if (Gate::allows('view_quiz')) {
            $rewards = QuizReward::where('quiz_id', $quiz->id)->get();
            $questions = Question::where('quiz_id', $quiz->id)->get();
            $quizregistrations = QuizRegistrations::where('quiz_id', $quiz->id)->get();
            $organization = Organization::findOrFail($quiz->organization_id);

            $isRegistered = false;
            if ($quizregistrations->contains('user_id', auth()->id())) {
                $isRegistered = true;
            }

            if ($quiz->status === 'inactive') {
                return redirect()->back()->with('error', 'Quiz is not active');
            }

            return Inertia::render('Quizzes/Show', [
                'quiz' => $quiz,
                'rewards' => $rewards,
                'questions' => $questions,
                'isRegistered' => $isRegistered,
                'organization' => $organization

            ]);
        } else {
            abort(403, 'Unauthorized Action');
        }
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
