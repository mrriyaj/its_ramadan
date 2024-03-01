<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('questions')->insert([
            [
                'quiz_id' => '2',
                'title' => 'Sample Question 1',
                'question_number' => 2,
                'quiz_text' => 'What is the capital of a fictional country?',
                'answer_option1' => 'Option A',
                'answer_option2' => 'Option B',
                'answer_option3' => 'Option C',
                'answer_option4' => 'Option D',
                'correct_answer' => 'Option C',
                'quiz_explanation' => 'Explanation for Sample Question 1',
                'quiz_hint' => 'Hint for Sample Question 1',
                'quiz_points' => 10,
                'status' => 'active',
                'start_date' => '2024-03-01',
                'end_date' => '2024-03-31',
            ],
            [
                'quiz_id' => '1',
                'title' => 'Test Question 3',
                'question_number' => 3,
                'quiz_text' => 'What is the answer to the ultimate question of life, the universe, and everything?',
                'answer_option1' => '41',
                'answer_option2' => '42',
                'answer_option3' => '43',
                'answer_option4' => '44',
                'correct_answer' => '42',
                'quiz_explanation' => 'Explanation for Test Question 3',
                'quiz_hint' => 'Hint for Test Question 3',
                'quiz_points' => 15,
                'status' => 'active',
                'start_date' => '2024-03-05',
                'end_date' => '2024-03-25',
            ],
        ]);
    }
}
