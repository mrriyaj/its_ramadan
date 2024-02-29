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

    /**
     * Get the quiz image attribute.
     *
     * @param  string|null  $value
     * @return string|null
     */
    public function getQuizImageAttribute($value): ?string
    {
        if ($value) {
            return url('storage/images/quiz/' . $value);
        }

        return null;
    }


}

