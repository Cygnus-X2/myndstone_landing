import {
  BarChart3,
  CircleDot,
  MoveDown,
  SlidersHorizontal,
  UserRound,
  Waves,
} from "lucide-react";

import productScene from "@/assets/atem-product-scene.png";
import handScene from "@/assets/generated/ritual-frame-02.jpg";
import lightStoneScene from "@/assets/osora-hero.jpg";
import { Toaster } from "@/components/ui/toaster";

const steps = [
  {
    number: "01",
    title: "Choose",
    copy: "Reach for the stone that feels right.",
    icon: CircleDot,
  },
  {
    number: "02",
    title: "Place",
    copy: "Set it on the base. Your session begins.",
    icon: CircleDot,
  },
  {
    number: "03",
    title: "Return",
    copy: "A guided session returns you to stillness.",
    icon: Waves,
  },
];

const features = [
  ["Ritual stones & tactile warmth", CircleDot],
  ["Sessions shaped to your mood", UserRound],
  ["Adaptive light, sound & warmth", SlidersHorizontal],
  ["No screen. No app.", Waves],
  ["Grows with you over time", BarChart3],
];

const stones = [
  ["Obsidian", "Grounding", "stone-obsidian"],
  ["Jade", "Balance", "stone-jade"],
  ["Quartz", "Clarity", "stone-quartz"],
  ["Personal stone", "Your intuition", "stone-personal"],
];

const App = () => {
  return (
    <main className="osora-page">
      <div className="osora-shell">
        <section className="osora-hero">
          <img src={productScene} alt="" className="osora-hero__image" />
          <div className="osora-hero__shade" />
          <header className="osora-nav" aria-label="Primary navigation">
            <a href="#" className="osora-logo" aria-label="Osora home">
              Osora
            </a>
            <nav className="osora-nav__links">
              <a href="#product">Product</a>
              <a href="#stones">Stones</a>
              <a href="#process">How it works</a>
              <a href="#about">About</a>
              <a href="#journal">Journal</a>
            </nav>
            <div className="osora-nav__actions">
              <a href="#cart">Cart (0)</a>
              <a href="#preorder" className="osora-pill osora-pill--small">
                Pre-order
              </a>
            </div>
          </header>

          <div className="osora-hero__content">
            <p className="osora-hero__brand">Osora</p>
            <h1>Return to yourself.</h1>
            <p className="osora-hero__copy">
              A physical ritual for stillness, presence, and calm.
              <br />
              Place a stone. Take a breath. Begin.
            </p>
            <div className="osora-hero__buttons">
              <a href="#preorder" className="osora-pill">
                Pre-order now
              </a>
              <a href="#process" className="osora-link">
                Learn more <MoveDown size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>

        <section className="osora-split osora-split--intro" id="product">
          <figure className="osora-photo osora-photo--hand">
            <img src={handScene} alt="A hand placing a ritual stone on the Osora base" />
          </figure>
          <div className="osora-copy-panel">
            <h2>
              Technology
              <br />
              should disappear.
            </h2>
            <p>
              Osora is not an app.
              <br />
              No notifications.
              <br />
              No endless content.
              <br />
              No screen.
            </p>
            <p>
              Just a simple ritual to bring you
              <br />
              back to yourself.
            </p>
          </div>
        </section>

        <section className="osora-steps" id="process">
          {steps.map(({ number, title, copy, icon: Icon }) => (
            <article className="osora-step" key={number}>
              <Icon className="osora-step__icon" size={34} strokeWidth={1} />
              <div>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="osora-gallery" aria-label="Osora product views">
          <figure>
            <div className="osora-stone-set" aria-hidden="true">
              <i className="stone-sample stone-obsidian" />
              <i className="stone-sample stone-jade" />
              <i className="stone-sample stone-personal" />
              <i className="stone-sample stone-quartz" />
            </div>
          </figure>
          <figure>
            <img src={productScene} alt="Osora base with the personal stone" />
          </figure>
          <figure>
            <div className="osora-phone" aria-label="Osora session screen mockup">
              <div className="osora-phone__ring" />
              <span>Center</span>
            </div>
          </figure>
        </section>

        <section className="osora-split osora-split--truth" id="about">
          <figure className="osora-photo osora-photo--wide">
            <img src={lightStoneScene} alt="Osora on a quiet table beside a cup" />
          </figure>
          <div className="osora-copy-panel osora-copy-panel--truth">
            <h2>
              Built around
              <br />
              a simple truth.
            </h2>
            <p>
              The breath is the bridge between
              <br />
              body and mind.
            </p>
            <p>
              Osora turns an ancient practice
              <br />
              into something you can hold.
            </p>
          </div>
        </section>

        <section className="osora-device">
          <div className="osora-device__text">
            <h2>More than a device.</h2>
            <p>
              Osora weaves stone, sound, and light
              <br />
              into one screen-free ritual —
              <br />
              felt with all your senses.
            </p>
          </div>
          <ul className="osora-feature-list">
            {features.map(([label, Icon]) => (
              <li key={label}>
                <Icon size={20} strokeWidth={1.2} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <figure className="osora-device__image">
            <img src={productScene} alt="Close view of Osora stone and base" />
          </figure>
        </section>

        <section className="osora-stones" id="stones">
          <div className="osora-stones__intro">
            <h2>Stones with meaning.</h2>
            <a href="#stones">View all stones →</a>
          </div>
          {stones.map(([name, meaning, className]) => (
            <article className="osora-stone-card" key={name}>
              <i className={className} aria-hidden="true" />
              <strong>{name}</strong>
              <span>{meaning}</span>
            </article>
          ))}
        </section>

        <section className="osora-final" id="preorder">
          <img src={productScene} alt="" />
          <div>
            <h2>Come home to yourself.</h2>
            <p>Osora</p>
          </div>
        </section>
      </div>
      <Toaster />
    </main>
  );
};

export default App;
