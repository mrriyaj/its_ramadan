<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ComingSoonMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if site is in "coming soon" mode
        if ($this->isComingSoon()) {
            // Redirect to the "coming soon" page
            return redirect()->route('coming_soon');
        }
        return $next($request);
    }

    protected function isComingSoon()
    {
        // Implement your logic to determine if site is in "coming soon" mode
        // For example, you could check a configuration setting, database value, or environment variable
        $comingSoonMode = config('site.coming_soon');
        return $comingSoonMode;
    }
}
