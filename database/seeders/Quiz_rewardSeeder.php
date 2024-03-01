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
                'name' => '100lkr',
                'description' => 'Test your knowledge on a variety of topics!',
                'quantity' => 1,
                'image' => 'general_knowledge.jpg',
                'status' => 'active',
                'created_by' => 'Admin',
                'redeem_date' => '2024-04-01',
            ],
            [
                'quiz_id' => 1,
                'name' => '1000lkr',
                'description' => 'Test your knowledge on a variety of topics!',
                'quantity' => 2,
                'image' => 'general_knowledge.jpg',
                'status' => 'active',
                'created_by' => 'Admin',
                'redeem_date' => '2024-04-01',
            ],
            [
                'quiz_id' => 1,
                'name' => '500lkr',
                'description' => 'Test your knowledge on a variety of topics!',
                'quantity' => 20,
                'image' => 'general_knowledge.jpg',
                'status' => 'active',
                'created_by' => 'Admin',
                'redeem_date' => '2024-04-01',
            ]
        ]);

    }
}
