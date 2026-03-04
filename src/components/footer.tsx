"use client";

import { personalInfo, socialLinks } from "@/data/resume";
import { Github, Linkedin, Twitter, Send, Mail } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  send: Send,
  mail: Mail,
};

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Get In Touch</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            I&apos;m always open to discussing new opportunities, collaborations,
            or just having a chat about tech.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:brightness-110"
          >
            <Mail size={16} />
            Say Hello
          </a>

          <div className="mt-10 flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <p>
              Built with{" "}
              <span className="text-foreground">Next.js</span> &{" "}
              <span className="text-foreground">Tailwind CSS</span>
            </p>
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
