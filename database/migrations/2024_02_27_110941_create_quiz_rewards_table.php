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
        Schema::create('quiz_rewards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quiz_id')->constrained();
            $table->string('name');
            $table->string('description');
            $table->integer('quantity');
            $table->string('image');
            $table->enum('status', ['active', 'inactive']);
            $table->foreignId('created_by')->constrained('users');
            $table->dateTime('redeem_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quiz_rewards');
    }
};
