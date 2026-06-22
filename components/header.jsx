import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboardIcon,
  PenBox,
  StarsIcon,
} from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { checkUser } from "@/lib/checkUser";

// Inline SVG logo — matches the NexCareer brand exactly, always crisp at any size
const NexCareerLogo = () => (
  <svg
    width="180"
    height="44"
    viewBox="0 0 180 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="NexCareer"
  >
    {/* Icon mark — two overlapping diagonal bars + orange accent dot */}
    <g>
      {/* Back bar (light purple) */}
      <rect
        x="2" y="8" width="11" height="30" rx="5.5"
        transform="rotate(-20 2 8)"
        fill="#8B6FFF"
        opacity="0.75"
      />
      {/* Front bar (solid purple) */}
      <rect
        x="14" y="4" width="11" height="36" rx="5.5"
        transform="rotate(-20 14 4)"
        fill="#6C47FF"
      />
      {/* Orange accent dot */}
      <circle cx="28" cy="6" r="5" fill="#F5A623" />
    </g>

    {/* Wordmark */}
    {/* "Nex" in dark navy */}
    <text
      x="44" y="30"
      fontFamily="'Inter', 'Segoe UI', sans-serif"
      fontWeight="800"
      fontSize="22"
      fill="#1E1B4B"
      letterSpacing="-0.5"
    >
      Nex
    </text>
    {/* "Career" in purple */}
    <text
      x="88" y="30"
      fontFamily="'Inter', 'Segoe UI', sans-serif"
      fontWeight="800"
      fontSize="22"
      fill="#6C47FF"
      letterSpacing="-0.5"
    >
      Career
    </text>
  </svg>
);

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50">
      <nav className="container mx-auto flex h-20 items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-6">

          {/* Logo — inline SVG, no broken image, always sharp */}
          <Link href="/" className="flex items-center" aria-label="NexCareer home">
            <NexCareerLogo />
          </Link>

          {/* Industry Insights */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50"
                aria-label="Industry insights"
              >
                <LayoutDashboardIcon className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/interview">Reports</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/interview">Trends</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Case Studies</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Growth Tools */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letters" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Show when="signed-out">
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6C47FF] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>

      </nav>
    </header>
  );
};

export default Header;