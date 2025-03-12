/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Typical from 'react-typical';
import React, { useState, useEffect } from 'react';


const styledSteps = [
    { text: "Code Ninja", style: { color: "#ff5733", fontFamily: "Comic Sans MS", fontWeight: "bold", fontSize: "100px" } }, // Software Developer
    { text: "Pixel Perfectionist", style: { color: "#1e90ff", fontFamily: "Pacifico", fontWeight: "normal", fontSize: "100px" } }, // Frontend Developer
    { text: "AI Wizard", style: { color: "#32cd32", fontFamily: "Monoton", fontWeight: "bold", fontSize: "100px" } }, // AI Enthusiast
    { text: "Server Samurai", style: { color: "#800080", fontFamily: "Bangers", fontWeight: "normal", fontSize: "100px" } }, // Backend Developer
    { text: "Data Guru", style: { color: "#ffa500", fontFamily: "Permanent Marker", fontWeight: "bold", fontSize: "100px" } } // Database Specialist
];

const AnimatedStyledTypewriter = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    // Adjust these values to control the speed of the typing and pause between steps
    const typingSpeed = 100; // milliseconds per letter
    const pauseDuration = 1000; // pause after finishing a word (in milliseconds)

    useEffect(() => {
        let timeout;
        const currentStep = styledSteps[stepIndex];

        // If we haven't finished typing the current text, type the next letter
        if (displayedText.length < currentStep.text.length) {
            timeout = setTimeout(() => {
                setDisplayedText(currentStep.text.substring(0, displayedText.length + 1));
            }, typingSpeed);
        } else {
            // Once the full text is displayed, wait and then move to the next text
            timeout = setTimeout(() => {
                setDisplayedText('');
                setStepIndex((prevIndex) => (prevIndex + 1) % styledSteps.length);
            }, pauseDuration);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, stepIndex]);

    return (
        <span style={styledSteps[stepIndex].style}>
            {displayedText}
        </span>
    );
};


// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Krzysztof Kisiel",
    title: "Hey there, I'm Krzysztof",
    subTitle: (
        <span>
            A passionate&nbsp;<br></br>
            <AnimatedStyledTypewriter />
            <br></br>
            {/* &nbsp;<br />skilled in Java, Python, C++, C#, .NET, and Kotlin. Experienced in building web applications using MERN stack, mobile apps, system architecture, and database management. */}
            <br></br>
            </span>
    ),
    resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
    displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/ExoHumann/",
    linkedin: "https://www.linkedin.com/in/krzysztof-kisiel-291a6b251/",
    gmail: "mrkisielk@gmail.com",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "Ideas to Reality",
    subTitle: "I leverage a diverse tech stack to build innovative digital solutions that drive success.",
    skills: [
        emoji("⚡ Build sleek, fast web apps with React & Node.js."),
        emoji("⚡ Engineer robust, scalable backends."),
        emoji("⚡ Integrate third-party services effortlessly."),
        emoji("⚡ Embrace Agile & DevOps for rapid delivery.")
    ],
    softwareSkills: [
        { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
        { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
        { skillName: "C++", fontAwesomeClassname: "fab fa-cuttlefish" },
        { skillName: "C#", fontAwesomeClassname: "fab fa-microsoft" },
        { skillName: ".NET", fontAwesomeClassname: "fab fa-windows" },
        { skillName: "Kotlin", fontAwesomeClassname: "fab fa-android" },
        { skillName: "React", fontAwesomeClassname: "fab fa-react" },
        { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
        { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
        { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
        { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
        { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
        { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
        { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
        { skillName: "Swift", fontAwesomeClassname: "fab fa-swift" },
        { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
        { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
        { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
        { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
    ],
    display: true
};
const educationInfo = {
    display: true, // Toggle to hide this section if needed
    schools: [
        {
            schoolName: "Danmarks Tekniske Universitet",
            logo: require("./assets/images/dtulogo.png"),
            subHeader: "Diplom Softwareteknolog",
            duration: "2020 – Present",
            desc:
                "Pursuing a diploma in Software Technology with a focus on modern development practices and system architecture.",
            descBullets: [
                "Engaged in projects for web/mobile app development, database management, and cloud solutions.",
                "Working with Java, Python, C#, Agile, and Scrum."
            ]
        },
        {
            schoolName: "H. C. ØRSTED Gymnasium",
            logo: require("./assets/images/HceoLogo.png"),
            subHeader: "Mat/IT Program",
            duration: "2015 – 2018",
            desc:
                "Completed a program combining advanced mathematics with IT fundamentals, building a strong foundation in software engineering.",
            descBullets: [
                "Acquired skills in programming, database design, and web development.",
                "Enhanced analytical and collaborative abilities."
            ]
        }
    ]
};


// Tech Stack and Experience Section
const techStack = {
    viewSkillBars: false, // Set to true to show the Proficiency Section
    summary: "A comprehensive blend of front-end design, back-end development, and core programming skills, enabling me to deliver robust and innovative software solutions.",
    experience: [
        {
            Stack: "Frontend & UI/UX Design",
            progressPercentage: "90%",
            description:
                "Expert in crafting interactive and responsive user interfaces using modern frameworks such as React, HTML5, and CSS3. Skilled at transforming design concepts into dynamic and accessible web experiences."
        },
        {
            Stack: "Backend Development",
            progressPercentage: "70%",
            description:
                "Adept at building scalable and secure backend architectures with Node.js, .NET, and microservices. Focused on API design, data security, and performance optimization to ensure robust server operations."
        },
        {
            Stack: "Core Programming",
            progressPercentage: "60%",
            description:
                "Solid foundation in programming, with extensive experience in Java, Python, C++, and C#. Proficient at developing efficient algorithms and tackling complex computational challenges."
        }
    ],
    displayCodersrank: false // Set to true to display CodersRank badges if available
};



// Work experience section

const workExperiences = {
    display: true,
    experience: [
        {
            role: "Software Engineer",
            company: "WSP",
            date: "2022 – 2023",
            desc: "Developed data solutions and improved system performance.",
            descBullets: [
                "Streamlined data workflows for better efficiency.",
                "Collaborated with cross-functional teams for scalable systems."
            ],
            companylogo: require("./assets/images/wsp.png")
        },
        {
            role: "Waiter & Bartender",
            company: "Student Crew",
            date: "2017 – 2022",
            desc: "Delivered top-tier service at high-profile events.",
            descBullets: [
                "Maintained exceptional customer service in fast-paced settings.",
                "Managed multiple priorities while ensuring quality."
            ],
            companylogo: require("./assets/images/studentcrew.png")
        },
        {
            role: "Overtjener",
            company: "TjenerTeamet",
            date: "2020 – Present",
            desc: "Provided professional service at various events.",
            descBullets: [
                "Exhibited leadership and strong communication under pressure.",
                "Adapted service strategies to meet diverse client needs."
            ],
            companylogo: require("./assets/images/tjenerteamet.png")
        },
        {
            role: "Handicapledsager",
            company: "DUOS",
            date: "Current",
            desc: "Offered dedicated care and support for individuals with special needs.",
            descBullets: [
                "Delivered compassionate, personalized care.",
                "Collaborated with healthcare teams to maintain high standards."
            ],
            companylogo: require("./assets/images/duos.png")
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "Innovative solutions and startup ventures I helped build.",
    projects: [
        {
            image: require("./assets/images/chess.gif"),
            projectName: "Chess Engine",
            projectDesc:
                "An advanced chess engine leveraging AI techniques including reinforcement learning, MiniMax search, and Alpha-Beta pruning. It features heuristic ordering and transposition tables to support strategic gameplay.",
            footerLink: [
                {
                    name: "View on GitHub",
                    url: "https://github.com/ExoHumann/ChessEngine"
                }
            ]
        },
        {
            image: require("./assets/images/7solitary.gif"),
            projectName: "Solitaire Solver",
            projectDesc:
                "An intelligent Solitaire solver powered by TensorFlow, deep learning, and AI. It uses computer vision for real-time card detection and applies optimized game logic for improved moves.",
            footerLink: [
                {
                    name: "View on GitHub",
                    url: "https://github.com/Kongsbak99/7-solitaire"
                }
            ]
        },
        {
            image: require("./assets/images/roborally.PNG"),
            projectName: "Roborally",
            projectDesc:
                "A digital board game built in Java with an interactive GUI and object-oriented design. It supports six players navigating challenging obstacles and employs pathfinding mechanics for strategic play.",
            footerLink: [
                {
                    name: "View on GitHub",
                    url: "https://github.com/ExoHumann/Roborally"
                }
            ]
        },
        {
            image: require("./assets/images/Chat.PNG"),
            projectName: "WebChat Application",
            projectDesc:
                "A secure, real-time messaging platform built with the MERN stack. It features robust authentication, integrated notifications, and supports seamless user communication.",
            footerLink: [
                {
                    name: "View on GitHub",
                    url: "https://github.com/ExoHumann/ChatWebaplication"
                }
            ]
        },
        {
            image: require("./assets/images/NemSport2.gif"),
            projectName: "Nemsport Android App",
            projectDesc:
                "A sports management app developed in Kotlin, featuring real-time player coordination and intuitive match scheduling. It demonstrates strong mobile architecture and user-friendly design.",
            footerLink: [
                {
                    name: "View on GitHub",
                    url: "https://github.com/ExoHumann/BKSkjold"
                },
                {
                    name: "Live Demo",
                    url: "https://www.figma.com/proto/5oYYL8LrwYaUHnilRR09Ba/V3?node-id=1-404&starting-point-node-id=204%3A978&t=66RycKQNElCqFjHH-1"
                }
            ]
        },
        {
            image: require("./assets/images/Matador.gif"),
            projectName: "Monopoly Game",
            projectDesc:
                "A dynamic Monopoly game developed using Java and the MVC model. It offers interactive property management and an engaging user interface for competitive gameplay.",
            footerLink: [
                {
                    name: "View on GitHub",
                    url: "https://github.com/ExoHumann/Matador-Spil/tree/master"
                }
            ]
        },
        {
            image: require("./assets/images/database.PNG"),
            projectName: "Covid-19 Vaccine Database",
            projectDesc:
                "A scalable database solution for vaccine centers that efficiently manages patient records, staff details, and logistical data. It emphasizes secure data handling and optimized design.",
            footerLink: [
                {
                    name: "View on GitHub",
                    url: "https://github.com/ExoHumann/Covid-19-Vaccine-Database"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle:
                "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle:
                "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [
                {
                    name: "View Google Assistant Action",
                    url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                }
            ]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Projects",
    subtitle:
        "Explore my GitHub projects, where I develop innovative solutions and share my learning journey.",
    displayMediumBlogs: "false", // Disable fetching Medium blogs
    blogs: [
        {
            url: "https://github.com/Kongsbak99/7-solitaire",
            title: "Solitaire Solver",
            description:
                "An intelligent Solitaire solver implemented with TensorFlow and advanced machine learning. It leverages computer vision to detect cards and applies robust game logic for optimal moves."
        },
        {
            url: "https://github.com/yourusername/roborally",
            title: "Roborally",
            description:
                "A digital reimagining of a classic board game, developed in Java with a polished GUI. It supports six players, featuring strategic challenges and obstacles where speed and precision determine the winner."
        },
        {
            url: "https://github.com/ExoHumann/ChatWebaplication",
            title: "WebChat Application",
            descriptitletion:
                "A real-time messaging platform engineered with secure authentication and integrated SendGrid notifications. It enables seamless communication and connectivity among users."
        },
        {
            url: "https://github.com/ExoHumann/BKSkjold",
            title: "BK Skjold",
            description:
                "A dynamic booking platform for football fields that streamlines match scheduling and player coordination. It offers an intuitive interface for managing reservations and organizing team play."
        },
        {
            url: "https://github.com/ExoHumann/Matador-Spil/tree/master",
            title: "Monopoly Game",
            description:
                "A feature-rich Monopoly game developed at DTU with a responsive GUI. It integrates intricate property management and interactive rules to create a competitive gaming experience."
        },
        {
            url: "https://github.com/yourusername/covid19-vaccine-db",
            title: "Covid-19 Vaccine Database",
            description:
                "A robust database solution for Covid-19 vaccination centers, efficiently managing patient records and staff data. It handles certification and logistics to support smooth operational workflows."
        }
    ],
    display: false // Set to true to show this section
};


// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",

    // Please Provide with Your Podcast embeded Link
    display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Let's discuss your project or just have a chat!",
    number: "+45 52 66 70 77",
    email_address: "mrkisielk@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable,
    resumeSection
};
