import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
    return (
        <footer className="flex-row">
            <a href="https://www.linkedin.com/in/luke-granered/" target="_blank">
                <LinkedInIcon className="icon" />
            </a>
            <a href="https://github.com/lukegranered" target="_blank">
                <GitHubIcon className="icon" />
            </a>
            <a href="mailto:lukejgranered@gmail.com" target="_blank">
                <EmailIcon className="icon" />
            </a>
        </footer>
    )
}

export default Footer;