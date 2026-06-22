"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  FileText,
  Briefcase,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="landing-bg relative min-h-[90vh] flex items-center px-6 py-16">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build, Prepare,
            <br />
            and Grow
            <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Your Career with AI
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Create ATS-friendly resumes, generate tailored cover letters,
            assess your industry knowledge, track performance, and receive
            personalized AI-driven recommendations to accelerate your career growth.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/dashboard"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground flex items-center gap-2 hover:scale-105 transition"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#features"
              className="px-6 py-3 rounded-xl border border-border hover:bg-muted/10 transition"
            >
              Explore Features
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-2xl font-bold"></p>
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-2xl font-bold"></p>
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-2xl font-bold"></p>
              <p className="text-sm text-muted-foreground"></p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT — Journey Flow */}
        <div className="flex flex-col items-center w-full mt-7">

          <JourneyCard
            icon={<Target className="h-5 w-5  text-cyan-400" />}
            title="Profile Setup"
            subtitle="Skills & Industry"
            color="bg-cyan-400/10"
          />

          <ArrowConnector />

          <JourneyCard
            icon={<FileText className="h-5 w-5 text-blue-400" />}
            title="Resume Builder"
            subtitle="ATS-Friendly Resume"
            color="bg-blue-400/10"
          />

          <ArrowConnector />

          <JourneyCard
            icon={<Briefcase className="h-5 w-5 text-purple-400" />}
            title="Cover Letter"
            subtitle="AI-Powered Generation"
            color="bg-purple-400/10"
          />

          <ArrowConnector />

          <JourneyCard
            icon={<Brain className="h-5 w-5 text-orange-400" />}
            title="Assessment"
            subtitle="Industry-Specific Quiz"
            color="bg-orange-400/10"
          />

          <ArrowConnector />

          <JourneyCard
            icon={<TrendingUp className="h-5 w-5 text-green-400" />}
            title="Insights"
            subtitle="Performance Analytics"
            color="bg-green-400/10"
          />

          <ArrowConnector />

          {/* Final Success Card */}
          <div className="w-full max-w-sm rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6 text-center">
            <Award className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-bold text-xl">Career Success</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Resume Ready • Interview Ready • Job Ready
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function JourneyCard({ icon, title, subtitle, color }) {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card backdrop-blur-xl p-5 shadow-md">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${color}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function ArrowConnector() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="h-6 w-0.5 bg-linear-to-b from-cyan-400 via-blue-500 to-purple-500" />
      <div className="text-blue-400 text-base leading-none">↓</div>
    </div>
  );
}