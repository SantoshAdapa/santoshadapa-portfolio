import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/SantoshAdapa", 
    icon: Github 
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/santoshadapa", 
    icon: Linkedin 
  },
  { 
    name: "Email", 
    href: "mailto:santoshadapa03@gmail.com", 
    icon: Mail 
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Top section: Logo and Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Santosh<span className="text-primary">.</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Middle section: Quick Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-6 border-t border-b border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom section: Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Adapa Sai Santosh. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              AI + Engineering Portfolio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
