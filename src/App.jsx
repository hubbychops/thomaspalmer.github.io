import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

import { Card, CardBody, CardFooter, CardHeader, CardInformation } from './Components/Card';
import { PrimaryButton } from './Components/Button';
import { Pill } from './Components/Misc';

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

const App = () => {
    return (
        <div className="h-screen flex bg-gray-100 py-6 px-6 md:px-0 overflow-y-scroll">
            <div className="max-w-4xl w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-6">
                        <Card showDividers={false}>
                            <img
                                className="rounded-t-lg"
                                src={codeHeader}
                                alt=""
                            />

                            <div className="border-2 border-white rounded-md -mt-12 ml-6">
                                <img
                                    className="w-24 h-24 rounded-md"
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
                                    value="11+ years"
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

                    <div className="md:col-span-2 space-y-6">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
