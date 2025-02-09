const experienceData = [
    {
        company: "Deutsche Bank",
        logo: require("../images/DB.svg.png"),
        position: "Senior Analyst",
        duration: "July 2022 – Present",
        responsibilities: [
            "Architected a Micro Frontend (MFE) framework with Webpack Module Federation for modular and independent deployments.",
            "40% smaller bundle → Webpack Module Federation, lazy loading, code splitting.",
            "25% faster load → Tree shaking, dynamic imports, optimized assets.",
            "20% faster dev → Micro Frontends, independent deployments.",
            "Built real-time trading with WebSockets for instant portfolio updates and market data streaming.",
            "Developed key screens (Login, Market, Orders, Holdings, User Touring) with multilingual and dynamic theming, ensuring global accessibility (WCA compliant).",
            "Built DWO Web & Mobile for EMEA & APAC → Developed and optimized both platforms.",
            "Technologies used: HTML, CSS, React, Javascript, React Native, Springboot, SQL, Teamcity."
        ]
    },
    {
        company: "Amazon",
        logo: require("../images/amazon.png"),
        position: "Software Developer Intern",
        duration: "Mar 2022 – July 2022",
        responsibilities: [
            "Automated bug reporting and feature requests, enabling UPS, FedEx, and partners to report issues via the portal, eliminating manual reporting (100%).",
            "Designed UX mockups, built code architecture, and integrated the feature into Amazon Passport UI using ReactTS, AWS, and Maxis APIs, reducing issue resolution time by 40%.",
            "Optimized system performance by reducing downstream API calls by 30% through architectural improvements and caching strategies.",
            "Developed reusable ReactTS components following the Open-Closed Principle and wrote 100+ unit tests, improving test coverage to 99% with e2e testing.",
            "Technologies used: React, Typescript, AWS, Docker, Springboot."
        ]
    },
    {
        company: "Microsoft",
        logo: require("../images/Microsoft.png"),
        position: "Software Developer Intern: Engage",
        duration: "Oct 2021 – Dec 2021",
        responsibilities: [
            "Developed user authentication, admin/student controls, task manager, quizzes, chat, and real-time class booking.",
            "Built REST APIs for data handling and utilized a database for storing user information and interactions.",
            "Technologies Used: CSS, Javascript, ReactJS, NodeJs, Express, Material-UI, Socket.io, JWT."
        ]
    },
    {
        company: "Bank of New York Mellon",
        logo: require("../images/bny.svg.png"),
        position: "Software Developer Intern",
        duration: "Jan 2022 – Feb 2022",
        responsibilities: [
            "Migrated IOCC UI screens to Monet Core using Micro Frontends for modular architecture.",
            "Integrated IOCC with OpenID Connect for SSO, core entitlements, and shared UI components in Angular.",
            "Technologies Used: Angular, Springboot, Jenkins.",
        ]
    },
    
    {
        company: "Deutsche Bank",
        logo: require("../images/DB.svg.png"),
        position: "Software Developer Intern",
        duration: "June 2021 – Aug 2021",
        responsibilities: [
            "Developed a Python pipeline to index a 500k-record Enron dataset into Solr, reducing cleaning time by 10x.",
            "Designed Spring Boot microservices for Solr queries and built an Angular UI, automating deployment with Jenkins.",
            "Technologies: Python, Apache Solr, Angular, Spring Boot, Jenkins, Tomcat, Postman.",
            "Technologies Used: Python, Apache Solr, Angular, Springboot, Jenkins, Tomcat, Postman."
        ]
    }
];

export default experienceData;
