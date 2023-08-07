import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

const useAuthentication = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (session) {
    return session;
  }

  return false;
};

export default useAuthentication;
