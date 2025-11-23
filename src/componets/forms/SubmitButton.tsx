"use client";

import React from 'react';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
    children: React.ReactNode;
}

export function SubmitButton({ children }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`
        w-full flex justify-center items-center gap-2 mt-4 px-6 py-3
        bg-accent text-white rounded-lg font-semibold
        hover:opacity-90 transition-opacity duration-200
        disabled:bg-secondary/50 disabled:cursor-not-allowed cursor-pointer
      `}
        >
            {/* Layout -> Spacing -> Sizing -> Typography -> Backgrounds/Borders -> State */}
            {pending && <Loader2 size={20} className="w-5 h-5 animate-spin" />}
            {children}
        </button>
    );
}