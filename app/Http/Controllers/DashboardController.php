<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
use App\Models\User;



class DashboardController extends Controller
{
    public function index()
    {

        $userCount = User::count();

        if (Gate::allows('view_dashboard')) {
            return Inertia::render('Dashboard', [
                'userCount' => $userCount
            ]);
        }
        return redirect('/');
    }
}
