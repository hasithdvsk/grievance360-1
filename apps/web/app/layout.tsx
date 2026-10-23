import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ShieldCheck, FilePlus2, Search, Activity, ExternalLink, Sparkles } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grievance360 | AICTE Autonomous Grievance Redressal Platform",
  description:
    "AI-powered citizen and student grievance redressal system for AICTE institutions. Real-time NLP triage, spatial tracking, and dynamic SLA accountability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-100 relative antialiased selection:bg-blue-500 selection:text-white`}>
        {/* Ambient Glow Gradients */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px]" />
          <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 left-1/3 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-[140px]" />
        </div>

        {/* Global Glassmorphic Header */}
        <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
                    Grievance360
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    AICTE AI
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Centralized Redressal Portal
                </span>
              </div>
            </Link>

            {/* Navigation & Action Links */}
            <nav className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/#tracker"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
              >
                <Search className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline">Track Ticket</span>
              </Link>
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
              >
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">Admin Analytics</span>
              </Link>
              <Link
                href="/file-complaint"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]"
              >
                <FilePlus2 className="w-4 h-4" />
                <span>File Grievance</span>
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="mt-20 border-t border-slate-800/80 glass-panel py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>AICTE Autonomous Grievance Redressal Monitoring Cell &copy; 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-slate-400">NLP Engine Active</span>
              </span>
              <span>API: <code className="text-blue-400">v1.0.0</code></span>
            </div>
          </div>
        </footer>

        {/* Floating AI & Messenger Chatbot Widget (Prompt 13) */}
        <ChatWidget />
      </body>
    </html>
  );
}
