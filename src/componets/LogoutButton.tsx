'use client';

import React from 'react';
import { LogOut } from 'lucide-react';
import { handleLogout } from '@/utils/supabase/authActions';

export function LogoutButton() {
    return (
        <form action={handleLogout} className="w-full" suppressHydrationWarning>
            <button
                type="submit"
                title="Logout"
                className="
                    flex items-center justify-center p-3 rounded-lg
                    text-primary hover:bg-red-100 hover:text-red-600
                    transition-colors duration-200 w-full
                    focus:outline-none focus:ring-2 focus:ring-red-400
                "
            >
                <LogOut size={24} />
            </button>
        </form>
    );
}