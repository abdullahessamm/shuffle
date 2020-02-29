<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LangController extends Controller
{
    public function set_language($lang = null, Request $req) {
        if ($lang) {
            $langs_available = ['ar', 'en'];
            if (in_array($lang,$langs_available)) {
                if ($user = auth()->user()) {
                    return $user;
                    $user->lang = $lang;
                    $user->save();
                } else {
                    session()->put('lang',$lang);
                } //End of if-else
            } //End of if
        }
        return back();
    }
}
