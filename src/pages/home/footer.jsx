import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-t">
      <p className="text-sm">Dolunay Dagci</p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/dolnuea"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/dolunay-dagci"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/dolunaydagci/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
        {/* Email Icon */}
        <a
          href="mailto:dolunaydagci@outlook.com"
          aria-label="Email"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
}
