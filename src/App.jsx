import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

import { Card, CardBody, CardFooter, CardHeader, CardInformation } from './Components/Card';
import { PrimaryButton } from './Components/Button';
import { Education, Pill, WorkExperience } from './Components/Misc';

import codeHeader from './images/php-code-header.jpeg';
import avatar from './images/thomas-palmer.jpeg';

const skills = [
    {
        category: 'Frontend',
        skills: [
            'JavaScript', 'React.JS', 'VueJS', 'Angular', 'CSS', 'SCSS', 'Bootstrap', 'TailWind', 'React Native',
            'TypeScript'
        ]
    },
    {
        category: 'Backend',
        skills: [
            'PHP', 'Laravel', 'Symfony', 'Phalcon', 'CodeIgniter', 'PHPUnit', 'MySQL',
            'PostgreSQL', 'MongoDB', 'Redis', 'Node.JS', 'Express', 'sockets.io', 'puppeteer',
        ],
    },
    {
        category: 'Infrastructure',
        skills: [
            'Digital Ocean', 'AWS', 'NGINX', 'Lambda', 'Laravel Vapor', 'Laravel Forge',
        ],
    },
];

const socialLinks = [
    {
        url: 'https://github.com/thomaspalmer',
        icon: faGithub,
    },
    {
        url: 'https://twitter.com/tweplmr',
        icon: faTwitter,
    },
    {
        url: 'https://www.linkedin.com/in/thomas-palmer-8b510a64/',
        icon: faLinkedin,
    },
];

