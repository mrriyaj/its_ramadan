<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\RedirectResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Gate::allows('view_organization')) {
            $organizations = Organization::all();

            return Inertia::render('Admin/Organizations/Index', [
                'organizations' => $organizations
            ]);
        }
        return redirect('/');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if (Gate::allows('create_organization')) {
            $users = User::all();

            return Inertia::render('Admin/Organizations/Create', [
                'users' => $users
            ]);
        }
        return redirect('/');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (Gate::allows('create_organization')) {
            $validated = $request->validate([
                'slug' => 'required|max:255|unique:organizations,slug|regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
                'owner' => 'required|exists:users,id',
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
                'linkedin' => 'nullable|max:255',
                'is_active' => 'required|boolean',
                'is_verified' => 'required|boolean',
                'created_by' => 'required|exists:users,id',
            ]);

            $organization = new Organization();
            $organization->fill($validated);

            if ($request->hasFile('logo')) {
                $logo = $request->file('logo');
                $filename = $request->name . '-logo-' . time() . '.' . $logo->getClientOriginalExtension();
                $logo->storeAs('public/images/org/logo/', $filename);
                $organization->logo = $filename;
            }

            if ($request->hasFile('cover')) {
                $cover = $request->file('cover');
                $coverName = $request->name . '-cover-' . time() . '.' . $cover->getClientOriginalExtension();
                $cover->storeAs('public/images/org/cover/', $coverName);
                $organization->cover = $coverName;
            }

            $organization->save();


            return Redirect::route('organizations.index')->with('success', 'Organization has been created');
        }
        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        if (Gate::allows('view_organization')) {
            $organization = Organization::findOrFail($id);

            return Inertia::render('Admin/Organizations/Show', [
                'organization' => $organization
            ]);
        }
        return redirect('/');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        if (Gate::allows('update_organization')) {
            $organization = Organization::findOrFail($id);
            $users = User::all();

            return Inertia::render('Admin/Organizations/Edit', [
                'organization' => $organization,
                'users' => $users
            ]);
        }
        return redirect('/');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        if (Gate::allows('update_organization')) {
            $validated = $request->validate([
                'slug' => 'required|max:255|regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/|unique:organizations,slug,' . $id, // 'slug' is a unique field in the 'organizations' table
                'owner' => 'required|exists:users,id',
                'name' => 'required|max:255',
                'description' => 'required|max:1024',
                'address_line_1' => 'required|max:255',
                'address_line_2' => 'nullable|max:255',
                'district' => 'required|max:255',
                'country' => 'required|max:255',
                'postal_code' => 'required|max:255',
                'number' => 'nullable|max:255',
                'whatsapp' => 'nullable|max:255',
                'whatsapp_group' => 'nullable|max:255',
                'facebook' => 'nullable|max:255',
                'instagram' => 'nullable|max:255',
                'twitter' => 'nullable|max:255',
                'website' => 'nullable|max:255',
                'youtube' => 'nullable|max:255',
                'linkedin' => 'nullable|max:255',
                'is_active' => 'required|boolean',
                'is_verified' => 'required|boolean',
            ]);

            if ($id) {
                $organization = Organization::findOrFail($id);
            } else {
                $organization = new Organization();
            }

            $organization->fill($validated);

            $organization->save();

            return Redirect::route('organizations.index')->with('update', 'Organization has been updated');
        }
        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (Gate::allows('delete_organization')) {
            $organization = Organization::findOrFail($id);

            // Delete the logo file if it exists
            if ($organization->logo) {
                Storage::delete('public/images/org/logo/' . $organization->logo);
            }

            // Delete the cover file if it exists
            if ($organization->cover) {
                Storage::delete('public/images/org/cover/' . $organization->cover);
            }

            $organization->delete();

            return Redirect::route('organizations.index')->with('delete', 'Organization has been deleted');
        }
        return redirect('/');
    }
}
