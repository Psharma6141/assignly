const employees = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "emp1@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Complete UI Design",
        description: "Design dashboard UI using Tailwind",
        date: "2025-01-05",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve responsive issue in navbar",
        date: "2025-01-06",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss project requirements",
        date: "2025-01-07",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    name: "Neha Verma",
    email: "emp2@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Create Login Page",
        description: "Build login page using React",
        date: "2025-01-04",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Integrate login API",
        date: "2025-01-06",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review teammate code",
        date: "2025-01-08",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    name: "Rohit Singh",
    email: "emp3@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database Design",
        description: "Create MongoDB schema",
        date: "2025-01-03",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Auth Middleware",
        description: "JWT authentication middleware",
        date: "2025-01-05",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Error Handling",
        description: "Handle API errors properly",
        date: "2025-01-07",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    name: "Priya Mehta",
    email: "emp4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Write Documentation",
        description: "Prepare project documentation",
        date: "2025-01-06",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Testing",
        description: "Test all features",
        date: "2025-01-08",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy App",
        description: "Deploy project on Render",
        date: "2025-01-09",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    name: "Karan Patel",
    email: "emp5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create Footer",
        description: "Design footer component",
        date: "2025-01-04",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Performance",
        description: "Improve loading speed",
        date: "2025-01-06",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "SEO Setup",
        description: "Add meta tags for SEO",
        date: "2025-01-07",
        category: "SEO",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = [
  {
    id: 101,
    name: "Admin Rahul",
    email: "admin@gmail.com",
    password: "123"
  }
];


export const setLocalStorage = () =>{
   localStorage.setItem('employees', JSON.stringify(employees))
   localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
  const employee = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

return{employee,admin}
  
}