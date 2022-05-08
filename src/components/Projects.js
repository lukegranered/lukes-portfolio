import React from "react";
import photo1 from '../assets/projects/Code Quiz.png';
import photo2 from '../assets/projects/E-Commerce Flow.png';
import photo3 from '../assets/projects/README Generator.png';
import photo4 from '../assets/projects/My Social Network API.png';

function Projects() {
    const projectOne = {
        name: 'Code Quiz',
        description: "A timed multiple choice quiz that allows the user to save their score.",
    };

    const projectTwo = { 
        name: 'E-Commerce Flow', 
        description: "An E-Commerce backend that allows users to Get, Post, Put, and Delete different Categories, Products and Tags."
    };

    const projectThree = {
        name: 'README Generator',
        description: "A command line application using Inquirer that accepts input data and generates a README file."
    };

    const projectFour = {
        name: 'My Social Network API',
        description: "A simple backend for a social networking application using Express and MongoDB."
    };

    return (
        <section>
            <h1>{projectOne.name}</h1>
            <p>{projectOne.description}</p>
            <div className="flex-row">
                <a href="https://lukegranered.github.io/code-quiz/">
                    <img
                        src={photo1}
                        alt="Code Quiz Photo"
                        className='img-thumbnail mx-1'
                    />
                </a>
            </div>

            <h1>{projectTwo.name}</h1>
            <p>{projectTwo.description}</p>
            <div className="flex-row">
                <a href="https://github.com/lukegranered/e-commerce-flow">
                    <img
                        src={photo2}
                        alt="E-Commerce Photo"
                        className='img-thumbnail mx-1'
                    />
                </a>
            </div>

            <h1>{projectThree.name}</h1>
            <p>{projectThree.description}</p>
            <div className="flex-row">
                <a href="https://github.com/lukegranered/potential-enigma">
                    <img
                        src={photo3}
                        alt="README Generator Photo"
                        className='img-thumbnail mx-1'
                    />
                </a>
            </div>

            <h1>{projectFour.name}</h1>
            <p>{projectFour.description}</p>
            <div className="flex-row">
                <a href="https://github.com/lukegranered/my-social-network-api">
                    <img
                        src={photo4}
                        alt="Social Network Photo"
                        className='img-thumbnail mx-1'
                    />
                </a>
            </div>
        </section>
    )
}

export default Projects;