const experience = [
    {
        company: 'Duality Studio',
        role: 'Technical Director',
        location: 'Remote',
        duration: 'September 2020 - Present',
        description: (
            <Fragment>
                <p>
                    To help grow the business further I decided to focus on managing the development team. I helped to
                    grow the business further including growing headcount to 7 with support from several freelancers and
                    grew the turnover to mid 6 figures.
                </p>

                <ul className="list-disc ml-6">
                    <li>Developed 2 SaaS applications for events and virtual events</li>
                    <li>Built a SaaS application for managing client visibility of their projects</li>
                    <li>Migrated hosting over to Laravel Vapor and AWS lambda to provide our clients with a scalable and resilient hosting environment</li>
                    <li>Managed a team of 5 developers, provided progress reports and mentored junior members</li>
                    <li>Worked with our managing director and project manager to pitch for new projects</li>
                    <li>Implemented new development processes and guidelines</li>
                    <li>Utilised React Native to build several mobile applications</li>
                </ul>
            </Fragment>
        ),
    },
    {
        company: 'Duality Studio',
        role: 'Managing Director, Lead Developer',
        location: 'Charlbury',
        duration: 'April 2014 - September 2020',
        description: (
            <Fragment>
                <p>
                    I initially started a company for freelancing work in my spare time, but decided to take the business
                    full time after a couple of years. I grew my team to 4 members and grew the business to a low 6
                    figure turnover.
                </p>

                <ul className="list-disc ml-6">
                    <li>Built and managed several composer and npm packages to stream line development of applications for our customers</li>
                    <li>Delegated client requests across the team of developers</li>
                    <li>Helped to deliver over 200 web applications for clients</li>
                    <li>Developed and maintained a dozen SaaS applications for clients as well as our own prototypes</li>
                    <li>Established several partnerships with agencies who need digital support on behalf of their client</li>
                    <li>Managed hiring of all developers including conducting technical reviews</li>
                </ul>
            </Fragment>
        ),
    },
    {
        company: 'The Quad Group',
        role: 'Lead Developer',
        location: 'Adderbury',
        duration: 'June 2016 - Dec 2016',
        description: (
            <Fragment>
                <p>
                    I was contracted to support a marketing agency and to help mentor their developers. My development
                    responsibilities were to implement new features and fix bugs on their CRM SaaS application.
                </p>

                <ul className="list-disc ml-6">
                    <li>Implemented an extensive list of new features and bug fixes on their SaaS</li>
                    <li>Nurtured and mentored the development team and reported back to the managing director</li>
                    <li>Lead the redevelopment of the frontend application in React.JS and started to redevelop the backend away from Phalcon and towards Laravel</li>
                    <li>Lead the migration of several large customers into the CRM and developed integrations for customers existing tools and systems</li>
                </ul>
            </Fragment>
        ),
    },
    {
        company: 'CI Group',
        role: 'Lead Developer',
        location: 'Adderbury',
        duration: 'Jan 2016 - June 2016',
        description: (
            <Fragment>
                <p>
                    Following a growth in the number of developers on the team, I was promoted to lead developer.
                </p>

                <ul className="list-disc ml-6">
                    <li>Continued maintenance and development of bespoke applications including our own CMS</li>
                    <li>Mentored and helped members of my team</li>
                    <li>Provide onsite demos and support for clients</li>
                    <li>Lead the successful migration of Royal Carribeans POS system and created an all in one solution</li>
                    <li>Reported into the Digital Director</li>
                    <li>Helped to hire new developers and conduct technical reviews</li>
                </ul>
            </Fragment>
        ),
    },
    {
        company: 'CI Group',
        role: 'Developer',
        location: 'Adderbury',
        duration: 'June 2014 - Jan 2016',
        description: (
            <Fragment>
                <p>
                    I was promoted to a mid-weight developer and continued to help deliver and maintain a range of web
                    applications for customers.
                </p>

                <ul className="list-disc ml-6">
                    <li>Sole developer for a new CMS application borrowing a lot of inspiration from Laravel</li>
                    <li>Led the conversion of frontend applications into Angular</li>
                    <li>Led several new applications include rewards and recognition system for Royal Carribean</li>
                    <li>Helped build and maintain the hosting infrastructure</li>
                </ul>
            </Fragment>
        ),
    },
    {
        company: 'CI Group',
        role: 'Junior Developer',
        location: 'Adderbury',
        duration: 'June 2013 - June 2014',
        description: (
            <Fragment>
                <p>
                    After completing my time at college, I was offered a full time position at CI Group as junior
                    developer and started to quickly progress.
                </p>

                <ul className="list-disc ml-6">
                    <li>Continued maintenance and implement new features for the CMS application</li>
                    <li>Collaborated with digital teams to deliver several large scale applications</li>
                    <li>Quoted and pitched for work on behalf of the company</li>
                    <li>Created an application for Camelot which passed accessibility and penetration tests</li>
                    <li>Received several awards from company management for going above and beyond and innovation</li>
                </ul>
            </Fragment>
        ),
    },
    {
        company: 'CI Group',
        role: 'Part Time Developer',
        location: 'Adderbury',
        duration: 'September 2012 - June 2013',
        description: (
            <Fragment>
                <p>
                    Following my successful time as an intern, I was invited to stay on with the company as a part time
                    developer. I split my time between college and CI Group and continued to contribute to applications.
                </p>

                <ul className="list-disc ml-6">
                    <li>Help build a new CMS application which ran all of CI Groups commercial applications</li>
                    <li>Built a new site for CI Group</li>
                    <li>Helped implement a project management system</li>
                    <li>Tackled customer service queries</li>
                </ul>
            </Fragment>
        ),
    },
    {
        company: 'CI Group',
        role: 'Summer Intern Developer',
        location: 'Adderbury',
        duration: 'June 2012 - August 2012',
        description: (
            <Fragment>
                <p>
                    During the summer break at college, I was recommended by my college lecturer for a local marketing
                    agency. My role was to build web applications in plain PHP and JS.
                </p>

                <ul className="list-disc ml-6">
                    <li>Built a bespoke CMS application for event registration websites</li>
                    <li>Built a bespoke application for F5 networks</li>
                    <li>Provided pitches and demos to the owners of the business</li>
                    <li>Helped the new senior developer get started</li>
                </ul>
            </Fragment>
        ),
    },
    {
        company: 'Local Gardener',
        role: 'Proprietor',
        location: 'North Aston',
        duration: 'April 2009 - June 2012',
        description: (
            <Fragment>
                <p>Whilst still at school, I ran a small gardening business in my spare time across the local villages where I lived.</p>

                <ul className="list-disc ml-6">
                    <li>Managed a schedule for myself and 2 friends that worked with me</li>
                    <li>Kept 20 clients on rotation who had different requirements</li>
                </ul>
            </Fragment>
        ),
    },
];

