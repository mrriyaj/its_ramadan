<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Providers\RouteServiceProvider;

class ProviderController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        $SocialUser = Socialite::driver($provider)->user();

        $user = User::updateOrCreate([
            'provider_id' => $SocialUser->id,
            'provider' => $provider
        ], [
            'first_name' => $SocialUser->name,
            'email' => $SocialUser->email,
            'profile' => $SocialUser->avatar,
            'provider_token' => $SocialUser->token,
            'email_verified_at' => now(),
        ]);

        Auth::login($user);

        if (Auth::user()->role == 'superadmin') {
            return redirect(RouteServiceProvider::DASHBOARD);
        } elseif (Auth::user()->role == 'orgadmin') {
            return redirect(RouteServiceProvider::HOME);
        } elseif (Auth::user()->role == 'admin') {
            return redirect(RouteServiceProvider::DASHBOARD);
        } elseif (Auth::user()->role == 'manager') {
            return redirect(RouteServiceProvider::HOME);
        } else {
            return redirect(RouteServiceProvider::HOME);
        }
    }
}
