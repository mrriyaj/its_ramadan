<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Quiz extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function rewards()
    {
        return $this->hasMany(QuizReward::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function registrations()
    {
        return $this->hasMany(QuizRegistrations::class);
    }

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/org/' . $value),
        );
    }
}
