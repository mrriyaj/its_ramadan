<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */





    protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'dob',
        'address_line_1',
        'address_line_2',
        'city',
        'district',
        'country',
        'postal_code',
        'education_level',
        'institute_name',
        'phone',
        'whatsapp',
        'email',
        'password',
        'provider',
        'provider_id',
        'provider_token',
        'profile_photo_path',
        'email_verified_at',
        'profile'

    ];

    // public function getOnboardingAttribute()
    // {
    //     return (bool) $this->onboarding;
    // }

    // public function setOnboardingAttribute($value)
    // {
    //     $this->attributes['onboarding'] = (int) $value;
    // }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];



}
