const courses = [
  {
    domain: 'Networking',
    courses: [
      {
        type: 'Unified Course',
        title: 'CCNA + CCNP Security',
        duration: '7 Months, On Campus',
        includedCourses: ['CCNA', 'CCNP'],
        description: 'Make your career in Networking with CCNA and CCNP Security.',
        popularity: 2
      },
      {
        type: 'Essential Course',
        title: 'Network Fundamentals',
        duration: '3 Months, Online',
        includedCourses: ['Basic Networking Concepts', 'Network Protocols'],
        description: 'This course will help you to understand the basics of Networking.',
        popularity: 3
      },
      {
        type: 'Master Course',
        title: 'Network Design and Architecture',
        duration: '9 Months, On Campus',
        includedCourses: ['Network Infrastructure Planning', 'Network Security Design'],
        description:
          'From the basics to the advanced, this course covers it all. You will learn everything about Network Design and Architecture.',
        popularity: 5
      }
    ]
  },
  {
    domain: 'Cybersecurity',
    courses: [
      {
        type: 'Essential Course',
        title: 'Cybersecurity Fundamentals',
        duration: '4 Months, Online',
        includedCourses: ['Introduction to Cyber Threats', 'Security Policies and Procedures'],
        description:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus odio a sapien feugiat, sed convallis dui consectetur.',
        popularity: 4
      },
      {
        type: 'Master Course',
        title: 'Ethical Hacking and Penetration Testing',
        duration: '8 Months, On Campus',
        includedCourses: ['Web Application Security', 'Wireless Network Security'],
        description: 'Maecenas luctus mauris non nunc auctor ullamcorper.',
        popularity: 5
      },
      {
        type: 'Specialist Course',
        title: 'Digital Forensics and Incident Response',
        duration: '6 Months, Online',
        includedCourses: ['Forensic Investigation Techniques', 'Malware Analysis'],
        description: 'Aenean dictum gravida est, vel egestas turpis tristique sit amet.',
        popularity: 3
      }
    ]
  },
  {
    domain: 'Data Science',
    courses: [
      {
        type: 'Essential Course',
        title: 'Introduction to Data Science',
        duration: '4 Months, Online',
        includedCourses: ['Data Analysis Methods', 'Data Visualization'],
        description: 'Nullam viverra odio et nisi rhoncus consequat.'
      },
      {
        type: 'Master Course',
        title: 'Big Data Analytics',
        duration: '9 Months, On Campus',
        includedCourses: ['Hadoop and MapReduce', 'Machine Learning with Big Data'],
        description: 'Donec dapibus urna a gravida efficitur.'
      },
      {
        type: 'Specialist Course',
        title: 'Natural Language Processing',
        duration: '6 Months, Online',
        includedCourses: ['Text Preprocessing Techniques', 'Sentiment Analysis'],
        description:
          'Integer fermentum, urna in consectetur varius, ligula nisl gravida magna, non laoreet massa ligula ac velit.'
      }
    ]
  },
  {
    domain: 'Web Development',
    courses: [
      {
        type: 'Unified Course',
        title: 'Full Stack Web Development',
        duration: '12 Months, On Campus',
        includedCourses: ['Front-End Development', 'Back-End Development'],
        description: 'Fusce Techboxx Man.'
      },
      {
        type: 'Essential Course',
        title: 'Front-End Development',
        duration: '6 Months, Online',
        includedCourses: ['HTML', 'CSS', 'JavaScript'],
        description: 'This course will help you to understand the basics of Front-End Development.'
      },
      {
        type: 'Master Course',
        title: 'Back-End Development',
        duration: '6 Months, On Campus',
        includedCourses: ['Node.js', 'Express.js', 'MongoDB'],
        description: 'This course will help you to understand the basics of Back-End Development.'
      }
    ]
  }
]

export default courses
