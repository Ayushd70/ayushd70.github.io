"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/resume";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-24 sm:px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="mb-3 font-mono text-xs text-accent sm:text-sm">Hi 👋, I am</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {personalInfo.name}
            </h1>
            <h2 className="mt-3 text-lg text-muted-foreground sm:text-2xl md:text-3xl">
              {personalInfo.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              {personalInfo.summary}
            </p>

            <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-4 md:justify-start">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:brightness-110"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-64 md:w-64">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent/30 to-accent/10 blur-md" />
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                width={256}
                height={256}
                priority
                className="relative rounded-full border-2 border-border object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 flex justify-center md:mt-14"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="animate-bounce text-muted-foreground transition-colors hover:text-accent"
            aria-label="Scroll to about"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
