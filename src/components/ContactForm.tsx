"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = `Portfolio message from ${name}`;

    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    const gmailUrl = new URL("https://mail.google.com/mail/");

    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set(
      "to",
      "gloryymungathia@gmail.com"
    );
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    window.location.assign(gmailUrl.toString());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm sm:p-8"
    >
      <div className="grid gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-semibold text-[#17132b]"
          >
            Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-purple-100 bg-[#fcfaff] px-4 py-3.5 text-sm text-[#17132b] outline-none placeholder:text-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-semibold text-[#17132b]"
          >
            Email
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-2xl border border-purple-100 bg-[#fcfaff] px-4 py-3.5 text-sm text-[#17132b] outline-none placeholder:text-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-semibold text-[#17132b]"
          >
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            placeholder="Tell me a little about what you have in mind..."
            className="mt-2 w-full resize-none rounded-2xl border border-purple-100 bg-[#fcfaff] px-4 py-3.5 text-sm leading-6 text-[#17132b] outline-none placeholder:text-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700"
        >
          Send Message
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
