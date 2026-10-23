"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Clock,
  CheckCircle2,
  FilePlus2,
  Sparkles,
  ArrowRight,
  BrainCircuit,
  MapPin,
  Building2,
  TrendingUp,
  Cpu,
  Layers,
  Scale,
  GraduationCap,
} from "lucide-react";
import ComplaintTracker from "@/components/ComplaintTracker";

const HERO_STATS = [
  {
    title: "Grievances Processed",
    value: "14,892",
    change: "+18.2% automated intake",
    icon: TrendingUp,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Avg Resolution Time",
    value: "16.2 hrs",
    change: "Reduced from 72 hrs baseline",
    icon: Clock,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Critical Ragging SLA",
    value: "< 12 hrs",
    change: "Direct Nodal Officer Dispatch",
    icon: ShieldAlert,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    title: "SLA Compliance Rate",
    value: "97.4%",
    change: "Exceeds 95% statutory standard",
    icon: CheckCircle2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const AICTE_BUREAUS = [
  {
    name: "Anti-Ragging Bureau",
    code: "RAGGING",
    sla: "24h SLA",
    desc: "Hostel harassment, psychological bullying, late night roll calls, physical intimidation.",
    icon: ShieldAlert,
    color: "border-red-500/30 text-red-400",
  },
  {
    name: "Approval Bureau",
    code: "APPROVAL",
    sla: "48h SLA",
    desc: "Seat capacity expansion, unapproved colleges, faculty deficiency, laboratory norms.",
    icon: Building2,
    color: "border-blue-500/30 text-blue-400",
  },
  {
    name: "Finance Bureau",
    code: "FINANCE",
    sla: "72h SLA",
    desc: "Pragati & Saksham scholarship delays, tuition fee refunds, capitation fee extortion.",
    icon: Scale,
    color: "border-emerald-500/30 text-emerald-400",
  },
  {
    name: "Legal Bureau",
    code: "LEGAL",
    sla: "96h SLA",
    desc: "Court writ petitions, statutory non-compliance, unlawful service terminations.",
    icon: BrainCircuit,
    color: "border-indigo-500/30 text-indigo-400",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin text-blue-400" />
            <span>AICTE Autonomous Redressal Intelligence Engine</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Empowering Citizens with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              AI-Driven Redressal
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Integrated portal for registering, monitoring, and tracking institution complaints
            across AICTE bureaus. Features automated sentence-transformer triage, PostGIS
            spatial mapping, and live SLA countdowns.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/file-complaint"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white shadow-xl shadow-blue-600/30 hover:scale-[1.02] transition-all"
            >
              <FilePlus2 className="w-5 h-5" />
              <span>File a Grievance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#tracker"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass-panel hover:bg-slate-800/80 font-semibold text-slate-200 border border-slate-700/80 transition-all"
            >
              <span>Track Ticket Status</span>
            </a>
          </motion.div>
        </div>

        {/* Animated Hero Stats KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {HERO_STATS.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl space-y-2 border border-slate-800/80"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{stat.title}</span>
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
              <div className="text-[11px] text-slate-400 font-medium">{stat.change}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Embedded Complaint Tracker Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComplaintTracker />
      </section>

      {/* AICTE Bureau Capabilities Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Automated Routing
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Specialized AICTE Redressal Bureaus
          </h2>
          <p className="text-sm text-slate-400">
            Complaints are embedded in 384-dimensional space and routed with cosine similarity to
            the statutory officer cell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {AICTE_BUREAUS.map((bureau) => (
            <div
              key={bureau.name}
              className={`glass-panel p-6 rounded-2xl border ${bureau.color} space-y-3 relative overflow-hidden`}
            >
              <div className="flex items-center justify-between">
                <bureau.icon className="w-5 h-5" />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {bureau.sla}
                </span>
              </div>
              <h3 className="font-bold text-base text-white">{bureau.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{bureau.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Sentence-Transformers AI</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              `all-MiniLM-L6-v2` compares semantic distance to filter duplicate complaints (&gt;0.85 similarity)
              and tag critical urgency words.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">PostGIS Spatial Indexing</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              `GEOGRAPHY(POINT, 4326)` geospatial GIST indexes enable sub-second spatial queries,
              regional grievance heatmaps, and institute proximity triage.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Dynamic SLA Accountability</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              SLA thresholds adjust automatically by severity: critical ragging is compressed to 12
              hours with immediate nodal escalation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
