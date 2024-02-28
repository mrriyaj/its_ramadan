<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // In your migration file's up() method:
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->foreignId('owner')->constrained('users');
            $table->string('name');
            $table->string('logo')->nullable(); // Allow for optional logos
            $table->string('cover')->nullable();
            $table->text('description')->nullable();
            $table->string('address_line_1');
            $table->string('address_line_2')->nullable();
            $table->string('district');
            $table->string('country');
            $table->string('postal_code');
            $table->string('email')->unique();
            $table->string('number')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('whatsapp_group')->nullable();
            $table->string('facebook')->nullable();
            $table->string('instagram')->nullable();
            $table->string('twitter')->nullable();
            $table->string('website')->nullable();
            $table->string('youtube')->nullable();
            $table->string('linkedin')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_verified')->default(false);
            $table->foreignId('created_by')->constrained('users');
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
