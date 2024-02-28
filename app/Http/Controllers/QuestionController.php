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
            'day' => 'required|integer',
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
            'quiz_points' => 'required|integer',
            'status' => 'required|in:active,inactive',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'created_by' => 'required|exists:users,id'
        ]);

        $question = new Question();
        $question->fill($validated);

        if ($request->hasFile('quiz_image')) {
            $quizImage = $request->file('quiz_image');
            $quizImage->storeAs('images/quiz/questions', $quizImage->hashName(), 'public');
            $question->quiz_image = $quizImage->hashName();
        }

        if ($request->hasFile('quiz_audio')) {
            $quizAudio = $request->file('quiz_audio');
            $quizAudio->storeAs('audio/quiz/questions', $quizAudio->hashName(), 'public');
            $question->quiz_audio = $quizAudio->hashName();
        }

        if ($request->hasFile('quiz_video')) {
            $quizVideo = $request->file('quiz_video');
            $quizVideo->storeAs('video/quiz/questions', $quizVideo->hashName(), 'public');
            $question->quiz_video = $quizVideo->hashName();
        }

        if ($request->hasFile('image_option1')) {
            $imageOption1 = $request->file('image_option1');
            $imageOption1->storeAs('images/quiz/questions/options', $imageOption1->hashName(), 'public');
            $question->image_option1 = $imageOption1->hashName();
        }

        if ($request->hasFile('image_option2')) {
            $imageOption2 = $request->file('image_option2');
            $imageOption2->storeAs('images/quiz/questions/options', $imageOption2->hashName(), 'public');
            $question->image_option2 = $imageOption2->hashName();
        }

        if ($request->hasFile('image_option3')) {
            $imageOption3 = $request->file('image_option3');
            $imageOption3->storeAs('images/quiz/questions/options', $imageOption3->hashName(), 'public');
            $question->image_option3 = $imageOption3->hashName();
        }

        if ($request->hasFile('image_option4')) {
            $imageOption4 = $request->file('image_option4');
            $imageOption4->storeAs('images/quiz/questions/options', $imageOption4->hashName(), 'public');
            $question->image_option4 = $imageOption4->hashName();
        }

        $question->save();

        return redirect()->route('quizzes.user.show', $validated['quiz_id']);

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
