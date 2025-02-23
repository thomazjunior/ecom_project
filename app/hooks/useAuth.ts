import { useSession } from "next-auth/react"

interface Auth {
    loading: boolean;
    loggedIn: boolean;
    isAdmin: boolean;
}

export default function useAuth(): Auth {
  const session = useSession()
  console.log(session)
  return { 
    loading: session.status === "loading",
    loggedIn: session.status === "authenticated",
    isAdmin: false
  };
}
