<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Organization;
use Faker\Factory as Faker; // Import Faker
use Illuminate\Support\Str;
use App\Models\User;

class OrganizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $faker = Faker::create();

        for ($i = 0; $i < 50; $i++) {
            $user = User::factory()->create(); // Create a new user

        for ($i = 0; $i < 50; $i++) { // Generate 50 organizations
            Organization::create([
                'slug' => Str::slug($faker->unique()->company),
                'name' => $faker->company,
                'cover' => $faker->imageUrl(1280, 720, 'city', true),  // Placeholder image
                'description' => $faker->paragraph(3),
                'address_line_1' => $faker->streetAddress,
                'address_line_2' => $faker->secondaryAddress,
                'district' => $faker->city,
                'country' => $faker->country,
                'postal_code' => $faker->postcode,
                'email' => $faker->unique()->companyEmail,
                'number' => $faker->phoneNumber,
                'whatsapp' => $faker->phoneNumber,
                'whatsapp_group' => 'https://chat.whatsapp.com/' . $faker->randomNumber(8), // Sample
                'facebook' => 'https://facebook.com/' . $faker->userName, // Sample
                'instagram' => 'https://instagram.com/' . $faker->userName,  // Sample
                'twitter' => 'https://twitter.com/' . $faker->userName,  // Sample
                'website' => 'https://' . $faker->domainName,
                'youtube' => 'https://youtube.com/channel/' . $faker->uuid, // Sample
                'linkedin' => 'https://linkedin.com/company/' . $faker->word,  // Sample
                'is_active' => $faker->boolean(90), // 90% chance of being active
                'is_verified' => $faker->boolean(50), // 50% chance of being verified
                'user_id' => $user->id, // Assuming you have users seeded
            ]);
        }
        }

    }
}
