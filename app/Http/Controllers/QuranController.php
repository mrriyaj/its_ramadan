<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class QuranController extends Controller
{
    public function index()
    {
        $response = Http::get('https://api.quran.com/api/v4/chapters');
        $chapters = $response->json()['chapters'];

        return Inertia::render('Quran/Index', [
            'chapters' => $chapters
        ]);
    }
}
