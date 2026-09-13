import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { PageWrap, Heading } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

const EMAIL = "madhumidhacse883@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Madhumidha S" },
      {
        name: "description",
        content: "Get in touch for roles, freelance projects or collaborations.",
      },
      { property: "og:title", content: "Contact — Madhumidha S" },
      { property: "og:description", content: "Reach out by email or on social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type Errors = { name?: string; email?: string; message?: string };

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Enter a valid email address";
    if (values.message.trim().length < 5) next.message = "Message is a bit too short";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = "mt-2 w-full rounded-xl bg-secondary px-4 py-3 outline-none ring-primary/50 focus:ring-2";

  return (
    <PageWrap>
      <Heading
        kicker="Say hello"
        title="Contact"
        sub="Tell me about your idea — I usually reply within a day."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl glass p-7"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="grid min-h-[420px] place-items-center text-center"
              >
                <div>
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                    className="mx-auto grid size-20 place-items-center rounded-full bg-primary/15 text-primary glow"
                  >
                    <CheckCircle2 className="size-10" />
                  </motion.div>
                  <h2 className="mt-6 font-display text-2xl font-bold">Message ready to send</h2>
                  <p className="mt-3 text-muted-foreground">
                    Your mail app just opened with the message filled in. If nothing opened, write to{" "}
                    <a className="text-primary hover:underline" href={`mailto:${EMAIL}`}>
                      {EMAIL}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setValues({ name: "", email: "", message: "" });
                    }}
                    className="mt-7 rounded-full glass px-6 py-3 text-sm font-medium hover:glow"
                  >
                    Write another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                noValidate
              >
                <label className="block text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" value={values.name} onChange={set("name")} className={field} />
                {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}

                <label className="mt-5 block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={set("email")}
                  className={field}
                />
                {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}

                <label className="mt-5 block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={set("message")}
                  className={field}
                />
                {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground glow"
                >
                  <Send className="size-4" /> Send message
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-8 rounded-3xl glass p-7"
        >
          <div className="space-y-5">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary"
            >
              <Mail className="size-5" /> {EMAIL}
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-5" /> Chennai, India — open to remote
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-lg font-bold">Find me online</h2>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </PageWrap>
  );
}
