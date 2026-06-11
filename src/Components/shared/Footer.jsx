


import Link from "next/link";
import Image from "next/image";
import {
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
  LogoPinterest,
} from "@gravity-ui/icons";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={40}
              />
            </Link>

            <p className="mt-4 max-w-xs">
              The AI-native career platform. Built for people who
              take their work seriously.
            </p>

            <div className="mt-8 flex gap-3">
              <Link
                href="https://facebook.com"
                className="hover:bg-blue-600 rounded-full text-white bg-zinc-800 p-3"
              >
                <LogoFacebook />
              </Link>

              <Link
                href="https://github.com"
                className="hover:bg-gray-600 rounded-full text-white bg-zinc-800 p-3"
              >
                <LogoGithub/>
              </Link>

              <Link
                href="https://linkedin.com"
                className="hover:bg-blue-600 rounded-full text-white bg-zinc-800 p-3"
              >
                
                <LogoLinkedin />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-white font-semibold">
              Product
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/jobs">Job Discovery</Link>
              <Link href="/worker-ai">Worker AI</Link>
              <Link href="/companies">Companies</Link>
              <Link href="/salary">Salary Data</Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-white font-semibold">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/help">Help Center</Link>
              <Link href="/career-library">
                Career Library
              </Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-white font-semibold">
              Resources
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/brand-guideline">
                Brand Guideline
              </Link>
              <Link href="/newsroom">Newsroom</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-6 md:flex-row md:justify-between">
          <p>Copyright 2024 — Syed Takmil</p>

<p>Made with ❤️ By Syed Takmil</p>
          <div className="flex gap-4">
            <Link href="/terms">Terms & Policy</Link>
            <Link href="/privacy">Privacy Guideline</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}