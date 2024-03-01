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
                'quiz_id' => '3',
                'title' => 'Ramadan Question 1',
                'question_number' => 4,
                'quiz_text' => 'What is the significance of Laylat al-Qadr?',
                'answer_option1' => 'Night of Miraj',
                'answer_option2' => 'Night of Ascension',
                'answer_option3' => 'Night of Power',
                'answer_option4' => 'Night of Forgiveness',
                'correct_answer' => 'Night of Power',
                'quiz_explanation' => 'Explanation for Ramadan Question 1',
                'quiz_hint' => 'Hint for Ramadan Question 1',
                'quiz_points' => 20,
                'status' => 'active',
                'start_date' => '2024-03-10',
                'end_date' => '2024-03-30',
            ],
            [
                'quiz_id' => '3',
                'title' => 'Ramadan Question 10',
                'question_number' => 13,
                'quiz_text' => 'During which month is fasting (Sawm) obligatory for Muslims?',
                'answer_option1' => 'Shawwal',
                'answer_option2' => 'Rajab',
                'answer_option3' => 'Ramadan',
                'answer_option4' => 'Dhu al-Hijjah',
                'correct_answer' => 'Ramadan',
                'quiz_explanation' => 'Explanation for Ramadan Question 10',
                'quiz_hint' => 'Hint for Ramadan Question 10',
                'quiz_points' => 15,
                'status' => 'active',
                'start_date' => '2024-03-15',
                'end_date' => '2024-04-05',
            ],
            [
                'quiz_id' => '3',
                'title' => 'Ramadan Question 11',
                'question_number' => 14,
                'quiz_text' => 'Which Islamic month is known as the "Month of Mercy"?',
                'answer_option1' => 'Shawwal',
                'answer_option2' => 'Rajab',
                'answer_option3' => 'Ramadan',
                'answer_option4' => 'Dhu al-Hijjah',
                'correct_answer' => 'Ramadan',
                'quiz_explanation' => 'Explanation for Ramadan Question 11',
                'quiz_hint' => 'Hint for Ramadan Question 11',
                'quiz_points' => 15,
                'status' => 'active',
                'start_date' => '2024-03-20',
                'end_date' => '2024-04-10',
            ],

            [
                'quiz_id' => '3',
                'title' => 'Ramadan Question 12',
                'question_number' => 15,
                'quiz_text' => 'What is the pre-dawn meal eaten before the fast begins called?',
                'answer_option1' => 'Suhoor',
                'answer_option2' => 'Iftar',
                'answer_option3' => 'Tahajjud',
                'answer_option4' => 'Tarawih',
                'correct_answer' => 'Suhoor',
                'quiz_explanation' => 'Explanation for Ramadan Question 12',
                'quiz_hint' => 'Hint for Ramadan Question 12',
                'quiz_points' => 10,
                'status' => 'active',
                'start_date' => '2024-03-25',
                'end_date' => '2024-04-15',
            ],

            // Add more questions similarly...

            [
                'quiz_id' => '3',
                'title' => 'Ramadan Question 13',
                'question_number' => 16,
                'quiz_text' => 'Which Surah is often recited during the Tarawih prayers in Ramadan?',
                'answer_option1' => 'Surah Al-Fatihah',
                'answer_option2' => 'Surah Al-Baqarah',
                'answer_option3' => 'Surah Al-Ikhlas',
                'answer_option4' => 'Surah Al-Qadr',
                'correct_answer' => 'Surah Al-Qadr',
                'quiz_explanation' => 'Explanation for Ramadan Question 13',
                'quiz_hint' => 'Hint for Ramadan Question 13',
                'quiz_points' => 15,
                'status' => 'active',
                'start_date' => '2024-03-30',
                'end_date' => '2024-04-20',
            ],

            [
                'quiz_id' => '3',
                'title' => 'Ramadan Question 14',
                'question_number' => 17,
                'quiz_text' => 'What is the night journey and ascension of the Prophet Muhammad called?',
                'answer_option1' => 'Hijra',
                'answer_option2' => 'Laylat al-Qadr',
                'answer_option3' => 'Isra and Mi\'raj',
                'answer_option4' => 'Tawaf',
                'correct_answer' => 'Isra and Mi\'raj',
                'quiz_explanation' => 'Explanation for Ramadan Question 14',
                'quiz_hint' => 'Hint for Ramadan Question 14',
                'quiz_points' => 20,
                'status' => 'active',
                'start_date' => '2024-04-05',
                'end_date' => '2024-04-25',
            ],

            [
                'quiz_id' => '3',
                'title' => 'Ramadan Question 15',
                'question_number' => 18,
                'quiz_text' => 'What is the last ten nights of Ramadan called?',
                'answer_option1' => 'Eid al-Fitr',
                'answer_option2' => 'Laylat al-Qadr',
                'answer_option3' => 'Eid al-Adha',
                'answer_option4' => 'Ashura',
                'correct_answer' => 'Laylat al-Qadr',
                'quiz_explanation' => 'Explanation for Ramadan Question 15',
                'quiz_hint' => 'Hint for Ramadan Question 15',
                'quiz_points' => 15,
                'status' => 'active',
                'start_date' => '2024-04-10',
                'end_date' => '2024-04-30',
            ],

        ]);
    }
}
