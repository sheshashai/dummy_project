import Image from "next/image";
import { PixelBurst } from "./components/PixelBurst";
import { SocialIcon } from "./components/SocialIcon";
import { WaitlistForm } from "./components/WaitlistForm";
import { socials, youtube } from "./socials";

const products = [
  {
    name: "Tigan Assist",
    text: "Drafts answers to customer questions from your help docs and past tickets. Your team reviews, edits and sends.",
  },
  {
    name: "Tigan Flow",
    text: "Describe a chore in plain words — “copy new invoices into the tracker every Friday” — and it runs on its own.",
  },
  {
    name: "Tigan Lens",
    text: "Ask your sales or stock numbers a question and get a chart back. No spreadsheets, no SQL.",
  },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  const featured = socials.filter((s) => s.featured);
  const others = socials.filter((s) => !s.featured);

  return (
    <>
      <header className="site-header">
        <a href="#top" className="wordmark">
          <Image src="/logo.jpg" alt="" width={40} height={40} priority />
          <span>Tigan.AI</span>
        </a>
        <nav aria-label="Main">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#follow">Follow us</a>
        </nav>
        <a href="#waitlist" className="button button-small">Join the waitlist</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>AI that learns your business.</h1>
            <p>
              Tigan.AI Innovations builds assistants for support, admin and reporting that plug into the
              tools your team already uses. Nothing to migrate, nothing to relearn.
            </p>
            <div className="hero-actions">
              <a href="#waitlist" className="button">Join the waitlist</a>
              <a href={youtube.href} {...ext} className="text-link">
                <SocialIcon id="youtube" size={18} />
                Watch the demos on YouTube
              </a>
            </div>
          </div>
          <div className="hero-art">
            <PixelBurst />
            <Image
              src="/logo.jpg"
              alt="Tigan.AI Innovations logo"
              width={420}
              height={420}
              className="hero-logo"
              priority
            />
          </div>
        </section>

        <section id="products" className="band products">
          <h2>What we’re making</h2>
          <ul className="trace">
            {products.map((p) => (
              <li key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="band about">
          <h2>About us</h2>
          <p className="about-lead">
            We’re a small team of engineers and designers who think AI should behave like a dependable
            colleague: it does the repetitive part, shows its work, and leaves the decisions to you.
          </p>
        </section>

        <section id="follow" className="band follow">
          <h2>Follow the build</h2>
          <p className="follow-intro">We share what we’re working on as we go. Pick where you’d like to keep up.</p>

          <div className="follow-featured">
            {featured.map((s) => (
              <a key={s.id} href={s.href} {...ext} className={`follow-card follow-${s.id}`}>
                <SocialIcon id={s.id} size={34} />
                <span className="follow-name">{s.name}</span>
                <span className="follow-handle">{s.handle}</span>
                <span className="follow-about">{s.about}</span>
                <span className="follow-cta">Open {s.name}</span>
              </a>
            ))}
          </div>

          <ul className="follow-more">
            {others.map((s) => (
              <li key={s.id}>
                <a href={s.href} {...ext} className={`follow-${s.id}`}>
                  <SocialIcon id={s.id} size={20} />
                  <span>
                    <strong>{s.name}</strong>
                    {s.about}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="waitlist" className="band waitlist">
          <div>
            <h2>Try it before everyone else</h2>
            <p>We’re opening access a few teams at a time. Leave your email and we’ll let you know when it’s your turn.</p>
          </div>
          <WaitlistForm />
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Tigan.AI Innovations</p>
        <ul aria-label="Tigan.AI Innovations on social media">
          {socials.map((s) => (
            <li key={s.id}>
              <a href={s.href} {...ext} aria-label={s.name} title={s.name}>
                <SocialIcon id={s.id} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
