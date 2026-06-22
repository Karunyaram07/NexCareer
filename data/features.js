import {
  BrainCircuit,
  Briefcase,
  FileText,
  BarChart3,
} from "lucide-react";

export const features = [
  {
    icon: <FileText className="w-10 h-10 mb-4 text-primary" />,
    title: "AI Resume Builder",
    description:
      "Create professional ATS-friendly resumes with AI-powered content enhancement and personalized recommendations.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Cover Letter Generation",
    description:
      "Generate tailored cover letters for specific job roles and companies using advanced AI assistance.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "Industry Assessments",
    description:
      "Practice with AI-generated industry-specific quizzes and receive instant performance feedback.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 mb-4 text-primary" />,
    title: "Career Insights",
    description:
      "Track progress through analytics, performance reports, and personalized improvement suggestions.",
  },
];