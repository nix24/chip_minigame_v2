# Chip's Minigame Parlour - Product Requirements Document

## Executive Summary

Transform the existing Discord bot minigames into a modern, Nintendo-inspired game experience that prioritizes intuitive interaction, delightful animations, and joyful discovery. Following Nintendo's design philosophy of "no instructions necessary" and visual learning through play.

---

## Nintendo Design Philosophy Integration

### Core Principles from Nintendo's Approach
1. **Visual Learning Over Text:** Like Mario's first level, "No instructions are necessary" - the interface teaches through interaction
2. **Cause and Effect Systems:** Clear payoffs for every action - "hit a glowing box, get a mushroom" teaches the interface
3. **Soft, Inviting Aesthetics:** Rounded UI elements feel "softer and more inviting" - our brains perceive sharp objects as dangerous
4. **Progressive Complexity:** Start simple, reveal depth gradually
5. **Immediate Feedback:** Every interaction should feel satisfying and responsive

### Landing Page as Game Menu
**Inspiration:** Modern Mario/Kirby main menus with orbital game selection

```
🎮 CHIP'S MINIGAME PARLOUR 🎮
     [Floating in center: Chip mascot with gentle bounce]
     
     ┌─ Big Blast ─┐    ┌─ Blackcat ─┐    ┌─ Connect4tress ─┐
     │   💣 Icon   │    │  🃏 Icon   │    │    🔴 Icon      │
     │  "2-4 Players" │  │ "vs House" │    │  "Strategic"   │
     └─────────────┘    └────────────┘    └──────────────┘
     
     [Below: Gentle pulse] → START PLAYING → [Guest or Sign In options]
```

---

## Problem Statement & Development Approach

Following the Universal Data Structure Decision Chart path:
- **Data fits in RAM?** Yes (game sessions, user data)  
- **Need key→value lookup?** Yes (user sessions, game states, lobbies)
- **Need ordered iteration?** Yes (leaderboards, turn order)
- **Decision: Hash Table** for O(1) game state lookups, **Arrays** for turn order

---

## Core Architecture

### Tech Stack (Nintendo-Inspired)

#### Foundation
- **Framework:** Next.js 15+ with App Router
- **Language:** TypeScript (strict mode)
- **UI:** React 19+ with Nintendo-style component patterns
- **Database:** Convex (real-time, type-safe)
- **Styling:** **shadcn/ui** + Tailwind CSS + Framer Motion (perfect for customizable game interfaces)
- **Authentication:** NextAuth.js v5 (Clerk alternative)

#### Animation & Experience (Nintendo Feel)
- **Primary UI:** **shadcn/ui** - highly customizable components built on Radix UI with Tailwind CSS
- **Spring Physics:** Framer Motion + React Spring for bouncy Nintendo-style animations
- **Sound Design:** Howler.js for satisfying audio feedback
- **Micro-interactions:** Every button press, hover, and click feels delightful

#### Development & Quality
- **Linting:** Biome (following CLAUDE.md principles)
- **Testing:** Vitest + Testing Library
- **Type Safety:** Zod for runtime validation
- **Error Monitoring:** **GlitchTip** (free, open-source Sentry alternative)

---

## UI Library Choice: shadcn/ui

### Why shadcn/ui is Perfect for Game Interfaces
shadcn/ui provides **highly customizable components** built on Radix UI primitives with Tailwind CSS. It's perfect for game interfaces because:
- **Complete Customization:** Every component can be fully styled to match Nintendo's playful aesthetic
- **Accessibility First:** Built on Radix UI primitives with excellent keyboard and screen reader support
- **Performance:** Lightweight, tree-shakeable components with no runtime CSS-in-JS
- **Modern Stack:** Uses Tailwind CSS for rapid styling and Framer Motion integration
- **Type Safe:** Full TypeScript support with proper component APIs

