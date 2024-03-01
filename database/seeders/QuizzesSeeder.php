<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizzesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quizzes')->insert([
            [
                'organization_id' => 4,
                'title' => 'Islamic History Challenge',
                'description' => 'Explore the rich history of Islam with these enlightening questions.',
                'start_date' => '2024-05-01',
                'end_date' => '2024-05-15',
                'approval_type' => 'auto',
                'status' => 'active',
                'created_by' => 'IslamicStudiesDept',
            ],
            [
                'organization_id' => 4,
                'title' => 'Quranic Verses Quiz',
                'description' => 'Test your knowledge of selected Quranic verses in this enlightening quiz.',
                'start_date' => '2024-05-05',
                'end_date' => '2024-05-20',
                'approval_type' => 'manual',
                'status' => 'active',
                'created_by' => 'QuranStudiesTeam',
            ],
            [
                'organization_id' => 5,
                'title' => 'Ramadan Fiqh Knowledge',
                'description' => 'Enhance your understanding of Ramadan Fiqh with these thought-provoking questions.',
                'start_date' => '2024-05-10',
                'end_date' => '2024-05-25',
                'approval_type' => 'manual',
                'status' => 'inactive',
                'created_by' => 'IslamicScholars',
            ],
            [
                'organization_id' => 6,
                'title' => 'Prophets Life Quiz',
                'description' => 'Learn more about the life of Prophet Muhammad (PBUH) in this insightful quiz.',
                'start_date' => '2024-05-15',
                'end_date' => '2024-05-30',
                'approval_type' => 'auto',
                'status' => 'active',
                'created_by' => 'PropheticStudiesDept',
            ],
            [
                'organization_id' => 5,
                'title' => 'Ramadan Ethics Challenge',
                'description' => 'Reflect on ethical teachings during Ramadan with this challenging quiz.',
                'start_date' => '2024-05-20',
                'end_date' => '2024-06-05',
                'approval_type' => 'auto',
                'status' => 'active',
                'created_by' => 'IslamicEthicsTeam',
            ],
        ]);
    }
}
