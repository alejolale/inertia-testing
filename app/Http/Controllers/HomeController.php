<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    /*public function index (){
        return Inertia::render('Home', ['name' => 'john']);
    }*/

    public function index() {
        return Inertia::render('Home', ['name' => 'john']);
    }

    public function demo() {
        return Inertia::render('Demo');
    }

    public function test() {
        return Inertia::render('Test');
    }
}
