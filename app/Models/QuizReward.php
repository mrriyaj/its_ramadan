<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class QuizReward extends Model
{
    use HasFactory;
    protected $fillable = [
        'quiz_id',
        'name',
        'description',
        'quantity',
        'image',
        'status',
        'created_by',
        'redeem_date',
    ];

    public function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/quiz/rewards/' . $value),
        );
    }
}
