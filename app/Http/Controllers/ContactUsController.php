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
        return Inertia::render('Admin/Contacts/Index', [
            'contact_us' => $contact_us

        ]);

    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable',
            'message' => 'required',
            'is_read' => 'nullable|boolean'

        ]);

        $contact_us = new ContactUs();
        $contact_us->fill($request->all());
        $contact_us->save();

        return redirect()->back()->with('success', 'We have received your message and would like to thank you for writing to us.');
    }


    public function show($id)
    {
        $contact_us = ContactUs::find($id);
        return Inertia::render('Admin/Contacts/Show', [
            'contact_us' => $contact_us
        ]);
    }



    public function update(Request $request, $id)
    {
        $contact_us = ContactUs::find($id);
        $contact_us->is_read = true;
        $contact_us->save();

        return redirect()->back()->with('success', 'Contact message marked as read');
    }

    public function destroy($id)
    {
        $contact_us = ContactUs::find($id);
        $contact_us->delete();

        return redirect()->back()->with('success', 'Contact message deleted successfully');
    }

    public function markAsRead($id)
    {
        $contact_us = ContactUs::find($id);
        $contact_us->is_read = true;
        $contact_us->save();

        return redirect()->back()->with('success', 'Contact message marked as read');
    }

    public function markAsUnread($id)
    {
        $contact_us = ContactUs::find($id);
        $contact_us->is_read = false;
        $contact_us->save();

        return redirect()->back()->with('success', 'Contact message marked as unread');
    }

    public function markAllAsRead()
    {
        ContactUs::where('is_read', false)->update(['is_read' => true]);

        return redirect()->back()->with('success', 'All contact messages marked as read');
    }

    public function markAllAsUnread()
    {
        ContactUs::where('is_read', true)->update(['is_read' => false]);

        return redirect()->back()->with('success', 'All contact messages marked as unread');
    }

    public function destroyAll()
    {
        ContactUs::truncate();

        return redirect()->back()->with('success', 'All contact messages deleted successfully');
    }




}
