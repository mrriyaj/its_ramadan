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
                'organization_id' => 1,
                'title' => 'Mathematics Challenge',
                'description' => 'Test your mathematical skills with these challenging questions.',
                'start_date' => '2024-04-01',
                'end_date' => '2024-04-15',
                'approval_type' => 'auto',
                'status' => 'active',
                'created_by' => 'JohnDoe',
            ],
            [
                'organization_id' => 1,
                'title' => 'Language Arts Quiz',
                'description' => 'A quiz to evaluate your proficiency in language arts and literature.',
                'start_date' => '2024-04-05',
                'end_date' => '2024-04-20',
                'approval_type' => 'manual',
                'status' => 'active',
                'created_by' => 'JaneSmith',
            ],
            [
                'organization_id' => 2,
                'title' => 'Environmental Awareness Challenge',
                'description' => 'Raise awareness about environmental issues through this quiz.',
                'start_date' => '2024-04-10',
                'end_date' => '2024-04-25',
                'approval_type' => 'manual',
                'status' => 'inactive',
                'created_by' => 'EnvironmentalTeam',
            ],
            [
                'organization_id' => 3,
                'title' => 'Coding Bootcamp Test',
                'description' => 'Evaluate coding skills in this bootcamp-style quiz for developers.',
                'start_date' => '2024-04-15',
                'end_date' => '2024-04-30',
                'approval_type' => 'auto',
                'status' => 'active',
                'created_by' => 'TechInstitute',
            ],
            [
                'organization_id' => 2,
                'title' => 'Science Olympiad',
                'description' => 'A competition to celebrate scientific achievements and discoveries.',
                'start_date' => '2024-04-20',
                'end_date' => '2024-05-05',
                'approval_type' => 'auto',
                'status' => 'active',
                'created_by' => 'ScienceDept',
            ],
        ]);
    }
}
