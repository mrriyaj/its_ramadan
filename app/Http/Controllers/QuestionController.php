<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use App\Models\QuizRegistrations;
use App\Models\QuizAnswers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
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
        if (Gate::allows('create_question')) {
            $quiz = Quiz::findOrFail($quizId);

            return Inertia::render('Question/Create', [
                'quiz' => $quiz
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
        if (Gate::allows('create_question')) {
            $validated = $request->validate([
                'quiz_id' => 'required|exists:quizzes,id',
                'title' => 'required|max:255',
                'question_number' => 'required|max:255|unique:questions,question_number,NULL,id,quiz_id,' . $request->quiz_id,
                'quiz_text' => 'required|max:1024',
                'quiz_image' => 'nullable|image',
                'quiz_audio' => 'nullable|file',
                'quiz_video' => 'nullable',
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
                'quiz_points' => 'nullable|max:255|numeric',
                'status' => 'required|in:active,inactive',
                'start_date' => 'required|date',
                'end_date' => 'required|date|after_or_equal:start_date',
                'created_by' => 'required|exists:users,id'
            ]);

            $questions = new Question();
            $questions->fill($validated);

            if ($request->hasFile('quiz_image')) {
                $quiz_image = $request->file('quiz_image');
                $quiz_image_name = $request->question_number . '-question-' . time() . '.' . $quiz_image->getClientOriginalExtension();
                $quiz_image->storeAs('public/images/quiz/', $quiz_image_name);
                $questions->quiz_image = $quiz_image_name;
            }

            if ($request->hasFile('quiz_audio')) {
                $quiz_audio = $request->file('quiz_audio');
                $quiz_audio_name = $request->question_number . '-question-' . time() . '.' . $quiz_audio->getClientOriginalExtension();
                $quiz_audio->storeAs('public/audio/quiz/', $quiz_audio_name);
                $questions->quiz_audio = $quiz_audio_name;
            }

            // if ($request->hasFile('quiz_video')) {
            //     $quiz_video = $request->file('quiz_video');
            //     $quiz_video_name = $request->question_number . '-question-' . time() . '.' . $quiz_video->getClientOriginalExtension();
            //     $quiz_video->storeAs('public/video/quiz/', $quiz_video_name);
            //     $questions->quiz_video = $quiz_video_name;
            // }

            if ($request->hasFile('image_option1')) {
                $image_option1 = $request->file('image_option1');
                $image_option1_name = $request->question_number . '-question-' . time() . '.' . $image_option1->getClientOriginalExtension();
                $image_option1->storeAs('public/images/quiz/', $image_option1_name);
                $questions->image_option1 = $image_option1_name;
            }

            if ($request->hasFile('image_option2')) {
                $image_option2 = $request->file('image_option2');
                $image_option2_name = $request->question_number . '-question-' . time() . '.' . $image_option2->getClientOriginalExtension();
                $image_option2->storeAs('public/images/quiz/', $image_option2_name);
                $questions->image_option2 = $image_option2_name;
            }

            if ($request->hasFile('image_option3')) {
                $image_option3 = $request->file('image_option3');
                $image_option3_name = $request->question_number . '-question-' . time() . '.' . $image_option3->getClientOriginalExtension();
                $image_option3->storeAs('public/images/quiz/', $image_option3_name);
                $questions->image_option3 = $image_option3_name;
            }

            if ($request->hasFile('image_option4')) {
                $image_option4 = $request->file('image_option4');
                $image_option4_name = $request->question_number . '-question-' . time() . '.' . $image_option4->getClientOriginalExtension();
                $image_option4->storeAs('public/images/quiz/', $image_option4_name);
                $questions->image_option4 = $image_option4_name;
            }

            $questions->save();

            return redirect()->route('quizzes.user.show', $request->quiz_id);
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        if (Gate::allows('view_question')) {
            $user = auth()->user();

            $quizRegistration = QuizRegistrations::where('quiz_id', $question->quiz_id)->where('user_id', $user->id)->first();

            $check_quizAnswer = QuizAnswers::where('quiz_registration_id', $quizRegistration->id)
                ->where('question_id', $question->id)
                ->first();

            if ($check_quizAnswer) {
                return redirect()->back()->with('error', 'You have already answered this question');
            }

            // if (!$quizRegistration) {
            //     return redirect()->back()->with('error', 'You are not enrolled in this quiz');
            // }

            // if ($question->status == 'inactive') {
            //     return redirect()->back()->with('error', 'Question is inactive');
            // }

            // if ($question->start_date > now()) {
            //     return redirect()->back()->with('error', 'Question is not started yet');
            // }

            // if ($question->end_date < now()) {
            //     return redirect()->back()->with('error', 'Question is already ended');
            // }

            $options = [
                [
                    'id' => 1,
                    'text' => $question->answer_option1,
                    'image' => $question->image_option1 ?? null,
                    'value' => "option1"
                ],
                [
                    'id' => 2,
                    'text' => $question->answer_option2,
                    'image' => $question->image_option2 ?? null,
                    'value' => "option2"
                ],
                [
                    'id' => 3,
                    'text' => $question->answer_option3,
                    'image' => $question->image_option3 ?? null,
                    'value' => "option3"
                ],
                [
                    'id' => 4,
                    'text' => $question->answer_option4,
                    'image' => $question->image_option4 ?? null,
                    'value' => "option4"
                ]
            ];

            return Inertia::render('Question/Show', [
                'question' => $question,
                'options' => $options,
                'quizRegistration' => $quizRegistration
            ]);
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        $quiz = Quiz::where('id', $question->quiz_id)->first();

        return Inertia::render('Question/Edit', [
            'question' => $question,
            'quiz' => $quiz,
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Question $question)
    {
        if (Gate::allows('update_question')) {
            $validated = $request->validate([
                'title' => 'required|max:255',
                'question_number' => 'required|max:255|unique:questions,question_number,' . $question->id . ',id,quiz_id,' . $question->quiz_id,
                'quiz_text' => 'required|max:1024',
                'quiz_image' => 'nullable|image',
                'quiz_audio' => 'nullable|file',
                'quiz_video' => 'nullable',
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

            $question->fill($validated);

            if ($request->hasFile('quiz_image')) {
                $quiz_image = $request->file('quiz_image');
                $quiz_image_name = $request->question_number . '-question-' . time() . '.' . $quiz_image->getClientOriginalExtension();
                $quiz_image->storeAs('public/images/quiz/', $quiz_image_name);
                $question->quiz_image = $quiz_image_name;
            }

            if ($request->hasFile('quiz_audio')) {
                $quiz_audio = $request->file('quiz_audio');
                $quiz_audio_name = $request->question_number . '-question-' . time() . '.' . $quiz_audio->getClientOriginalExtension();
                $quiz_audio->storeAs('public/audio/quiz/', $quiz_audio_name);
                $question->quiz_audio = $quiz_audio_name;
            }

            // if ($request->hasFile('quiz_video')) {
            //     $quiz_video = $request->file('quiz_video');
            //     $quiz_video_name = $request->question_number . '-question-' . time() . '.' . $quiz_video->getClientOriginalExtension();
            //     $quiz_video->storeAs('public/video/quiz/', $quiz_video_name);
            //     $question->quiz_video = $quiz_video_name;
            // }

            if ($request->hasFile('image_option1')) {
                $image_option1 = $request->file('image_option1');
                $image_option1_name = $request->question_number . '-question-' . time() . '.' . $image_option1->getClientOriginalExtension();
                $image_option1->storeAs('public/images/quiz/', $image_option1_name);
                $question->image_option1 = $image_option1_name;
            }

            if ($request->hasFile('image_option2')) {
                $image_option2 = $request->file('image_option2');
                $image_option2_name = $request->question_number . '-question-' . time() . '.' . $image_option2->getClientOriginalExtension();
                $image_option2->storeAs('public/images/quiz/', $image_option2_name);
                $question->image_option2 = $image_option2_name;
            }

            if ($request->hasFile('image_option3')) {
                $image_option3 = $request->file('image_option3');
                $image_option3_name = $request->question_number . '-question-' . time() . '.' . $image_option3->getClientOriginalExtension();
                $image_option3->storeAs('public/images/quiz/', $image_option3_name);
                $question->image_option3 = $image_option3_name;
            }

            if ($request->hasFile('image_option4')) {
                $image_option4 = $request->file('image_option4');
                $image_option4_name = $request->question_number . '-question-' . time() . '.' . $image_option4->getClientOriginalExtension();
                $image_option4->storeAs('public/images/quiz/', $image_option4_name);
                $question->image_option4 = $image_option4_name;
            }

            $question->save();

            return redirect()->route('quizzes.user.show', $question->quiz_id)->with('success', 'Question updated successfully');

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        if (Gate::allows('delete_question')) {
            $question->delete();

            return redirect()->route('quizzes.user.show', $question->quiz_id)->with('success', 'Question deleted successfully');
        } else {
            abort(403, 'Unauthorized Action');
        }
    }
}
