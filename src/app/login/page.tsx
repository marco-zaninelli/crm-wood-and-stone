import { FormCard } from '@/componets/forms/FormCard';
import { AuthButton } from '@/componets/AuthButton';
import { TextInput } from '@/componets/forms/TextInput';

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <FormCard title="">

                {/* Login Form using a Server Action */}
                <form className="flex flex-col gap-4">
                    <TextInput
                        label="Email"
                        name="email"
                        type="email"
                        required
                    />
                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        required
                    />

                    <AuthButton />
                </form>
            </FormCard>
        </div>
    );
}