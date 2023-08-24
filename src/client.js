import { createClient } from "@supabase/supabase-js";
const URL = "https://ksiypicqvueixcldfroi.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzaXlwaWNxdnVlaXhjbGRmcm9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NTA4MTYsImV4cCI6MjAwODIyNjgxNn0.K91BxqRUHBAn9zUbXWs-8qUQNzODQaIWIJ_GCxjdNIA";

export const supabase = createClient(URL, API_KEY);
