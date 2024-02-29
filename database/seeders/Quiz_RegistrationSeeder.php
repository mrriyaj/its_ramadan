<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Quiz_RegistrationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quizzes')->insert([
            [
                'quiz_id' => '1',
                'user_id' => '1',
            ],
            [
                'quiz_id' => '2',
                'user_id' => '1',
            ],
            [
                'quiz_id' => '3',
                'user_id' => '1',
            ],
            [
                'quiz_id' => '4',
                'user_id' => '1',
            ],
            [
                'quiz_id' => '1',
                'user_id' => '2',
            ],
            [
                'quiz_id' => '2',
                'user_id' => '2',
            ],
            [
                'quiz_id' => '3',
                'user_id' => '2',
            ],
            [
                'quiz_id' => '4',
                'user_id' => '2',
            ],
        ]);
    }
}
