"use client";

import { createContext, useContext, useState, ReactNode } from "react";



interface UserContextType {
  user: User | null;
  update: (user: User) => void;
  reset: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
  initialUser?: User;
}

export function UserProvider({ children, initialUser }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(initialUser || null);

  const update = (user: User) => {
    setUser(user);
  };
  const reset = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        update,
        reset,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
