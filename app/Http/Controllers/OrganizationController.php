<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Organization;
use App\Models\Quiz;
use App\Models\Follow;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Gate::allows('view_any_organization')) {
            $organizations = Organization::all();

            foreach ($organizations as $organization) {
                $followersCount = Follow::where('organization_id', $organization->id)
                    ->where('status', '01')
                    ->count();

                $userFollowed = Follow::where('user_id', auth()->user()->id)
                    ->where('organization_id', $organization->id)
                    ->where('status', '01')
                    ->first();

                $followId = $userFollowed ? $userFollowed->id : null;

                $organization->followersCount = $followersCount;
                $organization->userFollowed = $userFollowed;
                $organization->followId = $followId;
            }

            return Inertia::render('Organizations/Index', [
                'organizations' => $organizations
            ]);
        } else {
            abort(403, 'Unauthorized Action');
        }
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
        if (!$organization = Organization::where('id', $id)->first()) {
            return redirect('/organizations')->with('error', 'Organization not exist!');
        }

        if (Gate::allows('view_any_organization')) {
            $organization = Organization::findOrFail($id);

            $followersCount = Follow::where('organization_id', $id)
                ->where('status', '01')
                ->count();

            $quizzes = Quiz::where('organization_id', $id)->get();

            // Check if the user is following and the status is 01
            $follow = Follow::where('user_id', auth()->user()->id)
                ->where('organization_id', $id)
                ->where('status', '01')
                ->first();

            return Inertia::render('Organizations/Show', [
                'quizzes' => $quizzes,
                'organization' => $organization,
                'followersCount' => $followersCount,
                'followId' => $follow ? $follow->id : null
            ]);
        } else {
            return redirect('/login')->with('error', 'You need to login to view this page');
        }
    }





    public function slug(string $slug)
    {
        if (Gate::allows('view_any_organization')) {

            if (!$organization = Organization::where('slug', $slug)->first()) {
                return redirect('/organizations')->with('error', 'Organization not exist!');
            }

            $organization = Organization::where('slug', $slug)->first();



            $followersCount = Follow::where('organization_id', $organization->id)
                ->where('status', '01')
                ->count();

            $quizzes = Quiz::where('organization_id', $organization->id)->get();

            // Check if the user is following and the status is 01
            $follow = Follow::where('user_id', auth()->user()->id)
                ->where('organization_id', $organization->id)
                ->where('status', '01')
                ->first();

            return Inertia::render('Organizations/Show', [
                'quizzes' => $quizzes,
                'organization' => $organization,
                'followersCount' => $followersCount,
                'followId' => $follow ? $follow->id : null
            ]);
        } else {

            return redirect('/login')->with('error', 'You need to login to view this page');
        }
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
    // public function destroy(string $id)
    // {
    //     //
    // }
}
