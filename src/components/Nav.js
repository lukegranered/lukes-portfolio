import React, { useState } from "react";
import Resume from "../assets/Luke Granered - Resume 2022.pdf";

function Nav(props) {
    const {
        projectSelected,
        setProjectSelected,
        aboutSelected,
        setAboutSelected
    } = props;

    return (
        <header>
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => {setProjectSelected(false); setAboutSelected(true);}}>
                        ABOUT ME
                    </a>
                </li>
                <li className="mx-2">
                    <a href='#projects' onClick={() => {setProjectSelected(true); setAboutSelected(false);}}>PROJECTS</a>
                </li>
                <li className="mx-2">
                    <a href={Resume} target="_blank">RESUME</a>
                </li>
                <li className="mx-2">
                    <a href="mailto:lukejgranered@gmail.com">CONTACT</a>
                </li>
            </ul>
            </nav>
        </header>
    )
}
export default Nav;