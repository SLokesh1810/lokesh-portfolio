"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Name, email, and message are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setForm(initialForm);
    setStatus("success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col gap-4 rounded-2xl border border-blue-500/25 bg-zinc-950 p-6 shadow-sm"
    >
      <p className="text-sm text-zinc-300">
        Fill in your details and send via Gmail. A compose window opens in a new tab with your
        message pre-filled.
      </p>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
        className="rounded-xl border border-blue-500/35 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-blue-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        value={form.email}
        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
        className="rounded-xl border border-blue-500/35 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-blue-300"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        required
        value={form.message}
        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
        className="min-h-[140px] flex-1 resize-none rounded-xl border border-blue-500/35 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-blue-300"
      />

      {status === "success" && (
        <p className="text-sm font-medium text-green-400">
          Gmail compose opened. Send the message from there and I&apos;ll reply to your email.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
      >
        Send via Gmail
      </button>
    </form>
  );
}
