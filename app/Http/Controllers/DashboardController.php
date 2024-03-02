<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;


class DashboardController extends Controller
{
    public function index()
    {
        if (Gate::allows('view_dashboard')) {
            return Inertia::render('Dashboard');
        }
        return redirect('/');
    }
}
