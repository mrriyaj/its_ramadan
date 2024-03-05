<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'first_name' => 'Super Admin',
                'last_name' => 'Smith',
                'gender' => 'male',
                'dob' => '1990-01-01',
                'address_line_1' => '123 Super Avenue',
                'address_line_2' => 'Metropolis',
                'city' => 'SuperCity',
                'district' => 'SuperDistrict',
                'country' => 'Superland',
                'postal_code' => '12345',
                'education_level' => 'Master Degree',
                'institute_name' => 'Super University',
                'phone' => '0712345678',
                'whatsapp' => '0711111111',
                'role' => 'superadmin',
                'onboarding' => 1,
                'email' => 'superadmin@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('12345678'),
            ],
            [
                'first_name' => 'Admin',
                'last_name' => 'Smith',
                'gender' => 'male',
                'dob' => '1985-05-15',
                'address_line_1' => '456 Admin Street',
                'address_line_2' => 'Adminville',
                'city' => 'AdminCity',
                'district' => 'AdminDistrict',
                'country' => 'Adminland',
                'postal_code' => '54321',
                'education_level' => 'Bachelor Degree',
                'institute_name' => 'Admin College',
                'phone' => '0723456789',
                'whatsapp' => '0722222222',
                'role' => 'admin',
                'onboarding' => 1,
                'email' => 'admin@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('12345678'),
            ],
            [
                'first_name' => 'Organization Admin',
                'last_name' => 'Smith',
                'gender' => 'female',
                'dob' => '1980-10-20',
                'address_line_1' => '789 Org Admin Road',
                'address_line_2' => 'Orgland',
                'city' => 'OrgCity',
                'district' => 'OrgDistrict',
                'country' => 'Orglandia',
                'postal_code' => '98765',
                'education_level' => 'High School Diploma',
                'institute_name' => 'Org High School',
                'phone' => '0734567890',
                'whatsapp' => '0733333333',
                'role' => 'orgadmin',
                'onboarding' => 1,
                'email' => 'orgadmin@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('12345678'),
            ],
            [
                'first_name' => 'Manager',
                'last_name' => 'Smith',
                'gender' => 'male',
                'dob' => '1982-08-25',
                'address_line_1' => '101 Manager Lane',
                'address_line_2' => 'Managerville',
                'city' => 'ManagerCity',
                'district' => 'ManagerDistrict',
                'country' => 'Managerland',
                'postal_code' => '56789',
                'education_level' => 'Associate Degree',
                'institute_name' => 'Manager College',
                'phone' => '0745678901',
                'whatsapp' => '0744444444',
                'role' => 'manager',
                'onboarding' => 1,
                'email' => 'manager@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('12345678'),
            ],
            [
                'first_name' => 'User',
                'last_name' => 'Smith',
                'gender' => 'female',
                'dob' => '1995-03-10',
                'address_line_1' => '789 Regular Street',
                'address_line_2' => 'Regularville',
                'city' => 'RegularCity',
                'district' => 'RegularDistrict',
                'country' => 'Regularland',
                'postal_code' => '34567',
                'education_level' => 'Some College',
                'institute_name' => 'Regular Institute',
                'phone' => '0756789012',
                'whatsapp' => '0755555555',
                'role' => 'user',
                'onboarding' => 1,
                'email' => 'user@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('12345678'),
            ]


        ]);
    }
}
