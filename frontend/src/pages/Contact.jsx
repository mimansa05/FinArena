import { Mail, MapPin, MessageSquareText } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "hello@finarena.app" },
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h1 className="page-title">Let's build better financial learning together.</h1>
            <p className="page-copy">
              Reach out for partnerships, feedback, feature ideas, or help
              getting started with the FinArena experience.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-[24px] border border-white/40 bg-white/70 p-4 shadow-[0_16px_40px_rgba(168,85,247,0.08)]"
                >
                  <div className="icon-chip">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[#a287c7]">
                      {label}
                    </p>
                    <p className="mt-1 font-medium text-[#60309b]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="soft-card" onSubmit={handleSubmit}>
            <div className="icon-chip">
              <MessageSquareText size={22} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-[#5f2e99]">
              Send a message
            </h2>
            <div className="mt-6 grid gap-4">
              <input className="form-input" type="text" placeholder="Your name" />
              <input className="form-input" type="email" placeholder="Email address" />
              <textarea
                className="form-input min-h-[150px] resize-none"
                placeholder="Tell us what you need"
              />
              <button type="submit" className="primary-pill justify-center">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
