import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userList] = useState([
    {
      email: "iivanic@vuka.hr",
      password: "vukastudent",
      fName: "Ivan",
      lName: "Ivanic",
      status: "student",
    },
    {
      email: "mmarkovic@vuka.hr",
      password: "vukaprof",
      fName: "Marko",
      lName: "Markovic",
      status: "professor",
    },
    {
      email: "admin@vuka.hr",
      password: "vukaadmin",
      fName: "Admin",
      lName: "Adminic",
      status: "admin",
    },
  ]);

  const [loggedInUser, setLoggedInUser] = useState([])

  return (
    <UserContext.Provider value={{ userList, loggedInUser, setLoggedInUser }}>
        {children}
    </UserContext.Provider>
  );
};
