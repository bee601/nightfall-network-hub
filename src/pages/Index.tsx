import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/nightfall-logo.png";
import { ParticleField } from "@/components/ParticleField";
import { PlayerCounter } from "@/components/PlayerCounter";
import { IPCopyButton } from "@/components/IPCopyButton";
import { Sword, Puzzle, Zap, Shield, Globe, Star, ChevronDown, ShoppingBag, Heart, Bot, MessageCircle, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Puzzle,
    title: "Custom Plugins",
    desc: "Every core gameplay mechanic is built from scratch by our team. No off-the-shelf plugins — everything is crafted specifically for NightfallNetwork.",
  },
  {
    icon: Sword,
    title: "Unique Gameplay",
    desc: "Experience systems you won't find anywhere else. From custom combat mechanics to exclusive economy features — tailored for our community.",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Optimized servers running on premium hardware. Expect smooth gameplay, minimal lag, and consistent uptime so you can focus on what matters.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat Protection",
    desc: "Custom-built anti-cheat systems keep gameplay fair for everyone. Our team actively monitors and updates protections against the latest exploits.",
  },
  {
    icon: Globe,
    title: "Active Community",
    desc: "Join a growing community of players who share your passion. Regular events, tournaments, and updates keep the experience fresh and exciting.",
  },
  {
    icon: Star,
    title: "Regular Updates",
    desc: "Our development team ships new content and improvements constantly. Follow our Discord to stay up to date with every patch and announcement.",
  },
];

const steps = [
  { step: "01", title: "Launch Minecraft", desc: "Open Minecraft Java Edition on your PC." },
  { step: "02", title: "Multiplayer", desc: "Click 'Multiplayer' from the main menu." },
  { step: "03", title: "Add Server", desc: "Click 'Add Server' and paste the IP below." },
  { step: "04", title: "Join & Play", desc: "Hit connect and enter the NightfallNetwork!" },
];

