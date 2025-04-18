import { createClient } from '@supabase/supabase-js';

const supabaseUrl = `${import.meta.env.VITE_APIURL}`;
const supabaseKey = `${import.meta.env.VITE_APIKEY}`;

export const supabase = createClient(supabaseUrl, supabaseKey,
    {
        auth: {
          persistSession: true, // Ensure session persistence
          storage: localStorage, // Use localStorage for session storage
        },
      }
);