### Nintendo-Style Component Examples
```tsx
// Bouncy game selection button (Mario-style)
import { Button } from "@/components/ui/button"

<Button
  size="lg"
  className={cn(
    "rounded-3xl px-8 py-6 text-xl font-bold",
    "bg-gradient-to-br from-pink-400 to-pink-600",
    "hover:from-pink-500 hover:to-pink-700",
    "transform transition-all duration-200",
    "hover:-translate-y-1 hover:scale-105",
    "active:translate-y-0 active:scale-95",
    "shadow-lg hover:shadow-xl",
    "border-4 border-pink-300"
  )}
>
  🎯 Big Blast
</Button>

// Chip display (rounded, friendly)
import { Card } from "@/components/ui/card"

<Card className="rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-2 border-yellow-500">
  <div className="flex items-center gap-3 px-6 py-3">
    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
      💰
    </div>
    <span className="font-bold text-yellow-600 text-lg">1,247</span>
  </div>
</Card>

// Game selection card with hover animations
import { Card, CardContent } from "@/components/ui/card"

<Card className={cn(
  "group cursor-pointer rounded-2xl overflow-hidden",
  "transform transition-all duration-300",
  "hover:scale-105 hover:-rotate-1 hover:shadow-2xl",
  "bg-gradient-to-br from-blue-500 to-purple-600"
)}>
  <CardContent className="p-6 text-center">
    <div className="text-4xl mb-2 group-hover:animate-bounce">🃏</div>
    <h3 className="font-bold text-white text-xl">Blackcat</h3>
    <p className="text-blue-100">Beat the dealer!</p>
  </CardContent>
</Card>
```

---

## Visual Design System (Nintendo-Inspired)

### Color Palette (Soft, Rounded, Friendly)
```css
:root {
  /* Primary Brand (from Chip mascot) */
  --chip-pink: #FF69B4;          /* Main mascot pink */
  --chip-magenta: #FF1493;       /* Darker pink accent */  
  --warm-orange: #FF8C00;        /* Friendly orange */
  --sunny-yellow: #FFD700;       /* Cheerful gold */
  
  /* Nintendo-Style Backgrounds */
  --soft-purple: #6B46C1;        /* Gentle deep color */
  --warm-blue: #3B82F6;          /* Friendly blue */
  --card-white: #FEFEFE;         /* Clean card backgrounds */
  --subtle-gray: #F7FAFC;        /* Light mode background */
  
  /* UI Accent Colors */
  --success-green: #48BB78;      /* Win states */
  --warning-orange: #ED8936;     /* Attention states */  
  --cool-cyan: #38B2AC;          /* Information */
  --soft-red: #F56565;           /* Loss/danger states */
}
```

### Nintendo Animation Principles
- **Bounce and Spring:** All UI elements have playful physics
- **Anticipation:** Buttons "wind up" before actions  
- **Follow Through:** Actions have satisfying completion animations
- **Rounded Everything:** Rounded forms are "more aesthetically appealing" and create "a softer, kinder feel"

---

## Authentication Strategy (Frictionless)

### NextAuth.js v5 Configuration (Nintendo Approach: Jump Right In)
```typescript
providers: [
  Discord({ /* existing Discord users can claim progress */ }),
  Google({ /* broad appeal */ }),
  GitHub({ /* developer-friendly */ }),
  Credentials({
    id: "guest",
    name: "🎮 Play Now!", // Nintendo-style immediate action
    // Instant access, progress saved locally
  })
]
```

