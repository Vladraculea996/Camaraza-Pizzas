// ======================================
// Camaraza Pizzas
// Supabase
// ======================================

const SUPABASE = {

    URL: "",

    ANON_KEY: ""

};

const supabase = window.supabase.createClient(
    SUPABASE.URL,
    SUPABASE.ANON_KEY
);
