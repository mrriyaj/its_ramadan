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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quiz_id')->constrained('quizzes');
            $table->string('title');
            $table->string('question_number');
            $table->text('quiz_text');
            $table->string('quiz_image')->nullable();
            $table->string('quiz_audio')->nullable();
            $table->string('quiz_video')->nullable();
            $table->string('answer_option1');
            $table->string('image_option1')->nullable();
            $table->string('answer_option2');
            $table->string('image_option2')->nullable();
            $table->string('answer_option3');
            $table->string('image_option3')->nullable();
            $table->string('answer_option4');
            $table->string('image_option4')->nullable();
            $table->enum('correct_answer', ['option1', 'option2', 'option3', 'option4']);
            $table->string('quiz_explanation')->nullable();
            $table->string('quiz_hint')->nullable();
            $table->string('quiz_points')->nullable();
            $table->enum ('status', ['active', 'inactive']);
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->foreignId('created_by')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
