const courses = [
  {
    domain: 'Networking',
    description:
      'Our networking domain equips students with knowledge in network design, protocols, security, and how to implement networking solutions effectively in a business environment.',
    courses: [
      {
        type: 'Unified Course',
        title: 'CCNA + CCNP Security',
        duration: '7 Months',
        location: 'On Campus',
        prerequisites: ['Basic Networking'],
        includedCourses: ['CCNA', 'CCNP'],
        description: 'Make your career in Networking with CCNA and CCNP Security.',
        whatYouLearn: [
          {
            description:
              'This unified course will equip you with in-depth knowledge of network design, protocols, security, and how to implement these networking solutions effectively in a business environment.',
            coreConcepts: ['CCNA', 'CCNP']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After successful completion of the course, you will be a competent professional, capable of installing, supporting and troubleshooting enterprise networks.',
            jobTitles: ['Network Security Associate', 'Security Engineer']
          }
        ],
        popularity: 2
      },
      {
        type: 'Essential Course',
        title: 'Network Security',
        duration: '5 Months',
        location: 'Online',
        prerequisites: ['Basic Networking'],
        includedCourses: ['Network Threats', 'Security Policies and Protocols'],
        description:
          'Understand network threats and learn how to counteract with security policies and protocols.',
        whatYouLearn: [
          {
            description:
              'This course will equip you with in-depth knowledge of network threats and how to counteract with effective security policies and protocols.',
            coreConcepts: ['Network Threats', 'Security Policies and Protocols']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After successful completion of the course, you will be proficient in identifying network threats and implementing effective security measures.',
            jobTitles: ['Network Security Specialist', 'Security Consultant']
          }
        ],
        popularity: 3
      },
      // Additional Networking Courses
      {
        type: 'Essential Course',
        title: 'Network Management and Troubleshooting',
        duration: '6 Months',
        location: 'On Campus',
        prerequisites: ['Basic Networking', 'CCNA'],
        includedCourses: ['Network Troubleshooting', 'Network Monitoring'],
        description: 'Learn how to manage and troubleshoot complex networks effectively.',
        whatYouLearn: [
          {
            description:
              'This course equips you with in-depth knowledge of network management and Master troubleshooting techniques.',
            coreConcepts: ['Network Troubleshooting', 'Network Monitoring']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be skilled in managing and resolving network issues, making you a valuable asset in IT departments.',
            jobTitles: ['Network Manager', 'Network Troubleshooting Specialist']
          }
        ],
        popularity: 3
      },
      {
        type: 'Essential Course',
        title: 'Wireless Networking',
        duration: '4 Months',
        location: 'Online',
        prerequisites: ['Basic Networking'],
        includedCourses: ['Wi-Fi Technology', 'Wireless Security'],
        description:
          'Explore the world of wireless networking and learn to set up secure wireless networks.',
        whatYouLearn: [
          {
            description:
              'This course provides comprehensive knowledge of Wi-Fi technology and how to implement secure wireless networks.',
            coreConcepts: ['Wi-Fi Technology', 'Wireless Security']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be capable of designing and deploying secure wireless infrastructures.',
            jobTitles: ['Wireless Network Specialist', 'Network Security Engineer']
          }
        ],
        popularity: 2
      },
      {
        type: 'Master Course',
        title: 'Network Virtualization',
        duration: '8 Months',
        location: 'On Campus',
        prerequisites: ['Basic Networking', 'CCNA'],
        includedCourses: ['Virtualization Technologies', 'Network Virtualization Solutions'],
        description:
          'Learn about network virtualization technologies and their applications in modern networks.',
        whatYouLearn: [
          {
            description:
              'This course covers various network virtualization technologies and their implementation in real-world scenarios.',
            coreConcepts: ['Virtualization Technologies', 'Network Virtualization Solutions']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be proficient in designing and managing virtualized network environments.',
            jobTitles: ['Network Virtualization Specialist', 'Virtualization Solutions Architect']
          }
        ],
        popularity: 4
      },
      {
        type: 'Master Course',
        title: 'Cloud Networking',
        duration: '6 Months',
        location: 'Online',
        prerequisites: ['Basic Networking', 'CCNA'],
        includedCourses: ['Cloud Infrastructure', 'Network Integration with Cloud Services'],
        description:
          'Explore networking in cloud environments and learn to integrate on-premises networks with cloud services.',
        whatYouLearn: [
          {
            description:
              'This course provides insights into cloud infrastructure and how to design networks that seamlessly integrate with cloud platforms.',
            coreConcepts: ['Cloud Infrastructure', 'Network Integration with Cloud Services']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be skilled in managing hybrid networks that span both on-premises and cloud environments.',
            jobTitles: ['Cloud Network Specialist', 'Cloud Integration Engineer']
          }
        ],
        popularity: 3
      },
      {
        type: 'Unified Course',
        title: 'Network Automation and SDN',
        duration: '9 Months',
        location: 'On Campus',
        prerequisites: ['Basic Networking', 'CCNA'],
        includedCourses: ['Network Automation Tools', 'Software-Defined Networking (SDN)'],
        description:
          'Master the art of network automation and explore the world of software-defined networking.',
        whatYouLearn: [
          {
            description:
              'This unified course covers network automation tools and SDN technologies to streamline network management.',
            coreConcepts: ['Network Automation Tools', 'Software-Defined Networking (SDN)']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be capable of automating network tasks and implementing SDN solutions in enterprise networks.',
            jobTitles: ['Network Automation Engineer', 'SDN Specialist']
          }
        ],
        popularity: 4
      }
    ]
  },
  {
    domain: 'Cybersecurity',
    description:
      'Our cybersecurity courses prepare you to protect systems and networks from cyber threats. You will gain knowledge about various cyber threats, security policies, and procedures.',
    courses: [
      {
        type: 'Essential Course',
        title: 'Cybersecurity Fundamentals',
        duration: '4 Months',
        location: 'Online',
        prerequisites: [],
        includedCourses: ['Introduction to Cyber Threats', 'Security Policies and Procedures'],
        description:
          'This course provides a comprehensive introduction to the field of cybersecurity.',
        whatYouLearn: [
          {
            description:
              'In this course, you will learn about various cyber threats and how to develop and implement effective security policies and procedures to protect systems and networks.',
            coreConcepts: ['Cyber Threats', 'Security Policies and Procedures']
          }
        ],
        whatYouBecome: [
          {
            description:
              'Upon completing the course, you will be equipped with the necessary skills to protect network infrastructures, identify vulnerabilities, and mitigate security threats. You will be prepared to work in a variety of roles in the cybersecurity field.',
            jobTitles: ['Cybersecurity Analyst', 'Information Security Specialist']
          }
        ],
        popularity: 4
      },
      {
        type: 'Master Course',
        title: 'Ethical Hacking',
        duration: '6 Months',
        location: 'On Campus',
        prerequisites: ['Cybersecurity Fundamentals'],
        includedCourses: ['Penetration Testing', 'System Exploits and Security'],
        description:
          'Learn the techniques of Ethical Hacking and become a professional in identifying system vulnerabilities.',
        whatYouLearn: [
          {
            description:
              'In this course, you will understand how to identify system vulnerabilities and mitigate them using ethical hacking techniques.',
            coreConcepts: ['Penetration Testing', 'System Exploits and Security']
          }
        ],
        whatYouBecome: [
          {
            description:
              'Upon completing the course, you will be capable of identifying and rectifying system vulnerabilities, preparing you for a variety of roles in the cybersecurity field.',
            jobTitles: ['Ethical Hacker', 'Security Consultant']
          }
        ],
        popularity: 4
      },
      // Additional Cybersecurity Courses
      {
        type: 'Unified Course',
        title: 'Cybersecurity Management and Governance',
        duration: '9 Months',
        location: 'On Campus',
        prerequisites: ['Cybersecurity Fundamentals'],
        includedCourses: ['Risk Management', 'Compliance and Legal Aspects'],
        description:
          'Learn the principles of cybersecurity management and governance to protect organizations from cyber threats effectively.',
        whatYouLearn: [
          {
            description:
              'This unified course covers risk management and legal aspects related to cybersecurity, enabling you to create robust security policies.',
            coreConcepts: ['Risk Management', 'Compliance and Legal Aspects']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be equipped to manage and govern cybersecurity strategies in organizations.',
            jobTitles: ['Cybersecurity Manager', 'Security Governance Specialist']
          }
        ],
        popularity: 3
      },
      {
        type: 'Master Course',
        title: 'Incident Response and Digital Forensics',
        duration: '8 Months',
        location: 'On Campus',
        prerequisites: ['Cybersecurity Fundamentals'],
        includedCourses: ['Incident Handling', 'Digital Forensics Techniques'],
        description:
          'Dive into the world of incident response and digital forensics to investigate and respond to cyber incidents.',
        whatYouLearn: [
          {
            description:
              'This course provides hands-on experience in incident handling and digital forensics techniques.',
            coreConcepts: ['Incident Handling', 'Digital Forensics Techniques']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be proficient in handling cybersecurity incidents and conducting digital investigations.',
            jobTitles: ['Incident Response Specialist', 'Digital Forensics Investigator']
          }
        ],
        popularity: 4
      },
      {
        type: 'Master Course',
        title: 'Network Security Architecture',
        duration: '6 Months',
        location: 'Online',
        prerequisites: ['Cybersecurity Fundamentals'],
        includedCourses: ['Network Design Principles', 'Security Appliance Integration'],
        description:
          'Learn to design and implement secure network architectures to safeguard critical data.',
        whatYouLearn: [
          {
            description:
              'This course covers network design principles and how to integrate security appliances for robust network security.',
            coreConcepts: ['Network Design Principles', 'Security Appliance Integration']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be capable of designing secure network infrastructures for organizations.',
            jobTitles: ['Network Security Architect', 'Security Appliance Specialist']
          }
        ],
        popularity: 3
      },
      {
        type: 'Unified Course',
        title: 'Cloud Security',
        duration: '10 Months',
        location: 'On Campus',
        prerequisites: ['Cybersecurity Fundamentals'],
        includedCourses: ['Cloud Security Technologies', 'Security in Cloud Environments'],
        description: 'Explore security challenges and best practices in cloud environments.',
        whatYouLearn: [
          {
            description:
              'This unified course provides insights into cloud security technologies and how to secure data and applications in the cloud.',
            coreConcepts: ['Cloud Security Technologies', 'Security in Cloud Environments']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be skilled in implementing cloud security solutions for organizations.',
            jobTitles: ['Cloud Security Specialist', 'Cloud Security Consultant']
          }
        ],
        popularity: 4
      },
      {
        type: 'Essential Course',
        title: 'Cybersecurity in IoT (Internet of Things)',
        duration: '5 Months',
        location: 'Online',
        prerequisites: ['Cybersecurity Fundamentals'],
        includedCourses: ['IoT Security Risks', 'Securing Connected Devices'],
        description:
          'Understand the security risks associated with IoT and learn to secure interconnected devices.',
        whatYouLearn: [
          {
            description:
              'This course covers IoT security risks and how to implement security measures for connected devices.',
            coreConcepts: ['IoT Security Risks', 'Securing Connected Devices']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be equipped to secure IoT ecosystems from potential cyber threats.',
            jobTitles: ['IoT Security Specialist', 'Connected Devices Security Analyst']
          }
        ],
        popularity: 2
      }
    ]
  },
  {
    domain: 'Data Science',
    description:
      'Our data science domain provides foundational knowledge about analyzing large data sets, making data-driven decisions, and effectively visualizing data.',
    courses: [
      {
        type: 'Essential Course',
        title: 'Introduction to Data Science',
        duration: '4 Months',
        location: 'Online',
        prerequisites: [],
        includedCourses: ['Data Analysis Methods', 'Data Visualization'],
        description:
          'In this introductory course, you will gain insights into the field of Data Science.',
        whatYouLearn: [
          {
            description:
              'In this course, you will understand the importance of Data Analysis methods and learn the art of visualizing data effectively.',
            coreConcepts: ['Data Analysis Methods', 'Data Visualization']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After successfully completing the course, you will be well-equipped to analyze large datasets, make data-driven decisions, and present data in a meaningful way. This knowledge can lead to various roles in the data science field.',
            jobTitles: ['Data Analyst', 'Data Scientist']
          }
        ],
        popularity: 3
      },
      {
        type: 'Unified Course',
        title: 'Machine Learning + AI',
        duration: '10 Months',
        location: 'On Campus',
        prerequisites: ['Introduction to Data Science'],
        includedCourses: ['Machine Learning Principles', 'AI Techniques and Applications'],
        description:
          'Make a leap into the future with Machine Learning and AI. Understand the principles of Machine Learning and delve deep into AI techniques and applications.',
        whatYouLearn: [
          {
            description:
              'This unified course will equip you with knowledge in Machine Learning principles and applications, as well as a comprehensive understanding of AI techniques.',
            coreConcepts: ['Machine Learning Principles', 'AI Techniques and Applications']
          }
        ],
        whatYouBecome: [
          {
            description:
              'Upon successful completion of the course, you will be a competent professional in the field of Machine Learning and AI, capable of building intelligent systems.',
            jobTitles: ['Machine Learning Engineer', 'AI Specialist']
          }
        ],
        popularity: 4
      },
      // Additional Data Science Courses
      {
        type: 'Master Course',
        title: 'Big Data Analytics',
        duration: '8 Months',
        location: 'On Campus',
        prerequisites: ['Introduction to Data Science'],
        includedCourses: ['Hadoop Framework', 'Data Processing at Scale'],
        description: 'Learn to process and analyze massive datasets using the Hadoop framework.',
        whatYouLearn: [
          {
            description:
              'This course covers the Hadoop framework and techniques for processing and analyzing big data at scale.',
            coreConcepts: ['Hadoop Framework', 'Data Processing at Scale']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be skilled in handling big data challenges for data-driven decision-making.',
            jobTitles: ['Big Data Analyst', 'Data Engineer']
          }
        ],
        popularity: 4
      },
      {
        type: 'Master Course',
        title: 'Natural Language Processing (NLP)',
        duration: '6 Months',
        location: 'Online',
        prerequisites: ['Introduction to Data Science'],
        includedCourses: ['Text Preprocessing', 'Sentiment Analysis'],
        description:
          'Explore the field of Natural Language Processing and analyze textual data effectively.',
        whatYouLearn: [
          {
            description:
              'This course provides insights into text preprocessing and sentiment analysis techniques for NLP.',
            coreConcepts: ['Text Preprocessing', 'Sentiment Analysis']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be equipped to work with textual data and implement NLP techniques in various applications.',
            jobTitles: ['NLP Specialist', 'Text Analytics Engineer']
          }
        ],
        popularity: 3
      }
    ]
  },
  {
    domain: 'Web Development',
    description:
      'Our web development domain provides a comprehensive understanding of full stack web development, enabling students to create visually appealing websites and robust server-side applications.',
    courses: [
      {
        type: 'Unified Course',
        title: 'Full Stack Web Development',
        duration: '12 Months',
        location: 'On Campus',
        prerequisites: [],
        includedCourses: ['Front-End Development', 'Back-End Development'],
        description: 'Master both front-end and back-end development with our unified course.',
        whatYouLearn: [
          {
            description:
              'In this unified course, you will learn to create visually appealing websites and robust server-side applications.',
            coreConcepts: ['Front-End Development', 'Back-End Development']
          }
        ],
        whatYouBecome: [
          {
            description:
              'Graduates of this course are proficient in creating complete web solutions, managing databases, and developing user interfaces. These skills prepare you for a variety of web development roles.',
            jobTitles: ['Full Stack Developer', 'Web Developer']
          }
        ],
        popularity: 4
      },
      {
        type: 'Essential Course',
        title: 'Introduction to Web Design',
        duration: '3 Months',
        location: 'Online',
        prerequisites: [],
        includedCourses: ['HTML & CSS', 'Design Principles'],
        description:
          'Learn the fundamentals of web design with HTML & CSS and principles of design.',
        whatYouLearn: [
          {
            description:
              'In this course, you will learn how to design and create beautiful websites using HTML & CSS, and learn the principles of good design.',
            coreConcepts: ['HTML & CSS', 'Design Principles']
          }
        ],
        whatYouBecome: [
          {
            description:
              'Upon completing the course, you will be equipped with the necessary skills to create and design visually appealing websites. You will be prepared to work in a variety of roles in the web design field.',
            jobTitles: ['Web Designer', 'Front-End Developer']
          }
        ],
        popularity: 3
      },
      // Additional Web Development Courses
      {
        type: 'Unified Course',
        title: 'Master Front-End Development',
        duration: '9 Months',
        location: 'On Campus',
        prerequisites: ['Introduction to Web Design'],
        includedCourses: ['Master HTML & CSS', 'JavaScript Frameworks'],
        description:
          'Take your front-end development skills to the next level with Master techniques and JavaScript frameworks.',
        whatYouLearn: [
          {
            description:
              'This unified course covers Master HTML & CSS techniques and popular JavaScript frameworks to create interactive web applications.',
            coreConcepts: ['Master HTML & CSS', 'JavaScript Frameworks']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be capable of building dynamic and feature-rich web applications using modern front-end technologies.',
            jobTitles: ['Front-End Developer', 'Web Application Developer']
          }
        ],
        popularity: 3
      },
      {
        type: 'Unified Course',
        title: 'Back-End Development with Node.js',
        duration: '9 Months',
        location: 'On Campus',
        prerequisites: ['Introduction to Web Design'],
        includedCourses: ['Node.js Fundamentals', 'Server-Side Development'],
        description:
          'Learn to build powerful server-side applications using Node.js and related technologies.',
        whatYouLearn: [
          {
            description:
              'This unified course covers Node.js fundamentals and server-side development techniques to create robust and scalable web applications.',
            coreConcepts: ['Node.js Fundamentals', 'Server-Side Development']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be skilled in building server-side applications and RESTful APIs using Node.js and related frameworks.',
            jobTitles: ['Node.js Developer', 'Back-End Web Developer']
          }
        ],
        popularity: 4
      },
      {
        type: 'Essential Course',
        title: 'User Experience (UX) Design',
        duration: '4 Months',
        location: 'Online',
        prerequisites: [],
        includedCourses: ['UX Principles', 'Prototyping and User Testing'],
        description:
          'Understand the principles of user experience design and create intuitive and user-friendly interfaces.',
        whatYouLearn: [
          {
            description:
              'This course covers UX design principles and techniques for prototyping and user testing to create exceptional user experiences.',
            coreConcepts: ['UX Principles', 'Prototyping and User Testing']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be equipped to design user-centric interfaces that enhance the overall user experience.',
            jobTitles: ['UX Designer', 'User Interface (UI) Developer']
          }
        ],
        popularity: 3
      },
      {
        type: 'Essential Course',
        title: 'Web Accessibility',
        duration: '3 Months',
        location: 'Online',
        prerequisites: ['Introduction to Web Design'],
        includedCourses: ['Web Accessibility Standards', 'Inclusive Design'],
        description: 'Learn to create accessible websites and ensure inclusivity for all users.',
        whatYouLearn: [
          {
            description:
              'This course covers web accessibility standards and techniques for inclusive design to make websites usable for all users.',
            coreConcepts: ['Web Accessibility Standards', 'Inclusive Design']
          }
        ],
        whatYouBecome: [
          {
            description:
              'After completing the course, you will be skilled in implementing web accessibility features to ensure an inclusive web experience for all users.',
            jobTitles: ['Web Accessibility Specialist', 'Inclusive Web Designer']
          }
        ],
        popularity: 2
      }
    ]
  }
]

export default courses
