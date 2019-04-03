import { createContext } from "react";
import * as React from "react";

interface Props {
  children: any;
}

export const UserContext = createContext(null);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState({ id: 1, name: "Joris" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
