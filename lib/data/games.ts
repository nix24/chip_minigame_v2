export type GameStub = {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  players: string;
};

export const games: GameStub[] = [
  {
    id: "big-blast",
    name: "Big Blast",
    emoji: "💣",
    tagline: "Detonate or dodge in a high-stakes bomb party.",
    players: "2-4 players",
  },
  {
    id: "blackcat",
    name: "Blackcat",
    emoji: "🃏",
    tagline: "Outsmart the house with playful blackjack flair.",
    players: "vs House",
  },
  {
    id: "connect4tress",
    name: "Connect4tress",
    emoji: "🔴",
    tagline: "Stack power pieces and trigger candy cascades.",
    players: "Strategic",
  },
  {
    id: "coinflip",
    name: "Coinflip",
    emoji: "🪙",
    tagline: "Double-or-nothing coin theatrics.",
    players: "Quick play",
  },
];