### Nintendo-Style Onboarding Flow
1. **Landing:** Big "🎮 PLAY NOW!" button (like Mario's "START")
2. **First Game:** Tutorial built into first match (no separate tutorial mode)
3. **Progressive Enhancement:** Features unlock naturally through play
4. **Account Creation:** Optional, with clear benefits shown

---

## Error Monitoring: GlitchTip (Free Sentry Alternative)

### Why GlitchTip Over Sentry
GlitchTip is "an open source tool that you can self-host or sign up for their hosted version." It has "a free plan with unlimited users but only with 1,000 errors per month" and their next plan is "$15/mo with 100,000 errors per month."

### Setup for Next.js Game
```typescript
// lib/glitchtip.ts
import * as GlitchTip from "@glitchtip/browser";

GlitchTip.init({
  dsn: process.env.NEXT_PUBLIC_GLITCHTIP_DSN,
  environment: process.env.NODE_ENV,
  // Game-specific error contexts
  beforeSend: (event) => {
    // Add game state context to errors
    event.tags = {
      ...event.tags,
      gameType: getCurrentGame(),
      playerCount: getPlayerCount(),
    };
    return event;
  },
});
```

---

## Convex Database Schema

### Users Table (Nintendo-Style Progress)
```typescript
export const users = defineTable({
  authId: v.string(),
  username: v.string(),
  avatar: v.optional(v.string()),
  chips: v.number(),
  
  // Nintendo-style progression
  gamesUnlocked: v.array(v.string()), // unlock games through play
  achievements: v.array(v.object({
    id: v.string(),
    unlockedAt: v.number(),
    name: v.string(),
  })),
  
  // Game statistics
  gameStats: v.object({
    bigBlast: v.object({
      wins: v.number(),
      survivalRounds: v.number(),
      powerUpsUsed: v.number(),
    }),
    blackcat: v.object({
      wins: v.number(),
      blackjacks: v.number(),
      longestWinStreak: v.number(),
    }),
    connect4tress: v.object({
      wins: v.number(),
      chainReactions: v.number(),
      powerPiecesUsed: v.number(),
    }),
  }),
  
  preferences: v.object({
    soundEnabled: v.boolean(),
    animationsEnabled: v.boolean(),
    theme: v.string(), // "auto", "light", "dark"
  }),
})
.index("by_auth_id", ["authId"])
.index("by_chips", ["chips"]);
```

---

## Game Mechanics Explained (For New Developers)

### 1. Big Blast - Russian Roulette with Switches

**Core Game Flow:**
1. **Setup:** 2-4 players join a lobby (CPU fills empty slots)
2. **Round Structure:** Multiple elimination rounds with decreasing switch counts
3. **Turn System:** Players take turns (90 seconds per turn)
4. **Switch Selection:** Player clicks one switch from available options
5. **Elimination:** If player hits the "detonator" switch, they're eliminated
6. **Victory:** Last player standing wins all wagered chips

**Detailed Round Breakdown:**
```
Round 1: 5 switches total, 1 is detonator, 4 players
Round 2: 4 switches total, 1 is detonator, 3 players  
Round 3: 3 switches total, 1 is detonator, 2 players
Final: Last player wins
```

**Technical Implementation Needs:**
- Switch array with boolean `isDetonator` property
- Turn rotation system with timeout handling
- Player elimination and payout logic
- Random detonator placement each round

### 2. Blackcat - Blackjack Against the House

**Core Game Flow:**
1. **Setup:** Player places wager, dealer shuffles deck
2. **Initial Deal:** Player gets 2 cards (visible), dealer gets 2 cards (1 hidden)
3. **Player Actions:** Hit (take card) or Stand (keep current total)
4. **Bust Check:** If player > 21, immediate loss
5. **Dealer Play:** Dealer reveals hidden card, hits until 17+
6. **Payout:** Compare totals, blackjack pays 3:2

**Card Value Rules:**
```typescript
function getCardValue(card: Card, currentTotal: number): number {
  if (card.rank === 'A') {
    return (currentTotal + 11 > 21) ? 1 : 11; // Soft/hard ace
  }
  if (['J', 'Q', 'K'].includes(card.rank)) {
    return 10;
  }
  return parseInt(card.rank);
}
```

**Win Conditions:**
- **Blackjack:** 21 with 2 cards beats regular 21
- **Player Bust:** Player > 21 = dealer wins
- **Dealer Bust:** Dealer > 21 = player wins  
- **Push:** Same total = no winner, wager returned

### 3. Connect4tress - Connect 4 with Disappearing Pieces

**Core Game Flow:**
1. **Setup:** 7 columns × 6 rows grid, two players (red/blue pieces)
2. **Piece Placement:** Players alternate dropping pieces into columns
3. **Gravity:** Pieces fall to lowest available row in chosen column
4. **Win Detection:** Check for 4 in a row (horizontal, vertical, diagonal)
5. **4tress Mechanic:** When 4-in-a-row formed, those pieces disappear!
6. **Gravity Reapply:** Remaining pieces fall down, potentially creating new connections
7. **Chain Reactions:** New 4-in-a-rows trigger more disappearances
8. **Victory:** First to achieve 4-in-a-row that DOESN'T disappear wins

**The 4tress Twist Explained:**
```
Normal Connect 4: Get 4-in-a-row = win
Connect4tress: Get 4-in-a-row = pieces vanish, board changes, keep playing
```

**Technical Implementation Needs:**
```typescript
function checkFor4InRow(board: Board): Position[] {
  // Return positions of 4-in-a-row pieces
}

function applyGravity(board: Board): Board {
  // Drop floating pieces down
}

function remove4tressPieces(board: Board, positions: Position[]): Board {
  // Remove the 4-in-a-row pieces
}
```

### 4. Cat Heist - High-Risk Poker Tournament

**Core Game Flow:**
1. **Risk Warning:** Show potential loss (25% of ENTIRE balance, not just wager)
2. **Confirmation:** Player must confirm they understand the risk
3. **Best-of-3:** First to win 2 rounds wins the match
4. **Each Round:** Both players get 5-card poker hands
5. **Hand Comparison:** Use standard poker rankings to determine winner
6. **Match End:** Winner gets 3x wager, loser loses 25% of total balance

**Poker Hand Rankings (Highest to Lowest):**
1. Royal Flush, 2. Straight Flush, 3. Four of a Kind, 4. Full House
5. Flush, 6. Straight, 7. Three of a Kind, 8. Two Pair
9. One Pair, 10. High Card

**Risk/Reward Example:**
```
Player has 10,000 chips, wagers 100 chips
Win: Gets 300 chips (3x wager)
Loss: Loses 2,500 chips (25% of 10,000 balance)
```

### 5. Double or Nothing - Coinflip with Streak System

**Core Game Flow:**
1. **Initial Bet:** Player wagers chips and chooses heads/tails
2. **Coin Flip:** 50/50 random result
3. **Result:** Win = double chips, lose = lose wager
4. **Streak Option:** After win, player can bet winnings for 2x multiplier
5. **Chain Streaks:** Continue betting winnings for exponential growth
6. **Cash Out:** Player can take winnings at any time

**Streak Multiplier Example:**
```
Initial bet: 100 chips
Win Round 1: 200 chips (can cash out or continue)
Win Round 2: 400 chips (can cash out or continue)  
Win Round 3: 800 chips (can cash out or continue)
Lose Round 4: Lose everything, back to 0
```

**Technical Implementation Needs:**
```typescript
interface CoinflipState {
  currentWager: number;
  streakLevel: number;
  totalPotentialWin: number;
  playerChoice: 'heads' | 'tails';
  canCashOut: boolean;
}
```

---

## Enhanced Game Designs (Nintendo-Style Improvements)

### 1. Big Blast (Russian Roulette with Nintendo Polish)
**Core Mechanics:** Same switch-based elimination game
**Nintendo Enhancements:**
- **Visual Feedback:** Switches glow and pulse with increasing intensity
- **Audio Design:** Each switch has a unique musical note when pressed
- **Tension Building:** Background music intensifies as switches decrease
- **Celebration:** Winners get confetti burst and "Victory!" fanfare
- **Power-Up:** "Detector Scan" - use once per game to reveal one safe switch
- **Themes:** Seasonal backgrounds (Beach, Space, Forest) with matching sound effects

**Implementation Notes:**
```typescript
interface BigBlastSwitch {
  id: string;
  isDetonator: boolean;
  glowIntensity: number; // 0-100, increases as switches decrease
  musicNote: string; // "C4", "D4", "E4", etc.
}
```

### 2. Blackcat (Blackjack with Personality)
**Core Mechanics:** Same blackjack rules and payouts
**Nintendo Enhancements:**
- **Dealer Characters:** Rotating cast with unique animations and catchphrases
  - "Lucky Larry" (optimistic), "Serious Sally" (professional), "Witty Winston" (jokes)
- **Card Celebrations:** Special animations for blackjack, busts, and perfect hands
- **Streak System:** Win streaks unlock visual effects (sparkling cards, golden table)
- **Side Bet:** "Perfect Pairs" - bet on matching first two cards
- **Sound Design:** Satisfying card flip sounds, chips clinking

**Implementation Notes:**
```typescript
interface DealerPersonality {
  name: string;
  avatar: string;
  catchphrases: {
    dealStart: string[];
    playerWin: string[];
    playerLose: string[];
    blackjack: string[];
  };
  theme: 'optimistic' | 'professional' | 'witty';
}
```

### 3. Connect4tress (Already Perfect Concept!)
**Core Mechanics:** Keep the brilliant 4tress disappearing mechanic
**Nintendo Enhancements:**
- **Power Pieces** (appear randomly, 1 per game):
  - **Bomb Piece:** Explodes adjacent pieces when part of 4tress
  - **Rainbow Piece:** Counts as any color for connections
  - **Heavy Piece:** Can't be affected by gravity changes
- **Visual Themes:** Different board environments (Candy Land, Space Station, Under the Sea)
- **Chain Counter:** Track cascading reactions with celebration animations
- **Physics:** Pieces bounce realistically when dropped (using React Spring)

**Implementation Notes:**
```typescript
type PowerPiece = 'bomb' | 'rainbow' | 'heavy' | null;

interface GamePiece {
  color: 'red' | 'blue';
  powerType: PowerPiece;
  position: [number, number];
  isFloating: boolean; // for animation state
}
```

### 4. Cat Heist (High-Stakes Poker with Drama)
**Core Mechanics:** Same best-of-3 poker with 25% balance risk
**Nintendo Enhancements:**
- **Heist Scenarios:** Choose your "target" (Bank Vault, Casino Safe, Art Museum)
- **Dramatic Tension:** Each round intensifies music and visual effects
- **Risk Visualization:** Clear, animated warning about potential loss
- **Success Sequence:** Vault opens with satisfying animation and chip waterfall
- **Failure Sequence:** "CAUGHT!" screen with sirens, but playful not scary

### 5. Coinflip → Double or Nothing
**Core Mechanics:** Heads/tails betting with streak system
**Nintendo Enhancements:**
- **3D Coin Physics:** Realistic coin flip animation with satisfying *ding* sound
- **Streak Ladder:** Visual ladder showing potential winnings (like game show)
- **Coin Varieties:** Gold (standard), Silver (lucky charm), Rainbow (extra sparkles)
- **Risk/Reward:** Option to bet winnings for 2x multiplier
- **Crowd Reactions:** Background cheers and groans based on results

---

## Component Architecture (Nintendo-Inspired Structure)

```
src/
├── components/
│   ├── ui/ (shadcn/ui base components)
│   │   ├── button.tsx           # Base button component
│   │   ├── card.tsx             # Base card component
│   │   ├── dialog.tsx           # Base dialog/modal component
│   │   ├── badge.tsx            # Base badge component
│   │   └── progress.tsx         # Base progress component
│   ├── game-ui/ (Custom game components built on shadcn/ui)
│   │   ├── GameButton.tsx       # Nintendo-style bouncy buttons
│   │   ├── ChipDisplay.tsx      # Animated chip counter
│   │   ├── GameCard.tsx         # Game selection cards with hover effects
│   │   ├── PowerUpBadge.tsx     # Reusable power-up indicator
│   │   └── CelebrationDialog.tsx # Win/loss celebration overlay
│   ├── games/
│   │   ├── BigBlast/
│   │   │   ├── SwitchPanel.tsx    # Grid of glowing switches
│   │   │   ├── TensionMeter.tsx   # Visual tension indicator
│   │   │   └── DetectorScan.tsx   # Power-up component
│   │   ├── Blackcat/
│   │   │   ├── DealerAvatar.tsx   # Animated dealer characters
│   │   │   ├── CardHand.tsx       # Card display with flip animations
│   │   │   └── SideBetPanel.tsx   # Perfect pairs betting
│   │   └── Connect4tress/
│   │       ├── GameBoard.tsx      # Animated piece dropping
│   │       ├── PowerPieceIcon.tsx # Special piece indicators
│   │       └── ChainReaction.tsx  # Cascade effect visualization
│   └── layout/
│       ├── GameHeader.tsx         # Nintendo-style top bar
│       ├── FloatingMenu.tsx       # Orbital menu system
│       └── PlayerProfile.tsx      # Chip wallet and stats
├── lib/
│   ├── utils.ts                   # shadcn/ui utility functions (cn, etc.)
│   └── game-engines/              # Pure game logic
└── styles/
    └── globals.css                # Tailwind imports and custom styles
```

### shadcn/ui Integration Examples
```tsx
// GameButton.tsx - Nintendo-style button built on shadcn/ui
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GameButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function GameButton({ children, variant = 'primary', onClick, className }: GameButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Button
        onClick={onClick}
        className={cn(
          "rounded-2xl px-8 py-6 text-xl font-bold",
          "transition-all duration-200",
          "shadow-lg hover:shadow-xl",
          "border-4",
          variant === 'primary' && [
            "bg-gradient-to-br from-pink-400 to-pink-600",
            "hover:from-pink-500 hover:to-pink-700",
            "border-pink-300 text-white"
          ],
          variant === 'secondary' && [
            "bg-gradient-to-br from-blue-400 to-blue-600", 
            "hover:from-blue-500 hover:to-blue-700",
            "border-blue-300 text-white"
          ],
          className
        )}
      >
        {children}
      </Button>
    </motion.div>
  )
}

// ChipDisplay.tsx - Animated chip counter
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

interface ChipDisplayProps {
  amount: number;
  showChange?: number;
}

export function ChipDisplay({ amount, showChange }: ChipDisplayProps) {
  return (
    <Card className="rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-2 border-yellow-500">
      <div className="flex items-center gap-3 px-6 py-3">
        <motion.div
          animate={{ rotate: showChange ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl"
        >
          🪙
        </motion.div>
        <div className="flex flex-col">
          <motion.span 
            key={amount}
            initial={{ scale: 1.5, color: "#fbbf24" }}
            animate={{ scale: 1, color: "#d97706" }}
            className="font-bold text-lg"
          >
            {amount.toLocaleString()}
          </motion.span>
          <AnimatePresence>
            {showChange && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute"
              >
                <Badge variant={showChange > 0 ? "default" : "destructive"}>
                  {showChange > 0 ? '+' : ''}{showChange}
                </Badge>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Card>
  )
}
```

### Nintendo-Style State Management
```typescript
// Game state with immediate feedback patterns
interface GameState {
  currentPlayer: number;
  players: Player[];
  gameData: any;
  
  // Nintendo-style feedback
  lastAction: {
    type: string;
    feedback: 'success' | 'neutral' | 'failure';
    animation: string;
    sound: string;
  };
  
  // Visual polish
  uiState: {
    showCelebration: boolean;
    tensionLevel: number; // 0-100
    backgroundTheme: string;
  };
}
```

---

## User Experience Flow (Nintendo Approach)

### Landing Experience (Like Mario Main Menu)
1. **Immediate Impact:** Chip mascot bounces in center with welcoming animation
2. **Clear Choices:** Large, colorful game cards with preview animations
3. **No Barriers:** Giant "🎮 START PLAYING" button, no registration required
4. **Progressive Disclosure:** Advanced features appear after first game

### Game Selection Hub (Orbital Nintendo Style)
```
           [Big Blast]
              🎯
      
[Coinflip] 🪙    🎮    🃏 [Blackcat]
                     
              🔴
         [Connect4tress]
```
- Games orbit around center when hovered
- Each game shows live player count and recent wins
- Background music shifts based on hovered game

### In-Game Polish (Nintendo Quality)
- **Loading:** Chip mascot plays mini-animations during loading
- **Feedback:** Every click produces satisfying sound and visual feedback
- **Guidance:** UI elements gently pulse when it's your turn
- **Celebration:** Wins trigger screen-filling celebration effects
- **Recovery:** Losses have encouraging messages and "Try Again" bouncy button

---

## Development Phases

### Phase 1: Nintendo-Style Foundation (Weeks 1-2)
- [ ] Next.js setup with shadcn/ui integration and Tailwind CSS configuration
- [ ] NextAuth.js configuration (Discord, Google, GitHub, Guest)
- [ ] GlitchTip error monitoring setup
- [ ] Core Nintendo-style components (bouncy buttons, rounded cards) built on shadcn/ui
- [ ] Landing page with orbital game selection

### Phase 2: Big Blast Nintendo Edition (Week 3)
- [ ] Switch panel with glowing animations
- [ ] Musical note system for switch presses
- [ ] Tension meter with background music integration
- [ ] Detector Scan power-up implementation
- [ ] Victory celebration with confetti and sound

### Phase 3: Blackcat with Personality (Week 4)
- [ ] Three dealer characters with unique animations
- [ ] Card flip physics and sound effects
- [ ] Perfect Pairs side betting system
- [ ] Win streak visual effects implementation
- [ ] Blackjack celebration sequence

### Phase 4: Enhanced Connect4tress (Week 5)
- [ ] Power pieces system (Bomb, Rainbow, Heavy)
- [ ] Realistic piece drop physics with React Spring
- [ ] Chain reaction counter and animations
- [ ] Multiple visual themes (Candy, Space, Ocean)
- [ ] Advanced AI opponent

### Phase 5: Remaining Games (Week 6)
- [ ] Cat Heist with dramatic heist scenarios
- [ ] Double or Nothing with 3D coin physics
- [ ] Cross-game achievement system
- [ ] Nintendo-style progression unlocks
- [ ] Comprehensive sound design

### Phase 6: Polish & Launch (Week 7)
- [ ] Mobile responsiveness (touch-first design)
- [ ] Performance optimization
- [ ] Nintendo-style accessibility features
- [ ] Beta testing with Nintendo fans
- [ ] Production deployment

---

## Success Metrics (Nintendo-Style)

### User Delight
- **Session Duration:** 20+ minutes (Nintendo games are addictive)
- **Smile Factor:** 80% of users report the games "made them smile"
- **Return Rate:** 60% weekly retention (Nintendo-quality stickiness)
- **Friend Invites:** 40% of users invite friends (Nintendo's social magic)

### Nintendo-Quality Polish
- **Load Time:** <1.5s (Nintendo's instant gratification)
- **Animation Smoothness:** 60fps on all interactions
- **Sound Design:** 95% of users keep sound enabled
- **Accessibility:** Playable with keyboard, controller, or touch

---

## Risk Mitigation

### Technical Risks
- **Animation Performance:** Use shadcn/ui's lightweight components + Framer Motion
- **Mobile Experience:** Touch-first design with larger hit targets
- **Browser Support:** Progressive enhancement for older browsers
- **Error Handling:** GlitchTip for comprehensive error tracking

### User Experience Risks  
- **Learning Curve:** Follow Nintendo's "learn by playing" philosophy
- **Overwhelm:** Progressive disclosure of features
- **Accessibility:** shadcn/ui's Radix UI foundation ensures accessibility compliance
- **Addiction Concerns:** Implement healthy gaming limits and breaks

---

## Future Nintendo-Style Expansions

### Unlockable Content (Mario-Style Progression)
- **New Themes:** Unlock seasonal backgrounds through play
- **Character Customization:** Earn cosmetic upgrades for Chip mascot
- **Advanced Modes:** Unlock "Expert" difficulty levels
- **Mini-Games:** Quick 30-second challenges between main games

### Social Features (Nintendo's Community Focus)
- **Friend Codes:** Nintendo-style friend system with codes
- **Spectator Mode:** Watch friends play with cheering emotes
- **Tournaments:** Weekly competitions with leaderboards
- **Guilds:** Team-based challenges and competitions

---

This PRD creates a truly game-like experience that feels like a Nintendo production rather than a web application. The focus on immediate fun, progressive discovery, and delightful interactions will set it apart from typical web-based casino games.