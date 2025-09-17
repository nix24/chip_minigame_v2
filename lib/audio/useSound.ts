import { Howl } from "howler";
import { useCallback, useEffect, useMemo, useRef } from "react";

export type NintendoSound =
  | "primary-click"
  | "hover-pop"
  | "celebration"
  | "ambient";

type SoundMap = Record<NintendoSound, string>;

const DEFAULT_SOUNDS: SoundMap = {
  "primary-click": "/sounds/ui/primary-click.mp3",
  "hover-pop": "/sounds/ui/hover-pop.mp3",
  celebration: "/sounds/ui/celebration.mp3",
  ambient: "/sounds/ui/ambient-loop.mp3",
};

interface UseSoundOptions {
  sounds?: Partial<SoundMap>;
  volume?: number;
  loopAmbient?: boolean;
}

export function useNintendoSound({
  sounds,
  volume = 0.8,
  loopAmbient = true,
}: UseSoundOptions = {}) {
  const mergedSounds = useMemo(
    () => ({
      ...DEFAULT_SOUNDS,
      ...sounds,
    }),
    [sounds],
  );

  const ambientRef = useRef<Howl | null>(null);

  useEffect(() => {
    return () => {
      ambientRef.current?.stop();
      ambientRef.current?.unload();
    };
  }, []);

  const play = useCallback(
    (sound: NintendoSound) => {
      const src = mergedSounds[sound];
      if (!src) {
        return;
      }

      const howl = new Howl({
        src: [src],
        volume,
        loop: sound === "ambient" && loopAmbient,
      });

      if (sound === "ambient") {
        ambientRef.current?.stop();
        ambientRef.current?.unload();
        ambientRef.current = howl;
      } else {
        howl.once("end", () => {
          howl.unload();
        });
      }

      howl.play();
    },
    [loopAmbient, mergedSounds, volume],
  );

  const stopAmbient = useCallback(() => {
    ambientRef.current?.stop();
    ambientRef.current?.unload();
    ambientRef.current = null;
  }, []);

  return {
    play,
    stopAmbient,
  };
}
