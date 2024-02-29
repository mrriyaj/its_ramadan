<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Quiz_rewardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quiz_rewards')->insert([
            [
                'quiz_id' => 1,
                'name' => 'General Knowledge Quiz',
                'description' => 'Test your knowledge on a variety of topics!',
                'quantity' => 20,
                'image' => 'general_knowledge.jpg',
                'status' => 'active',
                'created_by' => 'Admin',
                'redeem_date' => '2024-04-01',
            ],
            [
                'quiz_id' => 2,
                'name' => 'Science Trivia Challenge',
                'description' => 'Explore the wonders of science with these challenging questions.',
                'quantity' => 15,
                'image' => 'science_challenge.jpg',
                'status' => 'active',
                'created_by' => 'Editor',
                'redeem_date' => '2024-04-10',
            ],
            [
                'quiz_id' => 3,
                'name' => 'Movie Buff Quiz',
                'description' => 'Test your knowledge of movies and film history.',
                'quantity' => 25,
                'image' => 'movie_buff_quiz.jpg',
                'status' => 'inactive',
                'created_by' => 'Moderator',
                'redeem_date' => '2024-04-15',
            ],
            [
                'quiz_id' => 4,
                'name' => 'Tech Enthusiast Quiz',
                'description' => 'Challenge yourself with questions about the latest technology trends.',
                'quantity' => 18,
                'image' => 'tech_enthusiast_quiz.jpg',
                'status' => 'active',
                'created_by' => 'Developer',
                'redeem_date' => '2024-04-20',
            ],
            [
                'quiz_id' => 5,
                'name' => 'History Trivia',
                'description' => 'Travel back in time with questions about historical events.',
                'quantity' => 22,
                'image' => 'history_trivia.jpg',
                'status' => 'active',
                'created_by' => 'Historian',
                'redeem_date' => '2024-04-25',
            ],
        ]);

    }
}
