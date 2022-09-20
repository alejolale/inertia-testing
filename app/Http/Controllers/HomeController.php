<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use function GuzzleHttp\Promise\all;

class HomeController extends Controller
{
    public function index() {
        return Inertia::render('Home', ['name' => 'john']);
    }

    public function demo() {
        return Inertia::render('Demo', [ 'time' => now()->toTimeString(),
            'users' => User::paginate(10)->through(fn($user) => [
                'id' => $user->id,
                'name' => $user->name,
            ])
            // with map the pagination is changed if we change page we have to use through instaed
            /*'users' => User::paginate(10)->map(fn($user) => [
                'id' => $user->id,
                'name' => $user->name,
            ])*/
            // 'users' => User::all()
            ]);
    }

    public function test() {
        return Inertia::render('Test');
    }
}
