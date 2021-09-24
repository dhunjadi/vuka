import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userList] = useState([
    {
      id: 1,
      email: "iivanic@vuka.hr",
      password: "vukastudent",
      fName: "Ivan",
      lName: "Ivanic",
      status: "student",
      study: "hospitality",
      year: 2,
      books : [],
      classes: [
        {
          title: 'Basic Economics I',
          semester: 1,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Business Mathematics I',
          semester: 1,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Computer Science in Business I',
          semester: 1,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Fundamentals of Tourism',
          semester: 1,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Introduction to Professional and Scientific Work',
          semester: 1,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Physical Education (PE) (1/4)',
          semester: 1,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 0
        },
        {
          title: 'Tourism Geography I',
          semester: 1,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Basic Economics II',
          semester: 2,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Business Law',
          semester: 2,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Business Mathematics II',
          semester: 2,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Tourism Geography I',
          semester: 1,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Computer Science in Business II',
          semester: 2,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Physical Education (PE) (2/4)',
          semester: 2,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 0
        },
        {
          title: 'Tourism Economics',
          semester: 2,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Tourism Geography II',
          semester: 2,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Tourism Geography II',
          semester: 2,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        }
        
      ]
    },
    {
      id: 2,
      email: "mmarkovic@vuka.hr",
      password: "vukaprof",
      fName: "Marko",
      lName: "Markovic",
      status: "professor",
      study: "professor",
      year: 3,
      books : []
    },
    {
      id: 3,
      email: "admin@vuka.hr",
      password: "vukaadmin",
      fName: "Admin",
      lName: "Adminic",
      status: "admin",
      study: "admin",
      year: 5,
      books : []
    },
  ]);

  const [loggedInUser, setLoggedInUser] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("my-user");
    if (data) {
      setLoggedInUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-user", JSON.stringify(loggedInUser));
  });

  return (
    <UserContext.Provider value={{ userList, loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
