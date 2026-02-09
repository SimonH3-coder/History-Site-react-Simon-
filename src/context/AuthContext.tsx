import { createContext, type SetStateAction } from "react";
import type { UserData } from "../types/userType.d.ts";

// TS -inteface til typer
interface AuthContextProps {
  user: UserData | null;
  setUserData: React.Dispatch<SetStateAction<UserData | null>>;
  logout: () => void;
}

// lav en context og kald den AuthContext
export const AuthContext = createContext<AuthContextProps>(undefined!);
