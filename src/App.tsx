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
    copy: "Pick a stone that matches your intention.",
    icon: CircleDot,
  },
  {
    number: "02",
    title: "Place",
    copy: "Place it on the base and begin.",
    icon: CircleDot,
  },
  {
    number: "03",
    title: "Return",
    copy: "A guided session adapts to your needs and helps you find your center again.",
    icon: Waves,
  },
];

const features = [
  ["Physical ritual stones", CircleDot],
  ["Personalized sessions", UserRound],
  ["Adaptive guidance", SlidersHorizontal],
  ["Works without a screen", Waves],
  ["Learns with you over time", BarChart3],
];

const stones = [
  ["Obsidian", "Grounding", "stone-obsidian"],
  ["Jade", "Balance", "stone-jade"],
  ["Quartz", "Clarity", "stone-quartz"],
  ["Personal stone", "Learns with you", "stone-personal"],
];

const App = () => {
  return (
    <main className="atem-page">
      <div className="atem-shell">
        <section className="atem-hero">
          <img src={productScene} alt="" className="atem-hero__image" />
          <div className="atem-hero__shade" />
          <header className="atem-nav" aria-label="Primary navigation">
            <a href="#" className="atem-logo" aria-label="ATEM home">
              ATEM
            </a>
            <nav className="atem-nav__links">
              <a href="#product">Product</a>
              <a href="#stones">Stones</a>
              <a href="#process">How it works</a>
              <a href="#about">About</a>
              <a href="#journal">Journal</a>
            </nav>
            <div className="atem-nav__actions">
              <a href="#cart">Cart (0)</a>
              <a href="#preorder" className="atem-pill atem-pill--small">
                Pre-order
              </a>
            </div>
          </header>

          <div className="atem-hero__content">
            <p className="atem-hero__brand">ATEM</p>
            <h1>Return to yourself.</h1>
            <p className="atem-hero__copy">
              A physical ritual for presence, reflection and calm.
              <br />
              Place a stone. Take a breath. Begin.
            </p>
            <div className="atem-hero__buttons">
              <a href="#preorder" className="atem-pill">
                Pre-order now
              </a>
              <a href="#process" className="atem-link">
                Learn more <MoveDown size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>

        <section className="atem-split atem-split--intro" id="product">
          <figure className="atem-photo atem-photo--hand">
            <img src={handScene} alt="A hand placing a ritual stone on the ATEM base" />
          </figure>
          <div className="atem-copy-panel">
            <h2>
              Technology
              <br />
              should disappear.
            </h2>
            <p>
              ATEM isn't another app.
              <br />
              No notifications.
              <br />
              No endless content.
              <br />
              No screen.
            </p>
            <p>
              Just a simple ritual that helps you
              <br />
              reconnect with yourself.
            </p>
          </div>
        </section>

        <section className="atem-steps" id="process">
          {steps.map(({ number, title, copy, icon: Icon }) => (
            <article className="atem-step" key={number}>
              <Icon className="atem-step__icon" size={34} strokeWidth={1} />
              <div>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="atem-gallery" aria-label="ATEM product views">
          <figure>
            <div className="atem-stone-set" aria-hidden="true">
              <i className="stone-sample stone-obsidian" />
              <i className="stone-sample stone-jade" />
              <i className="stone-sample stone-personal" />
              <i className="stone-sample stone-quartz" />
            </div>
          </figure>
          <figure>
            <img src={productScene} alt="ATEM base with the personal stone" />
          </figure>
          <figure>
            <div className="atem-phone" aria-label="ATEM session screen mockup">
              <div className="atem-phone__ring" />
              <span>Center</span>
            </div>
          </figure>
        </section>

        <section className="atem-split atem-split--truth" id="about">
          <figure className="atem-photo atem-photo--wide">
            <img src={lightStoneScene} alt="ATEM on a quiet table beside a cup" />
          </figure>
          <div className="atem-copy-panel atem-copy-panel--truth">
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
              ATEM turns this timeless practice
              <br />
              into a physical daily ritual.
            </p>
          </div>
        </section>

        <section className="atem-device">
          <div className="atem-device__text">
            <h2>More than a device.</h2>
            <p>
              ATEM combines physical objects,
              <br />
              adaptive guidance, sound and light
              <br />
              into a new category of mindful technology.
            </p>
          </div>
          <ul className="atem-feature-list">
            {features.map(([label, Icon]) => (
              <li key={label}>
                <Icon size={20} strokeWidth={1.2} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <figure className="atem-device__image">
            <img src={productScene} alt="Close view of ATEM stone and base" />
          </figure>
        </section>

        <section className="atem-stones" id="stones">
          <div className="atem-stones__intro">
            <h2>Stones with meaning.</h2>
            <a href="#stones">View all stones →</a>
          </div>
          {stones.map(([name, meaning, className]) => (
            <article className="atem-stone-card" key={name}>
              <i className={className} aria-hidden="true" />
              <strong>{name}</strong>
              <span>{meaning}</span>
            </article>
          ))}
        </section>

        <section className="atem-final" id="preorder">
          <img src={productScene} alt="" />
          <div>
            <h2>Come home to yourself.</h2>
            <p>ATEM</p>
          </div>
        </section>
      </div>
      <Toaster />
    </main>
  );
};

export default App;
