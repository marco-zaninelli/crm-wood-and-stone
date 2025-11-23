import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { Sidebar } from "@/componets/Sidebar";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/login');
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="w-64 flex-shrink-0" />
            <main className="flex-grow p-8 w-full">
                {children}
            </main>
        </div>
    );
}