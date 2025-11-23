import { redirect } from 'next/navigation';

export default function NotFound() {
    const REDIRECT_PATH = '/dashboard';
    redirect(REDIRECT_PATH);
}