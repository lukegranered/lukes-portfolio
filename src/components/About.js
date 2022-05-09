import React from "react";
import aboutImage from "../assets/Aboutme.jpg"

function About() {
    return (
        <section className="my-5">
            <h1>About Me</h1>
            <p>Full Stack Web Developer with a touring musician background, as well as experience in Accounts Payable/Receivable, Bookkeeping, and Customer Service. Skills include communication, leadership, and creative thinking. I have utilized these skills both in my time as a touring musician and as a student in Vanderbilt’s Full Stack Bootcamp collaborating with fellow students on projects - such as an application allowing users to search for events in any given city utilizing Ticketmaster’s API. In the past, my work-related endeavors have always been supplemental to my creative endeavors. In my pursuit of software development I am finding a new outlet for my creativity to flourish into a new multi-dimensional space where I can continue collaborating with others while growing as a full stack web developer. I am proficient in HTML, CSS, Javascript, and Node, but always looking to learn more.</p>
            <img src={aboutImage} className='my-2' style={{ width: '100%'}} alt='cover' />
        </section>
    )
}

export default About;