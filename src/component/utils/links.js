import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {GoMail} from "react-icons/go"

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/works",
    text: "progetti",
  },
  // {
  //   id: 3,
  //   url: "/contact",
  //   text: "contattami",
  // },
];

const socialLinks = [
  {
    id: 1,
    url: "https://github.com/Bluealastor",
    icon: <FaGithub className="icon" />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/christian-esposito-developer",
    icon: <FaLinkedinIn className="icon" />,
  },
  {
    id:3,
    url:"mailto:chrisexp00@gmail.com",
    icon:<GoMail className="icon"/>
  },
];

const SocialBar = () => {
  return (
    <ul className="social">
      {socialLinks.map((el) => {
        const { id, url, icon } = el;
        return (
          <li key={id}>
            <a href={url} target="_blank"  rel="noreferrer" alt="social">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { links, SocialBar };
