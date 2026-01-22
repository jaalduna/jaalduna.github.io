import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/jaalduna", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/jaalduna", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:joaquin.aldunate@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            {new Date().getFullYear()} Joaquin Aldunate. Built with React + Tailwind.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sky-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
