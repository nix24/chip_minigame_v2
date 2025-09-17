"use client";

import Link from "next/link";

import { BouncyButton } from "@/components/primitives/BouncyButton";

export default function SignInPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <h1 className="text-4xl font-black text-[#241b54]">
        Choose how you want to play
      </h1>
      <p className="max-w-md text-sm text-[#4f478c]">
        Sign in with your favorite provider or jump in as a guest. You can
        change later in settings.
      </p>
      <div className="flex w-full flex-col gap-3">
        <BouncyButton className="rounded-full">
          Sign in with Discord
        </BouncyButton>
        <BouncyButton className="rounded-full" variant="secondary">
          Sign in with Google
        </BouncyButton>
        <BouncyButton className="rounded-full" variant="outline">
          Sign in with GitHub
        </BouncyButton>
        <BouncyButton className="rounded-full" variant="secondary">
          Continue as guest
        </BouncyButton>
      </div>
      <Link
        href="/"
        className="text-xs font-semibold text-[#5d54a4] underline-offset-4 hover:underline"
      >
        Back to Chip's Parlour
      </Link>
    </main>
  );
}
