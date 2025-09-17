"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { AudioToggle } from "@/components/primitives/AudioToggle";
import { BouncyButton } from "@/components/primitives/BouncyButton";
import { ChipCounter } from "@/components/primitives/ChipCounter";
import { MenuTile } from "@/components/primitives/MenuTile";
import { OrbitalMenu } from "@/components/primitives/OrbitalMenu";
import { games } from "@/lib/data/games";
import { pulsePreset } from "@/lib/motion/presets";
export default function Home() {
  const orbitalItems = games.slice(0, 3).map((game) => ({
    id: game.name,
    content: (
      <span className="text-3xl" aria-hidden>
        {game.emoji}
      </span>
    ),
  }));

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16">
      <header className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5d54a4]">
            Welcome to
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#241b54] sm:text-5xl">
            Chip's Minigame Parlour
          </h1>
          <p className="max-w-xl text-base text-[#4f478c]">
            Dive into a Nintendo-inspired hub where Chip curates bombastic party
            games, gleaming leaderboards, and endlessly delightful surprises.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:items-end">
          <ChipCounter amount={1247} />
          <AudioToggle />
        </div>
      </header>

      <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[420px_1fr]">
        <div className="space-y-6">
          <div className="relative flex flex-col items-center gap-4 rounded-[2.5rem] border border-white/60 bg-white/80 p-10 text-center shadow-[0_40px_80px_-60px_rgba(46,23,120,0.5)] backdrop-blur">
            <motion.div
              {...pulsePreset}
              className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe598] to-[#ffaf5f] text-6xl"
            >
              🎮
            </motion.div>
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-[#241b54]">
                Choose your next adventure
              </h2>
              <p className="text-sm text-[#514a90]">
                Hover to feel the orbit, press to immediately drop into the
                action.
              </p>
            </div>
            <BouncyButton asChild className="rounded-full px-12">
              <Link href="/auth/sign-in">Start playing</Link>
            </BouncyButton>
          </div>
          <div className="hidden justify-center lg:flex">
            <OrbitalMenu items={orbitalItems} />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {games.map((game) => (
            <MenuTile
              key={game.id}
              title={game.name}
              icon={
                <span aria-hidden className="text-2xl">
                  {game.emoji}
                </span>
              }
              tagline={game.tagline}
              players={game.players}
            />
          ))}
        </div>
      </section>

      <footer className="mt-auto flex flex-col items-center gap-4 rounded-3xl border border-white/70 bg-white/80 p-8 text-center shadow-[0_28px_65px_-50px_rgba(40,26,105,0.55)] backdrop-blur">
        <p className="text-sm font-medium text-[#554a92]">
          Sign in to sync achievements and challenge your crew.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <BouncyButton asChild className="rounded-full">
            <Link href="/auth/sign-in">Sign in with Discord</Link>
          </BouncyButton>
          <BouncyButton asChild variant="secondary" className="rounded-full">
            <Link href="/play/guest">Continue as guest</Link>
          </BouncyButton>
        </div>
        <Link
          href="/about"
          className="text-xs font-semibold text-[#5d54a4] underline-offset-4 hover:underline"
        >
          Learn about Chip's minigame legacy
        </Link>
      </footer>
    </main>
  );
}
