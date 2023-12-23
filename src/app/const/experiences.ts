import type { CompanyModel, JobPositionModel } from '../models/experience.model';

export const Companies: Array<CompanyModel> = [
    {
        companyId: 0,
        logoUrl: 'alibaba',
        name: 'AliBaba Travels.Co',
        industry: 'Travel Arrangements',
        website: 'https://www.alibaba.ir',
        location: 'Tehran - Iran',
        description:
            'Alibaba travels Co. has been active in Iran’s travel and tourist business since January 2014 as a startup. Alibaba Travels Co. is the pioneer of online travel services in Iran. Our offices are located in Tehran. We are providing innovative, competitive and enjoyable services for the people who visit Iran and all Iranians traveling around the world',
    },
    {
        companyId: 1,
        logoUrl: 'tamadon',
        name: 'Tamadon Investment Bank',
        industry: 'Financial Services',
        website: 'https://tamadonib.com/en',
        location: 'Tehran - Iran',
        description:
            'Tamadon Investment Bank is a full service investment bank that mainly focuses on Iran’s capital markets and is registered with and regulated by the Securities and Exchange Organization of Iran',
    },
    {
        companyId: 2,
        logoUrl: 'testfully',
        name: 'Testfully',
        industry: 'Software Development',
        website: 'https://testfully.io',
        location: 'Sydney - Australia',
        description: 'Our tool enables you to efficiently test APIs while building them, and monitor them post-release',
    },
    {
        companyId: 3,
        logoUrl: 'tapsell',
        name: 'Tapsell',
        industry: 'Advertising Services',
        website: 'https://tapsell.ir/en',
        location: 'Tehran - Iran',
        description:
            'From the beginning, we knew having the expertise, knowledge and passion for developing new features and the foresight in the industry, would lead us well ahead of the curve. In a few years, we’ve become the most reputable and most trusted network in the industry. We take  pride in bringing advertisers and publishers together while providing not only the best offers on variety of tags and verticals and high-grade traffic to promote but also offerings of  high proficiency with well-designed creatives and the leading-edge monetization tools available on the market',
    },
    {
        companyId: 4,
        logoUrl: 'xepos',
        name: 'XEPOS LTD',
        industry: 'IT Services and IT Consulting',
        website: 'https://xepos.co.uk',
        location: 'Birmingham - United Kingdom',
        description: 'Our EPOS solutions can adapt to your environment Tell us your area of business, and find out how we’re the perfect fit',
    },
];