const education = [
    {
        school: 'Oxford and Cherwell Valley College',
        duration: 'September 2011 - June 2013',
        description: (
            <Fragment>
                <p>
                    After 2 years of college, I had achieved a distinction in all 18 of my course modules which was a
                    first at the college.
                </p>

                <p>
                    My lecturer nominated me for a national btec award for my college work in which I was awarded a
                    certificate for commended runner up.
                </p>

                <p>
                    In 2015, I was invited back to the college to be a guest lecturer and I taught frontend development
                    to students aged 16-20. We covered development in HTML, CSS and JavaScript.
                </p>
            </Fragment>
        ),
    },
    {
        school: 'The Warriner School',
        duration: 'September 2005 - June 2011',
        description: 'I achieved 7 GCSE\'s (A-C)',
    },
];

const App = () => {
    return (
        <div className="flex bg-gray-100 p-3 lg:py-6 lg:px-0">
            <div className="max-w-5xl w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-4">
                        <Card showDividers={false}>
                            <img
                                className="rounded-t-lg"
                                src={codeHeader}
                                alt=""
                            />

                            <div className="relative h-12">
                                <img
                                    className="absolute -top-12 left-6 w-24 h-24 rounded-md border-2 border-white shadow"
                                    src={avatar}
                                    alt="Thomas Palmer"
                                />
                            </div>

                            <CardBody>
                                <h1 className="font-bold text-xl">Thomas Palmer</h1>
                                <h2 className="text-gray-400 text-md mt-2">Lead Web Developer</h2>

                                {/*<PrimaryButton className="mt-4" fw={true}>*/}
                                {/*    Download CV*/}
                                {/*</PrimaryButton>*/}
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                Information
                            </CardHeader>

                            <CardBody className="space-y-4">
                                <CardInformation
                                    label="Location"
                                    value="Gloucestershire"
                                />

                                <CardInformation
                                    label="Experience"
                                    value="10+ years"
                                />

                                <CardInformation
                                    label="Mobile"
                                    value="07710 568183"
                                />

                                <CardInformation
                                    label="Email"
                                    value={(
                                        <a href="mailto:thomas.palmer.developer@gmail.com">Click Here</a>
                                    )}
                                />
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                Skills and Technology
                            </CardHeader>

                            <CardBody className="space-y-4">
                                {skills.map(category => (
                                    <div>
                                        <p>
                                            {category.category}
                                        </p>

                                        <div className="flex flex-wrap -ml-2">
                                            {category.skills.map(skill => (
                                                <Pill>{skill}</Pill>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                Interests
                            </CardHeader>

                            <CardBody className="space-y-3">
                                <ul className="list-disc ml-6">
                                    <li>I enjoy walks with my fiancée and dogs</li>
                                    <li>I play golf with a few friends</li>
                                    <li>I am currently preparing to go travelling around the UK</li>
                                    <li>I am trying to improve my written skills by writing stories</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <Card>
                            <CardHeader>
                                About Me
                            </CardHeader>

                            <CardBody className="space-y-3">
                                <p>
                                    I am a proactive team player or leader who thrives on new challenges. As a highly
                                    skilled full-stack developer, I am capable of tackling all aspects of web and mobile
                                    development. With over ten years of commercial experience, I can learn new
                                    technologies fast and adapt to new environments.
                                </p>

                                <p>
                                    I am currently open to a Senior or Lead Developer role, preferably building a SaaS application.
                                </p>
                            </CardBody>

                            <CardFooter className="flex space-x-6">
                                {socialLinks.map(link => (
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        className="text-gray-400 transition duration-200 hover:text-indigo-500"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            size="lg"
                                            icon={link.icon}
                                        />
                                    </a>
                                ))}
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                Experience
                            </CardHeader>

                            {experience.map(item => (
                                <WorkExperience {...item} />
                            ))}
                        </Card>

                        <Card>
                            <CardHeader>
                                Education
                            </CardHeader>

                            {education.map(item => (
                                <Education {...item} />
                            ))}
                        </Card>

                        <Card>
                            <CardHeader>
                                References
                            </CardHeader>

                            <CardBody className="space-y-3">
                                <p>References are available upon request.</p>

                                <p>
                                    I am also happy to share code examples or undertake a programming exercise for any
                                    of the technologies listed under my skills.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
