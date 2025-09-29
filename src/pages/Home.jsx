import React from 'react'
import { assets } from '../assets/assets'
import DownloadButton from '../../components/DownloadButton'
import GitHubButton from '../../components/GitHubButton'

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Intro Section */}
            <div className='flex flex-col lg:flex-row min-h-screen'>
                {/* Left Column - Headshot */}
                <div className='w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1'>
                    <img
                        src={assets.headshot}
                        alt="Isabella"
                        className='w-40 h-40 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl border-white'
                    />
                </div>

                {/* Right Column - Introduction */}
                <div className='w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0'>
                    <div className='text-center max-w-lg px-4 lg:px-0'>
                        <h1 className='text-2xl lg:text-4xl pb-5 font-bold text-gray-800'>Hi, I'm Isabella Hermano!</h1>
                        <p className='text-base lg:text-xl text-gray-600'>
                            As a fourth-year Computer Science Honours student at the University of Manitoba, I combine technical expertise with a passion for user-centered design. Known for quickly mastering new tools and thriving in team environments, I'm ready to deliver meaningful contributions to your projects. Scroll down to learn more about me, or download my resume with the button below!
                        </p>
                        <div className='pt-6 lg:pt-10'>
                            <DownloadButton/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Skills */}
            <div className='flex flex-col lg:flex-row min-h-96 bg-gray-50 rounded-xl'>
                <div className='w-full lg:w-1/4 p-6 lg:p-12 flex items-center justify-center'>
                    <div className='max-w-md text-center lg:text-left'>
                        <h2 className='text-3xl lg:text-4xl font-bold mb-6 text-gray-800 lg:pl-10'>Technical Skills</h2>
                    </div>
                </div>

                {/* Right Column - List of Skills */}
                <div className='w-full lg:w-3/4 p-6 lg:p-12 flex items-center justify-center'>
                    <img src={assets.skills} alt="Technical Skills" className='max-w-full h-auto' />
                </div>
            </div>

            {/* Experience Section */}
            <div className='pt-10 lg:pt-55 flex flex-col lg:flex-row min-h-96 bg-white'>
                {/* Left Column - Experience Content */}
                <div className='w-full lg:w-3/4 p-6 lg:p-12 order-2 lg:order-1'>
                    <div className='w-full space-y-6'>
                        <div className='flex flex-col lg:flex-row items-start gap-4'>
                            <div className='w-full lg:w-1/4'>
                                <p className='font-bold'>2024-Current</p>
                            </div>
                            <div className='w-full lg:w-3/4'>
                                <h2 className='text-xl font-semibold'>Administrative Assistant</h2>
                                <p className='text-gray-600'>Manitoba Education and Early Childhood Learning</p>
                                <p className='pt-3 lg:pt-5 text-sm text-gray-500'>Design and deploy subject-specific tracking systems in Excel with automated formulas and structured data entry, reducing manual oversight and improving workflow efficiency by 80%</p>
                                <p className='pt-2 text-sm text-gray-500'>Demonstrate flexibility and strong willingness to learn by mastering new responsibilities regularly, supporting evolving team needs in a dynamic office environment</p>
                                <p className='pt-2 text-sm text-gray-500'>Streamline scheduling, payroll, and travel logistics using MS Outlook & Excel, lowering administrative time by 20%</p>
                                <p className='pt-2 text-sm text-gray-500'>Facilitate cross-team workflows to align priorities, improve workflow clarity, and ensure daily operations support broader organizational goals</p>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start gap-4'>
                            <div className='w-full lg:w-1/4'>
                                <p className='font-bold'>2021-2023</p>
                            </div>
                            <div className='w-full lg:w-3/4'>
                                <h2 className='text-xl font-semibold'>Warehouse Associate</h2>
                                <p className='text-gray-600'>Materials Distribution Agency</p>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start gap-4'>
                            <div className='w-full lg:w-1/4'>
                                <p className='font-bold'>2019-2019</p>
                            </div>
                            <div className='w-full lg:w-3/4'>
                                <h2 className='text-xl font-semibold'>Zoo Camp Crew</h2>
                                <p className='text-gray-600'>Assiniboine Park Zoo</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Work Experience Title */}
                <div className='w-full lg:w-1/4 p-6 lg:p-12 flex items-center justify-center order-1 lg:order-2'>
                    <div className='max-w-md text-center lg:text-right'>
                        <h2 className='text-3xl lg:text-4xl font-bold mb-6 text-gray-800'>Work Experience</h2>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className='flex flex-col lg:flex-row min-h-96 bg-gray-50 rounded-xl'>
                <div className='w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center lg:justify-start'>
                    <div className='max-w-md text-center lg:text-left'>
                        <h2 className='text-3xl lg:text-4xl font-bold mb-6 text-gray-800'>Projects</h2>
                    </div>
                </div>

                {/* Right Column - Projects Preview */}
                <div className='w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center'>
                    <div className='text-center max-w-md'>
                        <p className='text-gray-600 mb-6 text-base lg:text-lg'>
                            View my full-stack web applications on GitHub where I used React, Express.js, Node.js, MongoDB, and TailwindCSS!
                        </p>
                        <GitHubButton/>
                    </div>
                </div>
            </div>

            <div className='pt-10'></div>

            {/* Contact Section */}
            <div className='flex flex-col lg:flex-row min-h-96 bg-blue-100 rounded-3xl lg:rounded-full items-center py-8 lg:py-0'>
                {/* Left Column - Contact details */}
                <div className='w-full lg:w-1/2 p-6 lg:p-12 order-2 lg:order-1'>
                    <div className='flex flex-col space-y-4 text-center'>
                        <h2 className='text-lg lg:text-xl'>✉️ hermanoi@myumanitoba.ca</h2>
                        <h2 className='text-lg lg:text-xl'>📞 (431)-777-8817</h2>
                        <h2 className='text-lg lg:text-xl'>🌐 www.linkedin.com/in/isabella-hermano</h2>
                    </div>
                </div>

                {/* Right Column - Lets connect title */}
                <div className='w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center order-1 lg:order-2'>
                    <div className='max-w-md text-center'>
                        <h2 className='text-3xl lg:text-4xl font-bold mb-6 text-gray-800'>Let's Connect!</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home