export const Experiences: Array<JobPositionModel> = [
    {
        companyId: 0,
        employmentType: 'Full-Time',
        startDate: 'january 2021',
        endDate: 'Present',
        jobTitle: 'Front End Engineer / Front End Mentor',
        jobDescription: [
            'As a part of Iran’s biggest travel agency I have Increased tour product convention rate from 1.5% to 4% by implementing the A/B test infrastructure plugin and applying it to the PLP and PDP product redesign',
            'Led the migration of the Tour product to the new website, resulting in a 10% performance boost by lazy loading images, using async components, and using lifecycle hooks properly',
            'Enhanced the development experience (DX) using auto-import components, vite, and monorepo architecture with pnpm, which enabled 10 times faster HMR (Hot Module Reloading)',
            'Increased TypeScript coverage for the Tour package on the website to 85%',
            'Reduced the bundle size of the project by 15% by minifying images, using async components, and modulating the project',
            'Increased SEO rankings and web-vital metrics by 20% based on the lighthouse report by identifying the critical CSS and lazy-loading images for the home',
            'Developed a rate review module, resulting in increasing of NPS by 3.5%',
            'Collaborated in an agile team that achieved a 40% increase in sales over a span of 15 months',
            'Achieved an 85% increase in TypeScript coverage for the website',
            'Mentored and guided 8 mentees on JavaScript, TypeScript, Git, Vue.js, and software engineering principles, fostering their professional growth',
        ],
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Git', 'VueJS', 'NuxtJS', 'HTML', 'CSS', 'Sass', 'Linux', 'Tailwind CSS'],
    },
    // {
    //     companyId: 1,
    //     employmentType: 'Part-Time',
    //     startDate: 'March 2022',
    //     endDate: 'Present',
    //     jobTitle: 'Front End Consultant',
    //     jobDescription: [
    //         'Developed 7 panels using Angular and Angular Material, ensuring efficient and user-friendly interfaces',
    //         'Collaborated within an Agile team to refactor legacy code, improving code quality and maintainability',
    //     ],
    //     jobRequiredSkills: ['JavaScript', 'TypeScript', 'Git', 'Angular', 'NestJS', 'HTML', 'CSS', 'Sass', 'Linux', 'Tailwind CSS', 'SQL', 'Docker'],
    // },
    // {
    //     companyId: 1,
    //     employmentType: 'Full-Time',
    //     startDate: 'December 2020',
    //     endDate: 'March 2022',
    //     jobTitle: 'Front End Engineer',
    //     jobDescription: [
    //         'Developed 7 panels using Angular and Angular Material, ensuring efficient and user-friendly interfaces',
    //         'Collaborated within an Agile team to refactor legacy code, improving code quality and maintainability',
    //     ],
    //     jobRequiredSkills: ['JavaScript', 'TypeScript', 'Git', 'Angular', 'NestJS', 'HTML', 'CSS', 'Sass', 'Linux', 'Tailwind CSS', 'SQL', 'Docker'],
    // },
    {
        companyId: 2,
        employmentType: 'Contract',
        startDate: 'November 2021',
        endDate: 'February 2022',
        jobTitle: 'Technical Author',
        jobDescription: [
            'Authoring comprehensive technical documentation on software testing methodologies and best practices',
            'Creating in-depth guides and tutorials for API testing techniques and tools',
            'Developing clear and concise documentation for test plans, test cases, and test scripts',
            'Collaborating with cross-functional teams to ensure the accuracy and clarity of technical documentation',
            'Conducting research and staying updated with the latest trends and advancements in software testing and API testing',
        ],
        jobRequiredSkills: ['API', 'SEO', 'Testing'],
    },
    // {
    //     companyId: 3,
    //     employmentType: 'Part-Time',
    //     startDate: 'December 2020',
    //     endDate: 'May 2021',
    //     jobTitle: 'Front End Engineer',
    //     jobDescription: [
    //         'Engineered a B2C panel using technologies like Angular, Angular Material, and TypeScript, to deliver a user-friendly and interactive interface',
    //         'Led the efforts for rewriting the foundation of the new website',
    //         'Managed and maintained the Admin panel using Angular, ensuring its stability',
    //         'Implemented GitFlow methodology to facilitate effective collaboration and version control',
    //         'Successfully launched 3 landing pages using Angular and Gatsby',
    //     ],
    //     jobRequiredSkills: ['JavaScript', 'TypeScript', 'Angular', 'Git', 'React', 'Gatsby', 'HTML', 'CSS'],
    // },
    {
        companyId: 3,
        employmentType: 'Full-Time',
        startDate: 'September 2019',
        endDate: 'December 2020',
        jobTitle: 'Front End Developer',
        jobDescription: [
            'Engineered a B2C panel using technologies like Angular, Angular Material, and TypeScript, to deliver a user-friendly and interactive interface',
            'Led the efforts for rewriting the foundation of the new website',
            'Managed and maintained the Admin panel using Angular, ensuring its stability',
            'Implemented GitFlow methodology to facilitate effective collaboration and version control',
            'Successfully launched 3 landing pages using Angular and Gatsby',
        ],
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Angular', 'Git', 'React', 'Gatsby', 'HTML', 'CSS'],
    },
    {
        companyId: 4,
        employmentType: 'Full-Time',
        startDate: 'July 2018',
        endDate: 'August 2019',
        jobTitle: 'Front End Developer',
        jobDescription: [
            'Actively participated in the development process of a shopping panel using Angular and Bootstrap, creating a visually appealing and responsive web presence',
            'Launched a landing page using Angular, Bootstrap, and SCSS',
        ],
        jobRequiredSkills: ['JavaScript', 'TypeScript', 'Angular', 'Git', 'HTML', 'CSS'],
    },
    // {
    //     companyId: 4,
    //     employmentType: 'Full-Time',
    //     startDate: 'September 2018',
    //     endDate: 'May 2019',
    //     jobTitle: 'Technical Help Desk Lead',
    //     jobDescription: [
    //         'Teaching and organizing a support team of twelve people',
    //         'Managing PDQ card terminals integration with Gateways and communication with UK banks',
    //         'Maintaining, updating, and installing software',
    //         "Manipulating customers' database",
    //         'Creating tasks and providing assistance to developers working with the POS software (XE-Convenience)',
    //     ],
    //     jobRequiredSkills: ['Team Management', 'SQL Server', 'Electron', 'DNS Server', 'WSUS', 'VPN', 'Linux'],
    // },
    // {
    //     companyId: 4,
    //     employmentType: 'Full-Time',
    //     startDate: 'July 2018',
    //     endDate: 'September 2018',
    //     jobTitle: 'Technical Help Desk',
    //     jobDescription: [
    //         'Provided Help Desk support for customers, resolving technical issues and addressing inquiries',
    //         'Configured and maintained network infrastructure to ensure smooth operations and connectivity',
    //         'Installed and updated tills for customers, ensuring they are up-to-date with the latest software versions',
    //         'Supported customers in troubleshooting and resolving issues related to till systems',
    //         'Conducted regular maintenance activities to optimize till performance and ensure system stability',
    //     ],
    //     jobRequiredSkills: ['SQL Server', 'Electron', 'DNS Server', 'WSUS', 'VPN', 'Linux'],
    // },
];
