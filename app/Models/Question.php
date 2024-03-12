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

    /**
     * Get the quiz audio attribute.
     *
     * @param  string|null  $value
     * @return string|null
     */
    public function getQuizAudioAttribute($value): ?string
    {
        if ($value) {
            return url('storage/audio/quiz/' . $value);
        }

        return null;
    }

    /**
     * Get the quiz video attribute.
     *
     * @param  string|null  $value
     * @return string|null
     */
    // public function getQuizVideoAttribute($value): ?string
    // {
    //     if ($value) {
    //         return url('storage/video/quiz/' . $value);
    //     }

    //     return null;
    // }

    /**
     * Get the image option1 attribute.
     *
     * @param  string|null  $value
     * @return string|null
     */
    public function getImageOption1Attribute($value): ?string
    {
        if ($value) {
            return url('storage/images/quiz/' . $value);
        }

        return null;
    }

    /**
     * Get the image option2 attribute.
     *
     * @param  string|null  $value
     * @return string|null
     */
    public function getImageOption2Attribute($value): ?string
    {
        if ($value) {
            return url('storage/images/quiz/' . $value);
        }

        return null;
    }

    /**
     * Get the image option3 attribute.
     *
     * @param  string|null  $value
     * @return string|null
     */
    public function getImageOption3Attribute($value): ?string
    {
        if ($value) {
            return url('storage/images/quiz/' . $value);
        }

        return null;
    }

    /**
     * Get the image option4 attribute.
     *
     * @param  string|null  $value
     * @return string|null
     */
    public function getImageOption4Attribute($value): ?string
    {
        if ($value) {
            return url('storage/images/quiz/' . $value);
        }

        return null;
    }


}

