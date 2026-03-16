// Images
import Pavalsoftware from "../../assets/projects/pavalsoftware.png";
import Cogniitech from "../../assets/projects/cogniitech.png";
import Exceed from "../../assets/projects/exceed.png";
import KrIndustries from "../../assets/projects/kr industries.png";
import Skilloreawebsite from "../../assets/projects/skilloreawebsite.png";
import Magizhal from "../../assets/projects/magizhalm.png";
import Beliar from "../../assets/projects/beliar.png";
import Alaado from "../../assets/projects/alaado.png";
import Ktig from "../../assets/projects/ktig.png";
import KovaiTechnidhi from "../../assets/projects/kovaitechnidhi.png";
import BrAcademy from "../../assets/projects/bracademy.png";

export const projects = [
  {
    id: "paval",
    name: "Paval Software",
    desc: "Full Stack E-Commerce Platform",
    fullDesc:
      "Developed a full-stack e-commerce application using Next.js, MongoDB, Redux Toolkit, and Cloudinary. Implemented secure authentication, product management, shopping cart, and order processing. Optimized performance with server-side rendering and efficient state management. Integrated Cloudinary for scalable image storage and fast delivery.",

    img: Pavalsoftware,

    tech: ["Next.js", "MongoDB", "Redux Toolkit", "Cloudinary"],

    live: "https://www.pavalsoftware.com/",

    features: [
      "User authentication & authorization",
      "Product listing and management",
      "Shopping cart functionality",
      "Order management system",
      "Image upload using Cloudinary",
      "Responsive design for all devices"
    ],

    highlights: [
      "SEO optimized using Next.js",
      "Efficient state management with Redux Toolkit",
      "Fast loading performance",
      "Scalable architecture"
    ],

    challenges: [
      "Managing global state for cart and user",
      "Handling image uploads efficiently",
      "Ensuring fast page load"
    ],

    solutions: [
      "Used Redux Toolkit for state management",
      "Integrated Cloudinary for optimized images",
      "Implemented SSR for performance improvement"
    ]
  },
  {
    id: "cogniitech",
    name: "Cogniitech",
    desc: "Enterprise MERN Web Application",
    fullDesc:
      "Built a scalable full-stack MERN application with Tailwind CSS. Developed REST APIs, dynamic content, and optimized MongoDB queries for performance.",
    img: Cogniitech,
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    live: "https://cogniitec.com",
    features: [
      "REST API integration",
      "Responsive UI",
      "Reusable components",
      "Optimized backend"
    ],
    highlights: [
      "Clean architecture",
      "Fast UI"
    ],
    challenges: [
      "API performance",
      "Responsive design"
    ],
    solutions: [
      "Optimized queries",
      "Used Tailwind"
    ]
  },
  {
    id: "alaado",
    name: "Alaado",
    desc: "Admin Dashboard",
    fullDesc:
      "Developed a modern admin dashboard application to manage users, data, and system activities efficiently. Built using React for a component-based architecture and Node.js for backend services, with MongoDB for data storage. The application includes authentication, role-based access control, and real-time analytics. Focused on creating reusable components, smooth user experience, and a clean responsive interface.",

    img: Alaado,

    tech: ["React", "Node.js", "MongoDB"],

    live: "https://alaadoapp.ktig.info/",

    features: [
      "User authentication and role-based access control",
      "Dynamic dashboard with analytics and reporting",
      "Reusable React components for scalability",
      "API integration for real-time data handling",
      "Responsive UI using modern design principles",
      "Efficient state management and data flow"
    ],

    highlights: [
      "Component-based architecture using React",
      "Improved system monitoring with dashboards",
      "Clean and intuitive user interface",
      "Optimized performance for smooth user experience"
    ]
  },
  {
    id: "kr-industries",
    name: "KR Industries",
    desc: "Business Website",
    fullDesc:
      "Developed a responsive business website to showcase company services and product offerings. Built using React with a component-based structure and Bootstrap for responsive design. Implemented a clean UI with easy navigation and a contact system to improve user engagement. Focused on performance, accessibility, and a smooth user experience across devices.",

    img: KrIndustries,

    tech: ["React", "Bootstrap"],

    live: "http://13.202.193.152:2004/",

    features: [
      "Responsive design for all screen sizes",
      "Product and service showcase sections",
      "Contact form for user enquiries",
      "Reusable React components",
      "Clean and user-friendly interface"
    ],

    highlights: [
      "Improved online presence for business",
      "Optimized UI for better user experience",
      "Mobile-friendly design"
    ]
  },
  {
    id: "skillorea",
    name: "Skillorea",
    desc: "Education Platform",
    fullDesc:
      "Developed a comprehensive education platform for Skillorea to showcase courses, training programs, and enquiry management. Built using React with a component-based architecture and Redux for efficient state management. Focused on delivering a smooth user experience with responsive design, dynamic content rendering, and easy navigation. The platform helps users explore courses and connect with the organization seamlessly.",

    img: Skilloreawebsite,

    tech: ["React", "Redux"],

    live: "https://www.skillorea.com",

    features: [
      "Course listing and program showcase",
      "Dynamic content rendering",
      "Enquiry and contact management system",
      "Reusable React components",
      "Responsive design for all devices",
      "State management using Redux"
    ],

    highlights: [
      "Flagship product for client",
      "Improved user engagement and enquiries",
      "Clean and intuitive user interface",
      "Scalable component-based architecture"
    ]
  },
  {
    id: "magizhal",
    name: "Magizhal",
    desc: "CRM System",
    fullDesc:
      "Developed a CRM application for managing gold loan and insurance loan operations. The system helps track clients, leads, and tasks efficiently, improving business workflow and communication. Built using React and Node.js with a focus on usability, real-time updates, and a clean interface for handling financial services data.",

    img: Magizhal,

    tech: ["React", "Node.js"],

    live: "https://www.magizham.ktig.info/",

    features: [
      "Client and lead management system",
      "Loan tracking for gold and insurance services",
      "Task and follow-up management",
      "Real-time data updates",
      "Responsive and user-friendly interface"
    ],

    highlights: [
      "Streamlined loan processing workflow",
      "Improved client tracking and follow-ups",
      "Clean dashboard for managing financial data",
      "Efficient data handling and performance"
    ]
  },
  {
    id: "beliar",
    name: "Beliar",
    desc: "Room Booking Admin Panel",
    fullDesc:
      "Developed an admin panel for managing room bookings and reservations. The system allows administrators to monitor bookings, manage customer data, and analyze performance through visual dashboards. Built using React with Chart.js for data visualization, focusing on usability, real-time insights, and efficient management of booking operations.",

    img: Beliar,

    tech: ["React", "Chart.js"],

    live: "http://3.111.193.110:2003/",

    features: [
      "Room booking and reservation management",
      "Customer and booking data tracking",
      "Dashboard with analytics and charts",
      "Real-time data updates",
      "User-friendly admin interface"
    ],

    highlights: [
      "Improved booking management process",
      "Visual insights using charts and dashboards",
      "Efficient handling of customer data",
      "Clean and responsive admin UI"
    ]
  },
  {
    id: "exceed",
    name: "Exceed",
    desc: "Corporate Website",
    fullDesc:
      "Developed a modern corporate website to showcase company services and information. Built using React with a focus on responsive design, smooth animations, and clean user interface. The website ensures easy navigation and a consistent user experience across all devices.",

    img: Exceed,

    tech: ["React"],

    live: "http://13.202.193.152:2005/",

    features: [
      "Responsive design for all devices",
      "Smooth UI animations",
      "Service and company information sections",
      "Reusable React components",
      "Clean and user-friendly layout"
    ],

    highlights: [
      "Modern and professional UI design",
      "Improved user experience with animations",
      "Mobile-friendly layout",
      "Optimized performance"
    ]
  },
  {
    id: "ktig",
    name: "KTIG",
    desc: "E-Commerce Platform",
    fullDesc:
      "Developed a complete e-commerce platform to manage products, customer interactions, and order processing. Built using Next.js for optimized performance and MongoDB for data management. Implemented features like product listing, shopping cart, checkout process, and admin panel for managing operations. Focused on scalability, performance, and smooth user experience.",

    img: Ktig,

    tech: ["Next.js", "MongoDB"],

    live: "https://www.ktig.org.in/",

    features: [
      "Product listing and management",
      "Shopping cart and checkout system",
      "Admin panel for managing products and orders",
      "Dynamic content rendering",
      "Responsive design for all devices"
    ],

    highlights: [
      "End-to-end e-commerce workflow",
      "Optimized performance using Next.js",
      "Scalable data management with MongoDB",
      "User-friendly shopping experience"
    ]
  },
  {
    id: "kovaitechnidhi",
    name: "Kovai Technidhi",
    desc: "Finance Platform",
    fullDesc:
      "Developed a finance website to showcase investment services and financial solutions. Built using React with a focus on clean UI, responsive design, and easy navigation. The platform helps users understand financial offerings and connect with the organization efficiently.",

    img: KovaiTechnidhi,

    tech: ["React"],

    live: "https://www.kovaitechnidhi.com/",

    features: [
      "Service and investment information pages",
      "Responsive design for all devices",
      "User-friendly navigation",
      "Contact and enquiry system",
      "Reusable React components"
    ],

    highlights: [
      "Clean and professional UI design",
      "Improved user engagement",
      "Mobile-friendly layout",
      "Smooth user experience"
    ]
  },
  {
    id: "bracademy",
    name: "BR Academy",
    desc: "Education Platform",
    fullDesc:
      "Developed an education platform to manage courses, student interactions, and enquiries. Built using React for the frontend and Node.js for backend services. The platform includes course listings, student dashboard, and enquiry management system, focusing on usability and efficient data handling.",

    img: BrAcademy,

    tech: ["React", "Node.js"],

    live: "https://bracadmy.com/",

    features: [
      "Course listing and management",
      "Student dashboard",
      "Enquiry and contact system",
      "Responsive user interface",
      "API integration for data handling"
    ],

    highlights: [
      "Improved student interaction",
      "Efficient course management",
      "Clean and intuitive UI",
      "Scalable application structure"
    ]
  },
];