'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { handleLogin } from '@/utils/supabase/authActions';

export function AuthButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            formAction={handleLogin}
            disabled={pending}
            className={`
                w-full flex justify-center items-center gap-2 mt-6 px-6 py-3
                bg-accent text-white rounded-lg font-semibold
                hover:opacity-90 transition-opacity duration-200
                disabled:bg-secondary/50 disabled:cursor-not-allowed cursor-pointer
            `}
        >
            {pending && <Loader2 size={20} className="w-5 h-5 animate-spin" />}
            Accedi
        </button>
    );
}