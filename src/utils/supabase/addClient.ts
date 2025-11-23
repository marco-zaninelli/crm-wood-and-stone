'use server'

import {createClient} from '@/utils/supabase/server'
import {revalidatePath} from 'next/cache'

export async function addClient(formData: FormData) {
    const supabase = await createClient()

    const getValue = (key: string) => {
        const value = formData.get(key) as string
        if (!value || value.trim() === '') {
            return null
        }
        return value.trim()
    }

    const {error} = await supabase
        .from('clients')
        .insert({
            // MANDATORY fields
            full_name: formData.get('full name') as string,
            phone: formData.get('phone') as string,

            // OPTIONAL fields
            partner_name: getValue('partner name'),
            partner_phone: getValue('partner phone'),
            email: getValue('email'),
            partner_email: getValue('partner email'),
            billing_address: getValue('billing address'),
            project_address: getValue('project address'),
            referral_source: getValue('referral source')
        })

    if (error) {
        console.error('Errore inserimento:', error)
        return
    }

    revalidatePath('/')
}