<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizAnswers extends Model
{
    use HasFactory;

    protected $fillable = [
        'quiz_registration_id',
        'question_id',
        'answer',
        'is_correct',
        'points',
        'feedback',
        'created_by'
    ];

}
