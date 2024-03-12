<?php

namespace App\Http\Controllers;

use App\Models\ContactUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    public function index()
    {
        $contact_us = ContactUs::all();
        return Inertia::render('Contact', [
            'contact_us' => $contact_us
        ]);

    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable',
            'message' => 'required'
        ]);

        $contact_us = new ContactUs();
        $contact_us->fill($request->all());
        $contact_us->save();

        return redirect()->back()->with('success', 'We have received your message and would like to thank you for writing to us.');
    }


}
