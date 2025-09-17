# Chip's Minigame Parlour — Delivery Tracker

## Data/Algorithm Decision Snapshot
- Problem needs: real-time lobby management, per-game state tracking, leaderboards, and turn sequencing.
- Universal chart path: Start → Data fits in RAM → Need key→value lookup → Need ordered iteration → Hash Table + Array.
- Selected structures: hash maps (Convex tables + in-memory caches) for session/state lookups; arrays for deterministic iteration (turn order, leaderboards).
- Notes: revisit if we introduce large-scale analytics that exceed in-memory constraints or require range queries.

## Phase Overview

### Phase 0 · Architectural Groundwork (Week 0)
- [x] Audit current Next.js scaffold and identify required config updates for Next.js 15/App Router.
- [x] Confirm TypeScript strictness, path aliases, and lint/test tooling (Biome, Vitest) are wired up.
- [x] Plan shadcn/ui import strategy (component generator, tailwind preset) and theme tokens.
- [x] Map out shared "Nintendo feel" primitives (motion presets, sound hooks, color tokens).
- [x] Document environment secrets strategy (NextAuth providers, Convex, GlitchTip).

### Phase 1 · Nintendo-Style Foundation (Weeks 1–2)
- [x] Integrate shadcn/ui, Tailwind CSS, and animation libs (Framer Motion, React Spring baseline, bunx --bun shadcn@latest add [component]).
- [x] Configure NextAuth v5 with Discord, Google, GitHub, and guest auth flows.
- [x] Build reusable Nintendo-style primitives (buttons, cards, layout shells).
- [x] Implement landing/menu page with orbital game selector stub data.



#### Phase 1 Execution Outline

**Dependency Integration**

- [x] Add base libraries: framer-motion, @react-spring/web, howler, lucide-react, clsx, tailwind-merge, @radix-ui/react-* primitives, and utility helpers (date-fns, nanoid).
- [x] Install state/validation packages: next-auth@beta, @auth/core, convex (client + server), zod, @t3-oss/env-nextjs.
- [x] Document shadcn component inventory and enforce bunx --bun shadcn@latest add workflow for future additions (added button/card primitives by hand until bun is available).

**Authentication & Session Flow**

- [x] Scaffold NextAuth configuration (auth.config.ts, auth.ts) with provider placeholders and guest/anonymous strategy.
- [ ] Define Convex session storage outline (tables, indexes) to sync with NextAuth once backend is wired.
- [ ] Map UX states for signed-in, guest, and loading flows across landing + future lobbies.

**Nintendo Primitives Build Plan**

- [x] Components: BouncyButton, SoftCard, MenuTile, ChipCounter, AudioToggle.
- [x] Hooks: useOrbitalMotion, useNintendoSound (Howler wrapper), useGuestPrompt.
- [x] Styles: populate lib/theme/tokens.ts with color ramps, radii, motion durations, and layered shadows.

**Landing Hub Implementation**

- [x] Wire orbital menu layout (Chip mascot center, orbiting game tiles) with stub data + motion.
- [x] Add intro animation timeline (initial bounce, hover response, CTA pulse) using motion presets.
- [x] Ensure keyboard/controller navigation with focus management, ARIA labels, and reduced-motion fallbacks.
### Phase 2 · Big Blast Nintendo Edition (Week 3)
- [ ] Design switch panel interactions with glow states and feedback loop.
- [ ] Hook musical note system + responsive audio cues.
- [ ] Build tension meter that syncs with background music tempo.
- [ ] Prototype Detector Scan power-up logic and UX.
- [ ] Implement victory feedback (confetti, celebratory audio, score update).

### Phase 3 · Blackcat with Personality (Week 4)
- [ ] Create dealer character system with animation variants.
- [ ] Implement card flip physics/sound choreography.
- [ ] Add Perfect Pairs side betting mechanics and UI.
- [ ] Visualize win streak progression with dynamic flair.
- [ ] Craft blackjack win celebration sequence.

### Phase 4 · Enhanced Connect4tress (Week 5)
- [ ] Implement power pieces (Bomb, Rainbow, Heavy) rules + visuals.
- [ ] Add React Spring-driven drop physics and board responses.
- [ ] Track chain reactions with counters + feedback.
- [ ] Support theme swapping (Candy, Space, Ocean) with shared tokens.
- [ ] Deliver AI opponent with scalable difficulty.

