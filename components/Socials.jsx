import Link from "next/link";
import { FaGithub, FaLinkedin, FaCode, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "#" },
  { icon: <FaLinkedin />, path: "#" },
  { icon: <FaCode />, path: "#" }, // Replace FaCode with the LeetCode icon if available
  { icon: <FaInstagram />, path: "#" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
