import { useState } from "react";
import axios from "axios";
import { useLang } from "@/context/LangContext";
import Reveal from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const channels = [
    { label: "Email", value: "tegar.dev@gmail.com", href: "mailto:tegarfikri.dev@gmail.com" },
    { label: "WhatsApp", value: "+62 898 2950 162", href: "https://wa.me/628982950162" },
    // { label: "LinkedIn", value: "linkedin.com/in/tegarfikri", href: "https://linkedin.com/in/tegarfikri" },
    // { label: "GitHub", value: "github.com/tegarfikri", href: "https://github.com/tegarfikri" },
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 lg:py-32 border-t border-white/10 grain overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-16">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <div className="font-mono text-[11px] tracking-widest text-amber-400 mb-3">
                {t.contact.tag}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display tracking-tight text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.02] whitespace-pre-line">
                {t.contact.title}
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-white/65 max-w-md leading-relaxed">{t.contact.sub}</p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12">
                <div className="font-mono text-[10px] tracking-widest text-white/40 mb-5">
                  {t.contact.direct.toUpperCase()}
                </div>
                <ul className="space-y-3">
                  {channels.map((c) => (
                    <li key={c.label} className="flex items-baseline gap-4 group">
                      <span className="font-mono text-[10px] tracking-widest text-white/35 w-20">
                        {c.label}
                      </span>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`contact-channel-${c.label.toLowerCase()}`}
                        className="text-white/80 hover:text-amber-400 transition-colors text-base lg:text-lg font-display"
                      >
                        {c.value}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="/downloads/tegar-fikri-maulana.zip"
                  download="tegar-fikri-maulana.zip"
                  data-testid="contact-download-cv"
                  className="mt-8 inline-flex items-center gap-3 border border-white/20 text-white/80 hover:border-amber-500 hover:text-amber-400 font-mono text-[11px] tracking-widest px-4 py-3 transition-colors"
                >
                  <span className="inline-block w-3.5 h-3.5 border border-current relative">
                    <span className="absolute inset-x-0 -bottom-px text-center text-[8px] leading-none">↓</span>
                  </span>
                  DOWNLOAD CV (.ZIP)
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <Reveal delay={180}>
              <form
                onSubmit={onSubmit}
                data-testid="contact-form"
                className="border border-white/10 p-6 lg:p-10 bg-[#0e0e0e]"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-mono text-[10px] tracking-widest text-white/40 block mb-2"
                    >
                      {t.contact.name.toUpperCase()}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={onChange}
                      data-testid="contact-name"
                      className="w-full bg-transparent border-b border-white/15 focus:border-amber-500 outline-none py-3 text-white placeholder:text-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-mono text-[10px] tracking-widest text-white/40 block mb-2"
                    >
                      {t.contact.email.toUpperCase()}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      data-testid="contact-email"
                      className="w-full bg-transparent border-b border-white/15 focus:border-amber-500 outline-none py-3 text-white placeholder:text-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] tracking-widest text-white/40 block mb-2"
                    >
                      {t.contact.message.toUpperCase()}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      data-testid="contact-message"
                      className="w-full bg-transparent border-b border-white/15 focus:border-amber-500 outline-none py-3 text-white placeholder:text-white/30 resize-none transition-colors"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div
                      data-testid="contact-status"
                      className="font-mono text-[10px] tracking-widest min-h-[16px]"
                    >
                      {status === "sent" && (
                        <span className="text-amber-400">{t.contact.sent}</span>
                      )}
                      {status === "error" && (
                        <span className="text-red-400">{t.contact.failed}</span>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      data-testid="contact-submit"
                      className="bg-amber-500 text-[#0c0c0c] font-mono text-xs tracking-widest px-6 py-3 hover:bg-amber-400 disabled:opacity-50 transition-colors"
                    >
                      {status === "sending" ? t.contact.sending : `${t.contact.send} →`}
                    </button>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
