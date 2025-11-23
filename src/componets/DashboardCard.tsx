import * as React from 'react';

interface DashboardCardProps {
    children: React.ReactNode;
    className?: string;
}

export function DashboardCard({ children, className = '' }: DashboardCardProps) {
    return (
        <div
            className={`
        flex flex-col 
        p-6 
        w-full 
        bg-foreground 
        shadow-lg rounded-xl 
        ${className}
      `}
        >
            {children}
        </div>
    );
}