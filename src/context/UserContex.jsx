import { createContext, useState, useEffect } from "react";
import userList from "../components/Login/userList";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users] = useState(userList);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [showEditGradesModal, setShowEditGradesModal] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("my-user");
    if (data) {
      setLoggedInUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-user", JSON.stringify(loggedInUser));
  });

  const UserContextValue = {
    users,
    loggedInUser,
    setLoggedInUser,
    showEditGradesModal,
    setShowEditGradesModal,
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};
