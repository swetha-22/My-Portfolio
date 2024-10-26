const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Swetha Paspunuri",
        description: "Hello, my name is Swetha Paspunuri, and I am a Java Full Stack Developer with over three years of experience designing and implementing scalable web applications. My expertise spans both front-end and back-end development, leveraging Java technologies such as Spring Boot, Spring MVC, Spring Security, and Hibernate to build robust, high-performance applications. On the front end, I work with frameworks like React.js, Angular, JavaScript, and TypeScript to create intuitive and responsive user interfaces. My technical skill set also includes experience with MySQL, MongoDB, and Oracle databases, ensuring efficient data management through JPA/Hibernate. I am proficient in using Python alongside Java for enhanced functionality and performance in back-end systems. Additionally, I utilize cloud platforms like AWS and GCP, as well as containerization tools like Docker and Kubernetes, to deploy applications that are both scalable and highly available. In my previous roles, I have worked within Agile environments, engaging in all stages of the software development lifecycle, from requirements gathering and design to development, testing, and deployment. I am adept at setting up CI/CD pipelines with Jenkins to automate deployment processes, and I document APIs using Swagger for maintainability and support. I am passionate about delivering high-quality software solutions and am excited to bring my skills to a dynamic and forward-thinking team.",
        photo: "../Swetha_Profile_Pic.png",
        email: "swethapaspunuri227@gmail.com",
    },

    // ============ SOCIAL LINKS ============
    socials: {
		github: "https://github.com/swetha-22",
		linkedin: "",
		instagram: "https://www.instagram.com/swetha_paspunuri",
    },

    // ============ PROJECTS ============
    projects: [
        {
			title: "Blogging Application - Spring boot application",
			description: " This is a blogging application which allows users to create the blog and we can upload the images for the blog users can also search for the blogs and provide their feedback in comment section, and user can search all the posts where they commented, many more features as such",
            technologies: "Spring boot, Spring JPA, REST API",
			github: "https://github.com/swetha-22/Blogging-Application",
            app_photo: '../blog_app.jpg'
		},
        {
			title: "MyTel Application - Microservice application",
			description: " This is a Microservice based application which allows users to Explore the mobile plan details and add a recharge plan. And also we can see the call details and friends and family contact numbers",
            technologies: " Spring_boot, Spring_JPA, REST_API, Microservices",
            app_photo: '../microservices.jpeg'
		},
        // {
		// 	title: "EffortlessOps",
		// 	description: "EffortlessOps developed using the MERN stack, revolutionizing employee monitoring processes. It is integrated with face-api.js for secure employee monitoring and also include features like payroll management, real-time attendance monitoring via randomized image captures, collaborative suite with calendars, task management, and video calls.",
        //     technologies: "React, Tailwind, Node, Express, MongoDB",
		// 	github: "https://github.com/swetha-22/EffortlessOps"
		// },

        {
			title: "AutoNexus",
			description: "Auto Nexus is a Full Stack Vehicle Care Management System providing a one-stop solution for vehicle management. Features include service, insurance, and pollution check notifications, predictive maintenance alerts, weather condition handling tips, and a comprehensive vehicle parts database.",
			technologies: "React, Bootstrap, Node, Express, MongoDB",
			github: "https://github.com/swetha-22/Auto-nexus",
            app_photo: '../autonexus.gif'
		},
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Texas A&M University-Commerce, Texas",
            degree: "Master of Science in Computer Science",
            duration: "",
            image: "tamu.webp"
        },
        {
            school: "Sphoorthy Engineering College (JNTUH)",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            duration: "",
            image: "sph.webp"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Java Full Stack Developer",
            company: "Cardinal Health, TX, USA",
            duration: "January 2024 - Present",
            image: "cahe.webp",
            descriptions: [
                "Developed robust RESTful APIs with Spring Boot, improving response times by 30% and enhancing backend communication, which boosted user satisfaction by 20%.",
                "Created a dynamic, responsive user interface with React, reducing user dropout rates during registration and increasing overall engagement.",
                "Implemented efficient data access with JPA and managed data in MySQL, reducing load times for patient information retrieval and improving application performance.",
                "Deployed the application on AWS EC2 and integrated AWS Lambda for serverless functions, supporting increased concurrent users without performance drops.",
                "Leveraged TypeScript for complex feature development, enhancing type safety, reducing runtime errors, and improving maintainability.",
                "Designed reusable Bootstrap components to establish a consistent design language, contributing to a 15% increase in user satisfaction.",
                "Enabled secure real-time messaging between patients and doctors with WebSocket technology, resulting in a 35% improvement in messaging response rates.",
                "Implemented user authentication and role-based access control with Spring Security, ensuring compliance with data protection standards and reducing unauthorized access incidents.",
                "Enhanced code quality and reliability through automated testing with JUnit and Mockito, reducing production bugs and accelerating time-to-market for new features.",
                "Collaborated with cross-functional teams to identify and fix bugs, achieving a 40% reduction in software bugs and a 25% increase in application stability."
            ]            
        },
        {
            position: "Java Full-Stack Developer",
            company: "Capgemini, India",
            duration: "January 2020 - December 2022",
            image: "capg.webp",
            descriptions: [
                "Developed scalable backend solutions using Java 8 and Node.js for key functionalities like user authentication, transaction processing, and account management, enhancing modularity and maintainability for financial services.",
                "Designed efficient MongoDB data models to manage large volumes of semi-structured financial transaction records, increasing data retrieval speed by 40%.",
                "Built interactive user interfaces for a financial platform with Angular, enabling real-time updates on account balances, transaction statuses, and market data, boosting user engagement by 35%.",
                "Leveraged Hibernate for accurate data manipulation, ensuring consistency across financial transactions.",
                "Integrated Apache Kafka for an event-driven architecture, improving real-time transaction processing and user notifications, which increased system throughput.",
                "Implemented secure authentication and authorization using Spring Security with OAuth 2.0 and JWT, reducing unauthorized access and ensuring compliance with financial regulations.",
                "Optimized Angular components for faster load times, reducing page load by 20% and enhancing client-side performance, contributing to higher customer satisfaction.",
                "Managed high-volume transaction processing with JMS Queues for asynchronous handling, improving transaction flow efficiency.",
                "Developed and executed unit tests with Selenium and Karma, achieving high test coverage and reducing bugs, while also utilizing Spring Integration Tests to validate code robustness.",
                "Implemented API versioning and global error handling for improved API maintainability and user experience, with a 20% increase in customer satisfaction through meaningful error messages.",
                "Utilized Jira for project tracking and sprint planning, fostering team collaboration and achieving a 20% improvement in project delivery timelines.",
                "Deployed services on Google Cloud Platform (GCP) to ensure scalability and reliability of financial applications.",
                "Identified and resolved production deployment challenges, reducing downtime and improving application performance by 30%.",
                "Conducted peer code reviews to ensure technical adherence and quality, showcasing attention to detail and a commitment to high standards."
            ]            
        },
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at swethapaspunuri227@gmail.com. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    // ============ FOOTER ============
    footer: "© 2024 Swetha Paspunuri. All Rights Reserved"
}

export default info