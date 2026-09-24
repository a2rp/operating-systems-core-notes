import { createElement } from "react";
import { FaCodepen } from "react-icons/fa";
import { FiCoffee, FiFacebook, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiStar, FiYoutube } from "react-icons/fi";
import { Styled } from "./styled";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FiLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FiYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];

const support = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FiStar],
];

function IconLinks({ items }) {
    return (
        <div className="iconLinks">
            {items.map(([label, href, Icon]) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} title={label}>
                    {createElement(Icon)}
                </a>
            ))}
        </div>
    );
}

export default function Footer() {
    return (
        <Styled.Wrapper>
            <div className="footerIntro">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Operating Systems notes logo" />
                <div>
                    <strong>Operating Systems Core Notes</strong>
                    <span>Fast revision for systems fundamentals</span>
                </div>
            </div>
            <p className="footerText">A structured single-page reference for processes, scheduling, memory, synchronization, deadlocks, file systems and I/O.</p>
            <div className="footerGroups">
                <div><span>Links</span><IconLinks items={links} /></div>
                <div><span>Support</span><IconLinks items={support} /></div>
            </div>
            <div className="footerBottom">
                Copyright &copy; {new Date().getFullYear()} {" "}
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a>
                <span>|</span>
                <a href="https://github.com/a2rp/operating-systems-core-notes" target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
        </Styled.Wrapper>
    );
}