import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { env } from "@/env/schema";

const providers: NextAuthConfig["providers"] = [];

if (env.DISCORD_CLIENT_ID && env.DISCORD_CLIENT_SECRET) {
  providers.push(
    Discord({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  );
}

if (env.GITHUB_ID && env.GITHUB_SECRET) {
  providers.push(
    GitHub({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  );
}

if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  );
}

providers.push(
  Credentials({
    id: "guest",
    name: "Guest",
    credentials: {
      nickname: { label: "Nickname", type: "text" },
    },
    authorize: async (credentials) => {
      const nickname = credentials?.nickname?.trim() || "Guest";
      const guestId = ["guest", Math.random().toString(36).slice(2, 10)].join(
        "-",
      );
      return {
        id: guestId,
        name: nickname,
        role: "guest",
      };
    },
  }),
);

export const authConfig = {
  session: {
    strategy: "jwt",
  },
  providers,
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "guest";
        session.user.role = (token.role as string | undefined) ?? "guest";
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user?.role) {
        token.role = user.role;
      }
      return token;
    },
  },
  trustHost: true,
} satisfies NextAuthConfig;
