<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');

            $table->string('first_name')->after('id');
            $table->string('last_name')->after('first_name');
            $table->string('gender')->after('last_name')->nullable();
            $table->string('dob')->after('gender')->nullable();
            $table->string('address_line_1')->after('dob')->nullable();
            $table->string('address_line_2')->after('address_line_1')->nullable();
            $table->string('city')->after('address_line_2')->nullable();
            $table->string('district')->after('city')->nullable();
            $table->string('country')->after('district')->nullable();
            $table->string('postal_code')->after('country')->nullable();
            $table->string('education_level')->after('postal_code')->nullable();
            $table->string('phone')->after('education_level')->unique()->nullable();
            $table->string('whatsapp')->after('phone')->unique()->nullable();
            $table->string('role')->after('whatsapp')->default('user');
            $table->boolean('is_complete')->after('role')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
