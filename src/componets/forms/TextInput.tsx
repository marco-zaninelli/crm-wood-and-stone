import React from 'react';
import { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function TextInput({ label, ...props }: TextInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-color-secondary">
                {label}
            </label>
            <input
                {...props}
                aria-label={label}
                className="
          w-full px-4 py-2
          text-primary bg-transparent
          border border-secondary/30 rounded-lg
          placeholder:text-secondary/70
          focus:border-accent focus:outline-none
          transition-colors duration-200
        "
            />
        </div>
    );
}