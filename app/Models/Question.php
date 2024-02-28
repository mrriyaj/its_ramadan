<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Question extends Model
{
    use HasFactory;
    protected $fillable = [
        'quiz_id',
        'title',
        'question_number',
        'quiz_text',
        'quiz_image',
        'quiz_audio',
        'quiz_video',
        'answer_option1',
        'image_option1',
        'answer_option2',
        'image_option2',
        'answer_option3',
        'image_option3',
        'answer_option4',
        'image_option4',
        'correct_answer',
        'quiz_explanation',
        'quiz_hint',
        'quiz_points',
        'status',
        'start_date',
        'end_date',
        'created_by',
    ];

    public function quiz_image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/quiz/questions/' . $value),
        );
    }

    public function quiz_audio(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/audio/quiz/questions/' . $value),
        );
    }

    public function quiz_video(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/video/quiz/questions/' . $value),
        );
    }

    public function image_option1(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/quiz/questions/options/' . $value),
        );
    }

    public function image_option2(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/quiz/questions/options/' . $value),
        );
    }

    public function image_option3(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/quiz/questions/options/' . $value),
        );
    }

    public function image_option4(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/quiz/questions/options/' . $value),
        );
    }

}
