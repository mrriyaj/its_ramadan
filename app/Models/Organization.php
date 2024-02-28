<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Organization extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug',
        'owner', // Change to 'user_id'
        'name',
        'logo',
        'cover',
        'description',
        'address_line_1',
        'address_line_2',
        'district',
        'country',
        'postal_code',
        'email',
        'number',
        'whatsapp',
        'whatsapp_group',
        'facebook',
        'instagram',
        'twitter',
        'website',
        'youtube',
        'linkedin',
        'is_active',
        'is_verified',
        'created_by', // Change to 'user_id'
    ];

    /**
     * Get the user's first name.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function logo(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/org/logo/' . $value),
        );
    }

    /**
     * Get the user's first name.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function cover(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('storage/images/org/cover/' . $value),
        );
    }
}
