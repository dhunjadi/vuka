const gradesList = [
    {
        id: "1",
        classes: [
            {
            title: 'Basic Economics I',
            semester: 1,
            exam1: "4",
            exam2: "5",
            essay: "3",
            presentation: "4",
            ects: "5"
          },
          {
            title: 'Business Mathematics I',
            semester: 1,
            exam1: "5",
            exam2: "4",
            essay: "3",
            presentation: "3",
            ects: "4"
          },
          {
            title: 'Computer Science in Business I',
            semester: 1,
            exam1: "3",
            exam2: "4",
            essay: "5",
            presentation: "5",
            ects: "3"
          },
          {
            title: 'Fundamentals of Tourism',
            semester: 1,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Introduction to Professional and Scientific Work',
            semester: 1,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Physical Education (PE) (1/4)',
            semester: 1,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "0"
          },
          {
            title: 'Tourism Geography I',
            semester: 1,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
          {
            title: 'Basic Economics II',
            semester: 2,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
          {
            title: 'Business Law',
            semester: 2,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Business Mathematics II',
            semester: 2,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Computer Science in Business II',
            semester: 2,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Physical Education (PE) (2/4)',
            semester: 2,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "0"
          },
          {
            title: 'Tourism Economics',
            semester: 2,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Tourism Geography II',
            semester: 2,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Business Statistics I',
            semester: 3,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Fundamentals of Accounting I',
            semester: 3,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Fundamentals of Entrepreneurship',
            semester: 3,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Fundamentals of Marketing',
            semester: 3,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Hospitality Management (1/2)',
            semester: 3,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
          {
            title: 'Physical Education (PE) (3/4)',
            semester: 3,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "0"
          },
          {
            title: 'Tourism and Environment',
            semester: 3,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Business Statistics II',
            semester: 4,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Entrepreneurship in Hospitality',
            semester: 4,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
          {
            title: 'Fundamentals of Accounting II',
            semester: 4,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "4"
          },
          {
            title: 'Hospitality Management (2/2)',
            semester: 4,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
          {
            title: 'Marketing in Hospitality',
            semester: 4,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
          {
            title: 'Physical Education (PE) (4/4)',
            semester: 4,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "0"
          },
          {
            title: 'Business Finances (1/2)',
            semester: 5,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
          {
            title: 'Evaluation of Cultural Heritage in Tourism',
            semester: 5,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Fundamentals of Management',
            semester: 5,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Fundamentals of Special Forms of Tourism',
            semester: 5,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'International Trade',
            semester: 5,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Travel Agency Managment',
            semester: 5,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "3"
          },
          {
            title: 'Business Finances (2/2)',
            semester: 6,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
          {
            title: 'Final Thesis',
            semester: 6,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "6"
          },
          {
            title: 'Practical Work',
            semester: 6,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "7"
          },
          {
            title: 'Tourist Market Research',
            semester: 6,
            exam1: "",
            exam2: "",
            essay: "",
            presentation: "",
            ects: "5"
          },
        ]
    },
    {
        id: "2",
        classes: [
            {
              title: 'Descriptive Geometry and Technical Drawing',
              semester: 1,
              exam1: "4",
              exam2: "5",
              essay: "3",
              presentation: "4",
              ects: "5"
            },
            {
              title: 'Fundamentals of Computer Science with Practice',
              semester: 1,
              exam1: "5",
              exam2: "4",
              essay: "3",
              presentation: "3",
              ects: "4"
            },
            {
              title: 'Fundamentals of Electrical Engineering I',
              semester: 1,
              exam1: "3",
              exam2: "4",
              essay: "5",
              presentation: "5",
              ects: "5"
            },
            {
              title: 'Mathematics I',
              semester: 1,
              exam1: "2",
              exam2: "3",
              essay: "4",
              presentation: "5",
              ects: "6"
            },
            {
              title: 'Mechanics I',
              semester: 1,
              exam1: "3",
              exam2: "4",
              essay: "5",
              presentation: "5",
              ects: "5"
            },
            {
              title: 'Organisational Psychology',
              semester: 1,
              exam1: "4",
              exam2: "5",
              essay: "3",
              presentation: "3",
              ects: "2"
            },
            {
              title: 'Physical Education (PE) (1/4)',
              semester: 1,
              exam1: "3",
              exam2: "4",
              essay: "4",
              presentation: "5",
              ects: "0"
            },
            {
              title: 'Computer Aided Design (CAD)',
              semester: 2,
              exam1: "3",
              exam2: "3",
              essay: "3",
              presentation: "3",
              ects: "3"
            },
            {
              title: 'Fundamentals of Electrical Engineering II',
              semester: 2,
              exam1: "3",
              exam2: "3",
              essay: "4",
              presentation: "4",
              ects: "5"
            },
            {
              title: 'Mathematics II',
              semester: 2,
              exam1: "4",
              exam2: "4",
              essay: "4",
              presentation: "5",
              ects: "6"
            },
            {
              title: 'Mechanical Technologies',
              semester: 2,
              exam1: "4",
              exam2: "4",
              essay: "5",
              presentation: "4",
              ects: "5"
            },
            {
              title: 'Mechanics II',
              semester: 2,
              exam1: "4",
              exam2: "4",
              essay: "4",
              presentation: "3",
              ects: "5"
            },
            {
              title: 'Physical Education (PE) (2/4)',
              semester: 2,
              exam1: "5",
              exam2: "5",
              essay: "5",
              presentation: "5",
              ects: "0"
            },
            {
              title: 'Technical Materials',
              semester: 2,
              exam1: "5",
              exam2: "5",
              essay: "5",
              presentation: "3",
              ects: "3"
            },
            {
              title: 'Computer Architecture',
              semester: 3,
              exam1: "4",
              exam2: "4",
              essay: "4",
              presentation: "4",
              ects: "3"
            },
            {
              title: 'Electronics I',
              semester: 3,
              exam1: "2",
              exam2: "2",
              essay: "3",
              presentation: "4",
              ects: "5"
            },
            {
              title: 'Fundamentals of Programming',
              semester: 3,
              exam1: "4",
              exam2: "4",
              essay: "5",
              presentation: "5",
              ects: "4"
            },
            {
              title: 'Machine Elements',
              semester: 3,
              exam1: "4",
              exam2: "5",
              essay: "5",
              presentation: "4",
              ects: "5"
            },
            {
              title: 'Machine Vibrations and Dynamics',
              semester: 3,
              exam1: "4",
              exam2: "5",
              essay: "5",
              presentation: "5",
              ects: "5"
            },
            {
              title: 'Physical Education (PE) (3/4)',
              semester: 3,
              exam1: "3",
              exam2: "3",
              essay: "3",
              presentation: "4",
              ects: "0"
            },
            {
              title: 'Signals and Systems',
              semester: 3,
              exam1: "5",
              exam2: "5",
              essay: "5",
              presentation: "5",
              ects: "5"
            },
            {
              title: 'Business Statistics II',
              semester: 4,
              exam1: "",
              exam2: "",
              essay: "",
              presentation: "",
              ects: "4"
            },
            {
              title: 'Corporative Organisation and Economics',
              semester: 4,
              exam1: "4",
              exam2: "5",
              essay: "3",
              presentation: "5",
              ects: "3"
            },
            {
              title: 'Electronics II',
              semester: 4,
              exam1: "4",
              exam2: "4",
              essay: "5",
              presentation: "5",
              ects: "5"
            },
            {
              title: 'Fundamentals of Automated Regulation',
              semester: 4,
              exam1: "4",
              exam2: "3",
              essay: "2",
              presentation: "2",
              ects: "5"
            },
            {
              title: 'Logical Algebra and Digital Automata',
              semester: 4,
              exam1: "3",
              exam2: "3",
              essay: "2",
              presentation: "2",
              ects: "4"
            },
            {
              title: 'Physical Education (PE) (4/4)',
              semester: 4,
              exam1: "5",
              exam2: "5",
              essay: "5",
              presentation: "5",
              ects: "0"
            },
            {
              title: 'Pneumatics and Hydraulics',
              semester: 4,
              exam1: "4",
              exam2: "4",
              essay: "5",
              presentation: "2",
              ects: "5"
            },
            {
              title: 'Signal Processing',
              semester: 5,
              exam1: "4",
              exam2: "4",
              essay: "3",
              presentation: "5",
              ects: "5"
            },
            {
              title: 'Actuators and Grippers',
              semester: 5,
              exam1: "5",
              exam2: "5",
              essay: "5",
              presentation: "4",
              ects: "5"
            },
            {
              title: 'Business Law',
              semester: 5,
              exam1: "4",
              exam2: "3",
              essay: "3",
              presentation: "5",
              ects: "2"
            },
            {
              title: 'Computer Networks',
              semester: 5,
              exam1: "4",
              exam2: "4",
              essay: "3",
              presentation: "3",
              ects: "4"
            },
            {
              title: 'Microcontrolers',
              semester: 5,
              exam1: "3",
              exam2: "3",
              essay: "2",
              presentation: "4",
              ects: "4"
            },
            {
              title: 'Sensors',
              semester: 5,
              exam1: "3",
              exam2: "3",
              essay: "4",
              presentation: "5",
              ects: "5"
            },
            {
              title: 'Final Thesis - Mechatronics',
              semester: 6,
              exam1: "2",
              exam2: "3",
              essay: "3",
              presentation: "4",
              ects: "10"
            },
            {
              title: 'Practical Work - Mechatronics',
              semester: 6,
              exam1: "4",
              exam2: "5",
              essay: "5",
              presentation: "5",
              ects: "20"
            },
            
          ]
    },
    {
        id: "3",
        classes: []
    },
    {
        id: "4",
        classes: []
    },
]
    

export default gradesList