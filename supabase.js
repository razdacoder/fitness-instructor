import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://prsrczxwodfcpvcoasra.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByc3Jjenh3b2RmY3B2Y29hc3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MTA4NDksImV4cCI6MjAwNjk4Njg0OX0.zXn7WY9Q6YFRmIx20xmuiVJe0BAjXgxfhP_0Nia3IrQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
