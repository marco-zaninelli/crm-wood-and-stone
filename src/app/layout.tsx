import './globals.css';
import { Providers } from "@/providers/Providers";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <Providers>
            {/* The root layout should only render children and Providers */}
            {children}
        </Providers>
        </body>
        </html>
    );
}