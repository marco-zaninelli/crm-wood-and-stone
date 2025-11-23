'use server';

import { createClient } from './server';
import { redirect } from 'next/navigation';

/**
 * Handles user login via email and password using a Server Action.
 * Redirects to the static protected dashboard (/auth) upon success.
 */
export async function handleLogin(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Create the Supabase server client
    const supabase = await createClient();

    // 1. Authenticate the user (This sets the session cookie via server.ts)
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error('Login Error:', error.message);
        // Redirect back to login with an error flag if authentication fails
        return redirect('/login?error=true');
    }

    // 2. SUCCESS: Redirect to the new static protected route.
    // The /auth/layout.tsx will handle the actual user session check.
    return redirect('/auth');
}

/**
 * Handles user logout.
 */
export async function handleLogout() {
    const supabase = await createClient();

    await supabase.auth.signOut();

    // Redirect to the centralized login page after successful logout
    return redirect('/login');
}