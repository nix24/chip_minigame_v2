import { Howl } from "howler";
import { useCallback, useEffect, useMemo, useRef } from "react";

export type NintendoSound =
  | "primary-click"
  | "hover-pop"
  | "celebration"
  | "ambient";

type SoundMap = Record<NintendoSound, string>;

const DEFAULT_SOUNDS: SoundMap = {
  "primary-click": "/soundSfx/confirm.mp3",
  "hover-pop": "/soundSfx/btnHover.mp3",
  celebration: "/soundSfx/loadingScreen.mp3",
  ambient: "/ost/menuTheme.mp3",
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

      if (sound === "ambient") {
        if (ambientRef.current) {
          const current = ambientRef.current;
          const currentVolume = current.volume();
          current.fade(currentVolume, 0, 450);
          current.once("fade", () => {
            current.stop();
            current.unload();
          });
        }

        const ambient = new Howl({
          src: [src],
          loop: loopAmbient,
          volume: 0,
          html5: false,
        });

        ambient.on("play", () => {
          ambient.fade(0, volume, 650);
        });

        ambient.play();
        ambientRef.current = ambient;
        return;
      }

      const howl = new Howl({
        src: [src],
        volume,
      });

      howl.once("end", () => {
        howl.unload();
      });

      howl.play();
    },
    [loopAmbient, mergedSounds, volume],
  );

  const stopAmbient = useCallback(() => {
    if (!ambientRef.current) {
      return;
    }

    const current = ambientRef.current;
    const currentVolume = current.volume();
    current.fade(currentVolume, 0, 500);
    current.once("fade", () => {
      current.stop();
      current.unload();
    });
    ambientRef.current = null;
  }, []);

  return {
    play,
    stopAmbient,
  };
}
