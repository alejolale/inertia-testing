<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        return Inertia::render('Home', ['name' => 'john']);
    }

    public function demo() {
        return Inertia::render('Demo', [ 'time' => now()->toTimeString(),
            'users' => User::all()->map(fn($user) => ['name' => $user->name]) //make attention to data we're going to send
            ]);
    }

    public function test() {
        return Inertia::render('Test');
    }
}
