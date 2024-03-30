import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextData {
  user: string;
  updateUser: (email: string) => void;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState("");

  const updateUser = (email: string) => {
    setUser(email);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
