import { createClient } from '@/utils/supabase/server'
import { addClient } from '@/utils/supabase/addClient'
import { FormCard } from "@/componets/forms/FormCard";
import { TextInput } from "@/componets/forms/TextInput";
import { SelectInput } from "@/componets/forms/SelectInput";
import { SubmitButton } from "@/componets/forms/SubmitButton";

const referralOptions = [
    { value: "", label: "Seleziona una fonte..." },
    { value: "architect", label: "Architetto" },
    { value: "word of mouth", label: "Passa Parola" },
    { value: "social media", label: "Social Media" },
    { value: "exhibition", label: "Fiera" },
    { value: "showroom", label: "Showroom" },
    { value: "tv", label: "TV" },
    { value: "other", label: "Altro" },
];

export default async function AddClientForm() {
    const supabase = await createClient()
    const { data: clients } = await supabase.from('clients').select()

    return (
        <>
            <FormCard title="Nuovo Cliente">
                {/* --- IL FORM DI INSERIMENTO --- */}
                <form action={addClient} className="flex flex-col gap-6">

                    {/* Primary Client Info */}
                    <h3 className="text-lg font-medium text-primary">Informazioni Cliente Primario</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextInput
                            name="fullName"
                            label="Nome e Cognome (Principale)"
                            type="text"
                            required
                        />
                        <TextInput
                            name="phone"
                            label="Telefono"
                            type="text"
                            required
                        />
                        <TextInput
                            name="email"
                            label="Email"
                            type="email"
                        />
                    </div>

                    {/* Divider */}
                    <hr className="my-3 border-t border-secondary/30" />

                    <h3 className="text-lg font-medium text-primary">Contatto Secondario (Partner)</h3>
                    {/* Partner Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextInput
                            name="partnerName"
                            label="Nome e Cognome"
                            type="text"
                        />
                        <TextInput
                            name="partnerPhone"
                            label="Telefono"
                            type="text"
                        />
                        <TextInput
                            name="partnerEmail"
                            label="Email"
                            type="email"
                        />
                    </div>

                    {/* Divider */}
                    <hr className="my-3 border-t border-secondary/30" />

                    <h3 className="text-lg font-medium text-primary">Dettagli Progetto/Fatturazione</h3>
                    {/* Addresses and Referral */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextInput
                            name="projectAddress"
                            label="Indirizzo Cantiere"
                            type="text"
                        />
                        <TextInput
                            name="billingAddress"
                            label="Indirizzo di Fatturazione"
                            type="text"
                        />
                    </div>

                    {/* Divider */}
                    <hr className="my-3 border-t border-secondary/30" />

                    <SelectInput
                        name="referralSource"
                        label="Fonte di Riferimento"
                        defaultValue=""
                        options={referralOptions}
                    />

                    <SubmitButton>
                        Aggiungi Cliente
                    </SubmitButton>
                </form>
            </FormCard>
        </>
    )
}