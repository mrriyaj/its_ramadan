<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organization;

class PageController extends Controller
{
    public function Home() {

        $organizations = Organization::all();

        return Inertia::render('Home', [
            'organizations' => $organizations
        ]);
    }
}
