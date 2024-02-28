<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Organization;
use App\Models\Quiz;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $organizations = Organization::all();

        return Inertia::render('Organizations/Index', [
            'organizations' => $organizations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $organization = Organization::findOrFail($id);
        $quizzes = Quiz::where('organization_id', $id)->get();

        return Inertia::render('Organizations/Show', [
            'quizzes' => $quizzes,
            'organization' => $organization
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
