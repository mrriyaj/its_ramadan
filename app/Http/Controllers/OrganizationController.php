<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $organizations = Organization::all();

        return Inertia::render('Admin/Organizations/Index', [
            'organizations' => $organizations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Organizations/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'logo' => 'nullable|image',
            'cover' => 'nullable|image',
            'description' => 'required|max:1024',
            'address_line_1' => 'required|max:255',
            'address_line_2' => 'nullable|max:255',
            'district' => 'required|max:255',
            'country' => 'required|max:255',
            'postal_code' => 'required|max:255',
            'email' => 'required|email|unique:organizations,email',
            'number' => 'nullable|max:255',
            'whatsapp' => 'nullable|max:255',
            'whatsapp_group' => 'nullable|max:255',
            'facebook' => 'nullable|max:255',
            'instagram' => 'nullable|max:255',
            'twitter' => 'nullable|max:255',
            'website' => 'nullable|max:255',
            'youtube' => 'nullable|max:255',
        ]);

        $organization = new Organization();
        $organization->fill($validated);

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $filename = $request->name . '-logo.' . $logo->getClientOriginalExtension();
            $logo->storeAs('public/images/org/logo/', $filename);
            $organization->logo = $filename;
        }

        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $coverName = $request->name . '-cover.' . $cover->getClientOriginalExtension();
            $cover->storeAs('public/images/org/cover/', $coverName);
            $organization->cover = $coverName;
        }

        $organization->save();


        return Redirect::route('organizations.index')->with('success', 'Organization has been created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
