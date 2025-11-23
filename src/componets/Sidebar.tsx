import Link from 'next/link';
import { Home, Users, Calendar, Settings, LogOut } from 'lucide-react';
import {LogoutButton} from "@/componets/LogoutButton";

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Clienti', href: '/dashboard/clients', icon: Users },
    { name: 'Appuntamenti', href: '/dashboard/appointments', icon: Calendar },
];

const SidebarFooterLink = ({ href, icon: Icon, name }: typeof navItems[0]) => (
    <Link
        href={href}
        title={name}
        className="
            flex items-center justify-center p-3 rounded-lg
            text-primary hover:bg-accent/10
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-accent
            w-full
        "
    >
        <Icon size={24} className="text-secondary" />
    </Link>
);


export function Sidebar() {
    return (
        <aside className="
            w-64 flex-shrink-0 bg-foreground shadow-xl p-4 border-r border-secondary/20
            fixed top-0 left-0 h-screen flex flex-col h-full
        ">
            <div className="text-2xl font-bold text-accent mb-8 p-2">
                MyApp
            </div>

            <nav className="flex flex-col gap-2 flex-grow">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="
                            flex items-center gap-3 p-3 rounded-lg
                            text-primary hover:bg-accent/10
                            transition-colors duration-200
                            focus:outline-none focus:ring-2 focus:ring-accent
                        "
                    >
                        <item.icon size={20} className="text-secondary" />
                        <span className="font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="
                mt-8 pt-4 border-t border-secondary/20
                flex flex-row justify-between gap-2
            ">
                {/* Settings Icon */}
                <div className="flex-1">
                    <SidebarFooterLink
                        name="Impostazioni"
                        href="/dashboard/settings"
                        icon={Settings}
                    />
                </div>

                <div className="flex-1">
                    <LogoutButton />
                </div>
            </div>
        </aside>
    );
}