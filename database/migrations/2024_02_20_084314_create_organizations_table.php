<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('logo');
            $table->text('cover');
            $table->text('description');
            $table->string('address_line_1')->nullable();
            $table->string('address_line_2')->nullable();
            $table->string('district')->nullable();
            $table->string('country')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('email')->unique();
            $table->string('number')->unique()->nullable();
            $table->string('whatsapp')->unique()->nullable();
            $table->string('whatsapp_group')->unique()->nullable();
            $table->string('facebook')->unique();
            $table->string('instagram')->unique();
            $table->string('twitter')->unique();
            $table->string('website')->unique();
            $table->string('youtube')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
