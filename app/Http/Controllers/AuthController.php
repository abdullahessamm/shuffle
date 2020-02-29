<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ["except" => ['login', 'signup']]);
    }

    public function login(Request $request)
    {
        if ( ! $token = Auth::attempt($request->only('email','password')) )
        {
            return response()->json(null, 401);
        }
        return response()->json(compact('token'), 200);
    }
    public function logout()
    {
        auth()->logout();
    }

    public function me()
    {
        return auth()->user();
    }
}