### Phase 5 · Remaining Games (Week 6)
- [ ] Build Cat Heist narrative flow + scenarios.
- [ ] Create Double or Nothing 3D coin physics experience.
- [ ] Establish cross-game achievements and persistence.
- [ ] Implement progression/unlock system with UX cues.
- [ ] Round out sound design library across games.

### Phase 6 · Polish & Launch (Week 7)
- [ ] Validate mobile/touch-first ergonomics and responsive layouts.
- [ ] Run performance pass (bundle sizes, animation profiling).
- [ ] Perform comprehensive accessibility audit (keyboard, screen reader, contrast).
- [ ] Coordinate beta testing with target audience feedback loop.
- [ ] Prepare production deployment checklist and launch playbook.

## Immediate TODO Backlog
- [x] Verify existing repo state (dependencies installed, Next.js version, lint/test scripts).
- [x] Outline component directory structure (app router folders, ui primitives, lib helpers).
- [x] Identify design token sources (colors, typography, motion) for Nintendo aesthetic.
- [ ] Draft initial architecture ADR summarizing foundational decisions once confirmed.
- [x] Compile bun add command list for Phase 1 dependencies (motion, audio, auth, validation).
- [ ] Sketch NextAuth + Convex session architecture and provider secret requirements.

## Open Questions & Dependencies
- [ ] Need confirmation on Convex schema strategy (per-game tables vs shared documents).
- [ ] Determine preferred asset pipeline for audio/SVG animations.
- [ ] Clarify branding guidelines for Chip mascot (colors, scale, licensed assets).
- [ ] Decide on feature flags/staged rollout approach ahead of Phase 2+ content.

#### Phase 0 Decision Log

**TypeScript & Tooling**

- tsconfig.json already uses strict, isolatedModules, and bundler moduleResolution; keep allowJs only while legacy JS remains.
- Path alias @/* spans the repo; configure Vitest with tsconfigPaths to mirror it.
- Biome linting runs via npm run lint; add a test script once Vitest is installed.
- Action: add vitest, @vitest/ui, @testing-library/react, @testing-library/user-event, and @testing-library/jest-dom; scaffold vitest.config.ts with happy-dom environment, alias support, and coverage toggles.
- Create src/setupTests.ts to extend expect with @testing-library/jest-dom/vitest and register reset hooks.

**shadcn/ui Integration Plan**

- Use npx shadcn@latest init targeting components/ui; ensure Tailwind globals live in app/globals.css.
- Prefer local component generation (npx shadcn@latest add button card etc.) so upstream updates are explicit.
- Tailwind v4 prerelease is present; validate shadcn against it, otherwise pin Tailwind 3.4 until compatibility is confirmed.
- Define design tokens in lib/theme/tokens.ts (palette, typography, spacing, motion) consumed by component overrides.
- Document per-component customization knobs (radius scale, gradient stops, focus rings) to maintain Nintendo-style softness.

**Nintendo Feel Primitives**

- lib/motion/presets.ts: shared Framer Motion variants (bounce, pulse, orbital rotation) with timing constants.
- lib/audio/useSound.ts: Howler-backed hook for button, win, and ambience cues honoring reduced-motion/audio settings.
- lib/ui/chipTheme.ts: central color and gradient tokens plus layered shadow recipes.
- components/primitives/InteractiveTile.tsx: base interactive wrapper with keyboard handling and focus-visible styling.
- components/primitives/OrbitalMenu.tsx: layout scaffold using motion presets and sound hooks for the landing selector.

**Environment Secrets Strategy**

- Store local secrets in .env.local; rely on Vercel, Convex, and GlitchTip dashboards for hosted environments.
- Required keys: AUTH_SECRET, provider client IDs/secrets (Discord, Google, GitHub), Convex deployment tokens, GlitchTip DSN, optional asset CDN origins.
- Introduce env/schema.ts with @t3-oss/env-nextjs and Zod to validate server and client env vars.
- Split env namespaces: NEXT_PUBLIC_* for client-safe toggles; keep sensitive values server-only.
- Follow onboarding doc docs/secrets.md (to be written) to outline rotation cadence and access control.