const DISCORD_INVITE = "https://discord.gg/KVv7ta68NG";

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "hsl(var(--background))" }}>
      <ParticleField />

      {/* ── NAV ─────────────────────────────────── */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-5 lg:px-16">
        <div className="flex items-center gap-3">
          <img src={logo} alt="NightfallNetwork logo" className="h-10 w-10 drop-shadow-lg" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">
            Nightfall<span className="text-primary">Network</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#join" className="hover:text-primary transition-colors">How to Join</a>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Discord
          </a>
          <a
            href="#store"
            className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all"
            style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--accent))", border: "1px solid hsl(var(--accent) / 0.35)" }}
          >
            <ShoppingBag className="h-4 w-4" />
            Store
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────── */}
      <section className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-4 text-center">
        {/* Hero BG Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover object-center"
            style={{ opacity: 0.45 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, hsl(var(--background) / 0.3) 0%, hsl(var(--background)) 90%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(var(--background) / 0) 0%, hsl(var(--background) / 0.6) 100%)" }}
          />
        </div>

        {/* Logo */}
        <div className="animate-fade-in-up mb-6" style={{ animationDelay: "0.1s" }}>
          <div className="relative inline-block">
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: "hsl(var(--primary) / 0.25)", transform: "scale(1.4)" }}
            />
            <img
              src={logo}
              alt="NightfallNetwork"
              className="relative h-28 w-28 md:h-36 md:w-36 animate-bounce-subtle drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Title */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <h1 className="mb-2 font-display text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            <span className="animate-shimmer">Nightfall</span>
            <span className="text-foreground"> Network</span>
          </h1>
          <p className="mb-8 text-base md:text-lg text-muted-foreground font-light tracking-wide max-w-xl mx-auto">
            A Minecraft server built different — custom plugins, unique gameplay, and a thriving community waiting for you.
          </p>
        </div>

        {/* Player Count */}
        <div
          className="animate-fade-in-up mb-8 rounded-2xl px-8 py-6 backdrop-blur-sm"
          style={{
            animationDelay: "0.4s",
            background: "hsl(var(--card) / 0.8)",
            border: "1px solid hsl(var(--primary) / 0.2)",
          }}
        >
          <PlayerCounter />
        </div>

        {/* IP Copy */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
          <IPCopyButton />
        </div>

        {/* Scroll hint */}
        <a
          href="#features"
          className="animate-fade-in-up absolute bottom-8 flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="uppercase tracking-widest">Explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* ── FEATURES ────────────────────────────── */}
      <section id="features" className="relative z-10 px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">What Makes Us Different</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl text-foreground">
              Built From the Ground Up
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Every plugin on NightfallNetwork is crafted in-house. No recycled, off-the-shelf solutions — just original content designed for the best experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(var(--primary) / 0.4)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px hsl(var(--primary) / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(var(--border))";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "hsl(var(--primary) / 0.12)", color: "hsl(var(--primary))" }}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELF-MADE PLUGINS HIGHLIGHT ─────────── */}
      <section className="relative z-10 px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 text-center"
            style={{ background: "linear-gradient(135deg, hsl(178 85% 45% / 0.08) 0%, hsl(258 60% 50% / 0.08) 100%)", border: "1px solid hsl(var(--primary) / 0.2)" }}
          >
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full blur-3xl"
              style={{ background: "hsl(var(--primary) / 0.15)" }}
            />
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Pride</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl text-foreground mb-4">
              100% Self-Made Plugins
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              Every single plugin powering NightfallNetwork was written by our own developers. This means faster updates, better quality, and features you'll only ever find here. We don't settle for generic — we build exactly what our community needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {["Custom Economy", "Unique Combat", "Player Quests", "Rank System", "Anti-Cheat", "Custom Events", "Guild System", "Auction House"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-1.5 text-xs font-medium"
                  style={{ background: "hsl(var(--primary) / 0.12)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.25)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCORD & BOTS ────────────────────── */}
      <section className="relative z-10 px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div
            className="relative overflow-hidden rounded-3xl"
            style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
          >
            <div className="grid md:grid-cols-2">
              {/* Left — Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">Community</p>
                <h2 className="font-display text-3xl font-bold md:text-4xl text-foreground mb-4">
                  Join Our Discord
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Stay connected with the NightfallNetwork community. Get announcements, chat with other players, report bugs, and interact with our <span className="text-accent font-medium">custom-built Discord bots</span> that help manage the server and community.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "hsl(var(--accent) / 0.12)", color: "hsl(var(--accent))" }}>
                      <Bot className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Custom Discord Bots</p>
                      <p className="text-xs text-muted-foreground">Self-made bots for moderation, tickets & server stats</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "hsl(var(--accent) / 0.12)", color: "hsl(var(--accent))" }}>
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Active Community Chat</p>
                      <p className="text-xs text-muted-foreground">Talk with staff and players anytime</p>
                    </div>
                  </div>
                </div>
                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, hsl(258 60% 55%), hsl(258 55% 40%))",
                    color: "hsl(var(--foreground))",
                    boxShadow: "0 0 25px hsl(258 60% 50% / 0.3)",
                  }}
                >
                  Join Discord
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Right — Visual */}
              <div
                className="hidden md:flex items-center justify-center p-12"
                style={{ background: "linear-gradient(135deg, hsl(258 60% 50% / 0.08) 0%, hsl(258 55% 35% / 0.15) 100%)" }}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div
                      className="absolute inset-0 rounded-full blur-3xl"
                      style={{ background: "hsl(var(--accent) / 0.2)", transform: "scale(2)" }}
                    />
                    <div
                      className="relative flex h-24 w-24 items-center justify-center rounded-2xl"
                      style={{ background: "hsl(var(--accent) / 0.15)", border: "1px solid hsl(var(--accent) / 0.3)" }}
                    >
                      <Bot className="h-12 w-12" style={{ color: "hsl(var(--accent))" }} />
                    </div>
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">Custom Bots</p>
                  <p className="text-sm text-muted-foreground mt-1">Built in-house for our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT / STORE BANNER ─────────────── */}
      <section id="store" className="relative z-10 px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(258 60% 50% / 0.12) 0%, hsl(178 85% 45% / 0.06) 100%)",
              border: "1px solid hsl(var(--accent) / 0.25)",
            }}
          >
            {/* Glow effects */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl" style={{ background: "hsl(var(--accent) / 0.12)" }} />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-3xl" style={{ background: "hsl(var(--primary) / 0.1)" }} />

            <div className="relative">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "hsl(var(--accent) / 0.15)", border: "1px solid hsl(var(--accent) / 0.3)" }}>
                <Heart className="h-7 w-7" style={{ color: "hsl(var(--accent))" }} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">Support Us</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl text-foreground mb-4">
                Help Keep NightfallNetwork Running
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed mb-8">
                NightfallNetwork is a passion project — we don't make any money from it. Servers, domains, and development all cost money. By visiting our store, you help cover those costs and keep the community alive. Every purchase directly supports the server.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, hsl(258 60% 55%), hsl(258 50% 40%))",
                  color: "hsl(var(--foreground))",
                  boxShadow: "0 0 30px hsl(258 60% 50% / 0.35)",
                }}
              >
                <ShoppingBag className="h-5 w-5" />
                Visit Store
                <ExternalLink className="h-4 w-4 opacity-60" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground">Store link coming soon — stay tuned!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO JOIN ─────────────────────────── */}
      <section id="join" className="relative z-10 px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Get Started</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl text-foreground">How to Join</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {steps.map((s) => (
              <div
                key={s.step}
                className="flex flex-col gap-3 rounded-2xl p-6 text-center"
                style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
              >
                <span className="font-display text-4xl font-black text-primary/30">{s.step}</span>
                <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-muted-foreground text-sm">Copy the server IP and paste it in Minecraft:</p>
            <IPCopyButton />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer
        className="relative z-10 px-6 py-10 lg:px-16"
        style={{ borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="NightfallNetwork" className="h-8 w-8" />
            <span className="font-display text-sm font-semibold text-foreground">
              Nightfall<span className="text-primary">Network</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang Studios.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NightfallNetwork
          </p>
        </div>
      </footer>
    </div>
  );
}
