import React from 'react';

interface FormCardProps {
    children: React.ReactNode;
    title: string;
}

export function FormCard({ children, title }: FormCardProps) {
    return (
        <div className="
      max-w-2xl mx-auto p-6
      bg-foreground shadow-lg rounded-xl
    ">
            <h2 className="text-xl font-semibold mb-6 text-primary">{title}</h2>
            {children}
        </div>
    );
}