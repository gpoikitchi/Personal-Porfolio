"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import { useLanguage } from "../contexts/LanguageContext";

const EMAILJS_SERVICE_ID  = "service_ftxtg3i";
const EMAILJS_TEMPLATE_ID = "template_nozyaav";
const EMAILJS_PUBLIC_KEY  = "87rfEWrQ4wyNUxnks";

const iconBg: Record<string, string> = {
  indigo: "bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  emerald:"bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  blue:   "bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400",
};

function ContactIcon({ type }: { type: string }) {
  const cls = "w-4 h-4";
  if (type === "mail")     return <Mail className={cls} />;
  if (type === "phone")    return <Phone className={cls} />;
  if (type === "linkedin") return <LinkedinIcon className={cls} />;
  return <GithubIcon className={cls} />;
}

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const f = c.form;
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          title:   form.subject || "Contact depuis portfolio",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputCls = "w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors text-sm";

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {c.title} <span className="gradient-text">{c.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm">{c.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-1">{c.infoTitle}</h3>
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm">
                <MapPin className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                {c.locationText}
              </div>
            </div>

            <div className="space-y-2.5">
              {c.contactItems.map((item) => (
                <a key={item.label} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/20 hover:border-slate-300 dark:hover:border-slate-600/70 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all group shadow-sm dark:shadow-none"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg[item.color]}`}>
                    <ContactIcon type={item.type} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 dark:text-slate-500 text-xs">{item.label}</p>
                    <p className="text-slate-900 dark:text-white text-sm font-medium truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 dark:text-slate-400 text-sm mb-1.5">{f.nameLabel}</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={f.namePlaceholder} className={inputCls} />
                </div>
                <div>
                  <label className="block text-slate-500 dark:text-slate-400 text-sm mb-1.5">{f.emailLabel}</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={f.emailPlaceholder} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-slate-500 dark:text-slate-400 text-sm mb-1.5">{f.subjectLabel}</label>
                <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder={f.subjectPlaceholder} className={inputCls} />
              </div>
              <div>
                <label className="block text-slate-500 dark:text-slate-400 text-sm mb-1.5">{f.messageLabel}</label>
                <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={f.messagePlaceholder} className={`${inputCls} resize-none`} />
              </div>

              <button type="submit" disabled={status === "loading"}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all duration-300 text-sm disabled:opacity-70 ${
                  status === "success" ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                  : status === "error"  ? "bg-rose-600 text-white shadow-lg shadow-rose-500/25"
                  : "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/25"
                }`}
              >
                {status === "success" && <><CheckCircle className="w-4 h-4" />{f.sentBtn}</>}
                {status === "error"   && <><AlertCircle className="w-4 h-4" />{f.errorBtn}</>}
                {(status === "idle" || status === "loading") && <><Send className="w-4 h-4" />{status === "loading" ? f.loadingBtn : f.sendBtn}</>}
              </button>

              <p className="text-slate-400 dark:text-slate-600 text-xs text-center">
                {f.orText}{" "}
                <a href="mailto:messipsa.boussaid@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                  messipsa.boussaid@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
