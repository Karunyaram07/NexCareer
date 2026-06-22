import Link from "next/link";
import { Mail, FileText, PenBox, GraduationCap, LayoutDashboard } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-4 py-12">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            {/* Inline NexCareer logo */}
            <Link href="/" aria-label="NexCareer home">
              <svg
                width="160"
                height="38"
                viewBox="0 0 180 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="8" width="11" height="30" rx="5.5"
                  transform="rotate(-20 2 8)" fill="#8B6FFF" opacity="0.75" />
                <rect x="14" y="4" width="11" height="36" rx="5.5"
                  transform="rotate(-20 14 4)" fill="#6C47FF" />
                <circle cx="28" cy="6" r="5" fill="#F5A623" />
                <text x="44" y="30"
                  fontFamily="'Inter', 'Segoe UI', sans-serif"
                  fontWeight="800" fontSize="22" fill="currentColor"
                  className="fill-foreground" letterSpacing="-0.5">
                  Nex
                </text>
                <text x="88" y="30"
                  fontFamily="'Inter', 'Segoe UI', sans-serif"
                  fontWeight="800" fontSize="22" fill="#6C47FF" letterSpacing="-0.5">
                  Career
                </text>
              </svg>
            </Link>

            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI-powered career development platform. Build resumes, prep for interviews,
              and accelerate your professional growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="https://github.com/karunyaramcse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <FaGithub className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/prabhu-ram-karunya-sunkara-11986528a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>

              <Link
                href="https://twitter.com/karunyaram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <FaXTwitter className="h-4 w-4" />
              </Link>

              <Link
                href="mailto:sprkarunya986@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Tools
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/resume" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  <FileText className="h-4 w-4" />
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/ai-cover-letters" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  <PenBox className="h-4 w-4" />
                  Cover Letter Generator
                </Link>
              </li>
              <li>
                <Link href="/interview" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  <GraduationCap className="h-4 w-4" />
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  <LayoutDashboard className="h-4 w-4" />
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NexCareer. All rights reserved.
          </p>

          {/* Built by credit */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with{" "}
            <span className="text-red-500 animate-pulse">❤️</span>
            {" "}by{" "}
            <Link
              href="https://github.com/karunyaramcse"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline underline-offset-4 transition-all"
            >
              karunyaram
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;