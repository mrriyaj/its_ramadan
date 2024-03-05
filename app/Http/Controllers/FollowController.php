<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class FollowController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function follow(Request $request)
    {
        if (Gate::allows('follow_organization')) {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'organization_id' => 'required|exists:organizations,id',
        ]);

        if (Follow::where('user_id', $request->user_id)->where('organization_id', $request->organization_id)->exists()) {
            $follow = Follow::where('user_id', $request->user_id)->where('organization_id', $request->organization_id)->first();
            if ($follow->status == 1) {
                return redirect()->back()->with('error', 'You are already following this organization');
            } else {
                // Update the status to 1 (following)
                $follow->status = 1;
                $follow->save();
                return redirect()->back()->with('success', 'You are now following this organization');
            }
        }

        Follow::create([
            'user_id' => $request->user_id,
            'organization_id' => $request->organization_id,
            'status' => 1,
            'accepted' => 0,
        ]);

        return redirect()->back()->with('success', 'You are now following this organization');
        } else {
            abort(403, 'Unauthorized Action');
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function unfollow(string $id)
    {
        if (Gate::allows('unfollow_organization')) {
            $follow = Follow::findOrFail($id);
            $follow->status = 0;
            $follow->save();

            return redirect()->back()->with('success', 'You have unfollowed this organization');
        } else {
            abort(403, 'Unauthorized Action');
        }
    }
}
