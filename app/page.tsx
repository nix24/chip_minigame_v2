"use client";

import { motion } from "framer-motion";
import {
  Cat,
  Crown,
  PawPrint,
  Puzzle,
  ShoppingBag,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";

import { AudioToggle } from "@/components/primitives/AudioToggle";
import { BouncyButton } from "@/components/primitives/BouncyButton";
import { ChipCounter } from "@/components/primitives/ChipCounter";
import { MenuTile } from "@/components/primitives/MenuTile";
import { games } from "@/lib/data/games";
import { pulsePreset } from "@/lib/motion/presets";

const menuItems = [
  {
    id: "arcade",
    title: "Arcade Games",
    subtitle: "Lightning",
    tagline: "Quick-fire chaos and high-score chases for the speed runners.",
    icon: <PawPrint aria-hidden className="size-8" />,
    active: true,
  },
  {
    id: "table",
    title: "Table Games",
    subtitle: "Strategic",
    tagline: "Classic Chip parlour duels with a playful house advantage.",
    icon: <Cat aria-hidden className="size-8" />,
  },
  {
    id: "leaderboards",
    title: "Leaderboards",
    subtitle: "Competitive",
    tagline:
      "Track bragging rights, streaks, and season trophies in real time.",
    icon: <Trophy aria-hidden className="size-8" />,
  },
  {
    id: "shop",
    title: "Chip Shop",
    subtitle: "Cosmetics",
    tagline: "Redeem tokens for neon flair, mascots, and seasonal surprises.",
    icon: <ShoppingBag aria-hidden className="size-8" />,
  },
  {
    id: "settings",
    title: "Settings",
    subtitle: "Control",
    tagline: "Tune visuals, input modes, and accessibility assists on the fly.",
    icon: <Sparkles aria-hidden className="size-8" />,
  },
];

export default function Home() {
  const featuredGames = games.slice(0, 3);

  return (
    <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-20 px-6 py-16 lg:px-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,_rgba(255,99,226,0.3),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,_rgba(106,90,255,0.25),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(6,0,21,0.15),_rgba(26,4,55,0.85)_45%,_rgba(6,0,21,0.95))]" />
      </div>

      <header className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center gap-3 text-[#f6d3ff]/70 lg:justify-start">
            <span className="text-xs font-semibold uppercase tracking-[0.6em]">
              Chip's
            </span>
            <span
              className="h-px w-10 bg-[rgba(255,214,74,0.35)]"
              aria-hidden
            />
            <span className="text-xs font-semibold uppercase tracking-[0.6em]">
              Parlour
            </span>
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
              Minigame Hub
            </h1>
            <p className="mx-auto max-w-2xl text-base text-[#d8c9ff] lg:mx-0">
              Slip into a neon dreamland where every selection bursts with
              feedback. Pick a category, ride the glow, and Chip will guide you
              straight to the showdown.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <ChipCounter amount={3127} label="Chip Tokens" />
            <AudioToggle initiallyOn={false} />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <motion.div
            {...pulsePreset}
            className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle,_rgba(255,214,74,0.22)_0%,_rgba(22,5,45,0)_70%)] blur-xl"
            aria-hidden
          />
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute h-80 w-80 rounded-full border border-[rgba(255,214,74,0.35)]"
            aria-hidden
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute h-64 w-64 rounded-full border border-[rgba(255,99,226,0.35)]"
            aria-hidden
          />
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-[linear-gradient(145deg,_rgba(24,6,53,0.9),_rgba(12,1,26,0.9))] shadow-[0_35px_95px_-55px_rgba(255,99,226,0.65)]">
            <Cat aria-hidden className="size-24 text-[#ffd54a]" />
          </div>
        </div>
      </header>

      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between text-[#f7dfff]">
          <div className="flex items-center gap-3">
            <Crown aria-hidden className="size-5 text-[#ffd54a]" />
            <span className="text-sm font-semibold uppercase tracking-[0.4em]">
              Main Menu
            </span>
          </div>
          <Puzzle aria-hidden className="size-5 text-[#ff63e2]" />
        </div>
        <div className="grid gap-6 lg:grid-cols-5">
          {menuItems.map((item) => (
            <MenuTile
              key={item.id}
              title={item.title}
              icon={item.icon}
              tagline={item.tagline}
              subtitle={item.subtitle}
              active={item.active}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-[#d5c7ff]/70">
            <span
              className="h-px w-10 bg-[rgba(255,214,74,0.35)]"
              aria-hidden
            />
            <span className="text-xs uppercase tracking-[0.6em]">
              Press Start
            </span>
            <span
              className="h-px w-10 bg-[rgba(255,214,74,0.35)]"
              aria-hidden
            />
          </div>
          <BouncyButton asChild size="lg" className="px-16">
            <Link href="/play">Launch Parlour</Link>
          </BouncyButton>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#d8c9ff]/80">
            <Sparkles aria-hidden className="size-5 text-[#ffd54a]" />
            <h2 className="text-xl font-bold text-white">
              Tonight's Highlights
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {featuredGames.map((game) => (
              <div
                key={game.id}
                className="relative overflow-hidden rounded-2xl border border-[rgba(132,97,210,0.35)] bg-[rgba(18,5,40,0.85)] p-5 shadow-[0_26px_65px_-48px_rgba(12,0,32,0.95)]"
              >
                <div className="flex items-center gap-2 text-[#ffd54a]">
                  <span aria-hidden className="text-2xl">
                    {game.emoji}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#d7c6ff]">
                    {game.players}
                  </span>
                </div>
                <p className="mt-4 text-lg font-semibold text-white">
                  {game.name}
                </p>
                <p className="mt-3 text-xs text-[#d5c7ff]/70">{game.tagline}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#d8c9ff]/80">
            <Sparkles aria-hidden className="size-5 text-[#ff63e2]" />
            <h2 className="text-xl font-bold text-white">Quick Actions</h2>
          </div>
          <div className="flex flex-col gap-4">
            <BouncyButton asChild size="lg">
              <Link href="/auth/sign-in">Sign in & sync progress</Link>
            </BouncyButton>
            <BouncyButton asChild size="lg" variant="secondary">
              <Link href="/play/guest">Jump in as guest</Link>
            </BouncyButton>
            <BouncyButton asChild size="lg" variant="outline">
              <Link href="/about">Discover Chip's story</Link>
            </BouncyButton>
          </div>
        </div>
      </section>
    </main>
  );
}
