const userList = [
    {
      id: 1,
      email: "iivanic@vuka.hr",
      password: "vukastudent",
      fName: "Ivan",
      lName: "Ivanic",
      status: "student",
      studentStatus: "Full time",
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
          title: 'Business Statistics I',
          semester: 3,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Fundamentals of Accounting I',
          semester: 3,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Fundamentals of Entrepreneurship',
          semester: 3,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Fundamentals of Marketing',
          semester: 3,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Hospitality Management (1/2)',
          semester: 3,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Physical Education (PE) (3/4)',
          semester: 3,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 0
        },
        {
          title: 'Tourism and Environment',
          semester: 3,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Business Statistics II',
          semester: 4,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Entrepreneurship in Hospitality',
          semester: 4,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Fundamentals of Accounting II',
          semester: 4,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 4
        },
        {
          title: 'Hospitality Management (2/2)',
          semester: 4,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Marketing in Hospitality',
          semester: 4,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Physical Education (PE) (4/4)',
          semester: 4,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 0
        },
        {
          title: 'Business Finances (1/2)',
          semester: 5,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Evaluation of Cultural Heritage in Tourism',
          semester: 5,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Fundamentals of Management',
          semester: 5,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Fundamentals of Special Forms of Tourism',
          semester: 5,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'International Trade',
          semester: 5,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Travel Agency Managment',
          semester: 5,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 3
        },
        {
          title: 'Business Finances (2/2)',
          semester: 6,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        {
          title: 'Final Thesis',
          semester: 6,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 6
        },
        {
          title: 'Practical Work',
          semester: 6,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 7
        },
        {
          title: 'Tourist Market Research',
          semester: 6,
          exam1: null,
          exam2: null,
          essay: null,
          presentation: null,
          ects: 5
        },
        
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
      year: 6,
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
      year: 6,
      books : []
    },
  ]

  export default userList