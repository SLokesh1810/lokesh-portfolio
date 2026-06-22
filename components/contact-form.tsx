"use client";

import { useState } from "react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm dark:border-blue-500/25 dark:bg-zinc-950"
    >
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Send a message directly from here and I&apos;ll reply to your email.
      </p>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
        className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-orange-400 dark:border-blue-500/35 dark:bg-zinc-900 dark:focus:border-blue-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        value={form.email}
        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
        className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-orange-400 dark:border-blue-500/35 dark:bg-zinc-900 dark:focus:border-blue-300"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        required
        value={form.message}
        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
        className="min-h-[140px] flex-1 resize-none rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-orange-400 dark:border-blue-500/35 dark:bg-zinc-900 dark:focus:border-blue-300"
      />

      {status === "success" && (
        <p className="text-sm font-medium text-green-700 dark:text-green-400">
          Message sent successfully. I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-500"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
