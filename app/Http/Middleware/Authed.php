<?php

namespace App\Http\Middleware;

use Closure;

class Authed
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (request()->token) {
            if (auth()->user()) {
                return $next($request);
            }

            return response()->json([
                "state" => "Unauthorized",
                "message" => "Token is invalid"
            ], 401);

        }
        return response()->json([
            "state" => "Unauthorized",
            "message" => "Login to get access"
        ], 401);
    }
}
