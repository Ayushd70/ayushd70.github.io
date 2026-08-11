"use client";

import { personalInfo, socialLinks } from "@/data/resume";
import { Github, Linkedin, Send, Mail } from "lucide-react";

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: XIcon,
  send: Send,
  mail: Mail,
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-border py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-start">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Contact
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Open to discussing new opportunities, collaborations, or chatting
            about Flutter, on-device AI, and mobile architecture.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:brightness-110"
          >
            <Mail size={16} />
            Say Hello
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-1 text-xs text-muted-foreground">
            <p>
              Built with <span className="text-foreground">Next.js</span> &{" "}
              <span className="text-foreground">Tailwind CSS</span>
            </p>
            <p>
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
