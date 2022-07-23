import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

import { Card, CardBody, CardFooter, CardHeader, CardInformation } from './Components/Card';
import { PrimaryButton } from './Components/Button';
import { Pill, WorkExperience } from './Components/Misc';

import codeHeader from './images/php-code-header.jpeg';
import avatar from './images/thomas-palmer.jpeg';

const skills = [
    'JavaScript', 'React.JS', 'VueJS', 'Angular', 'CSS', 'SCSS', 'Bootstrap', 'TailWind', 'PHP', 'Laravel', 'Symfony',
    'Phacon', 'CodeIgniter', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Digital Ocean', 'AWS', 'NGINX',
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
        company: 'CI Group',
        role: 'Lead Developer',
        location: 'Banbury',
        duration: 'July 2011 - January 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa deserunt, dolor dolore doloremque eligendi eos est exercitationem explicabo fugit libero maxime natus nisi nulla omnis porro quae rerum voluptate!',
    },
    {
        company: 'CI Group',
        role: 'Lead Developer',
        location: 'Banbury',
        duration: 'July 2011 - January 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa deserunt, dolor dolore doloremque eligendi eos est exercitationem explicabo fugit libero maxime natus nisi nulla omnis porro quae rerum voluptate!',
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

                                <PrimaryButton className="mt-4" fw={true}>
                                    Download CV
                                </PrimaryButton>
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
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                Skills and Technology
                            </CardHeader>

                            <CardBody>
                                <div className="flex flex-wrap -ml-2">
                                    {skills.map(skill => (
                                        <Pill>{skill}</Pill>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <Card>
                            <CardHeader>
                                About Me
                            </CardHeader>

                            <CardBody className="space-y-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem blanditiis dignissimos eligendi, eos expedita, facere fugiat illo maiores nam nesciunt nisi quisquam tempore velit voluptates. Eos facere necessitatibus ratione.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem blanditiis dignissimos eligendi, eos expedita, facere fugiat illo maiores nam nesciunt nisi quisquam tempore velit voluptates. Eos facere necessitatibus ratione.</p>
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

                            {experience.map(experience => (
                                <WorkExperience {...experience} />
                            ))}
                        </Card>

                        <Card>
                            <CardHeader>
                                References
                            </CardHeader>

                            <CardBody>
                                References are available upon request.
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
