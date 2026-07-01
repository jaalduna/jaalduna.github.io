import { Github, Linkedin, Mail, Download } from "lucide-react";
import { contact } from "../data/contact";
import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { lang, t } = useLanguage();
  const cvHref = lang === "es" ? "/cv-joaquin-aldunate-es.pdf" : "/cv-joaquin-aldunate-en.pdf";

  const socialLinks = [
    { href: contact.github, icon: Github, label: "GitHub" },
    { href: contact.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${contact.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            {new Date().getFullYear()} Joaquin Aldunate. {t.footer.builtWith}
          </p>

          {/* Social links + CV download */}
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
            <a
              href={cvHref}
              download
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-sky-400 transition-colors"
              aria-label={t.footer.downloadCV}
            >
              <Download size={16} />
              {t.footer.downloadCV}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
