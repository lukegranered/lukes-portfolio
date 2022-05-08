import React, { useState } from "react";

function Nav() {
    return (
        <header>
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        ABOUT ME
                    </a>
                </li>
                <li className="mx-2">
                    <a href='#projects'>PROJECTS</a>
                </li>
                <li className="mx-2">
                    <a>RESUME</a>
                </li>
                <li className="mx-2">
                    <a>CONTACT</a>
                </li>
            </ul>
            </nav>
        </header>
    )
}
export default Nav;