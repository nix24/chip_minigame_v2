"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

import { BouncyButton } from "@/components/primitives/BouncyButton";
import { useNintendoSound } from "@/hooks/useNintendoSound";

export interface AudioToggleProps {
  initiallyOn?: boolean;
}

export function AudioToggle({ initiallyOn = false }: AudioToggleProps) {
  const [enabled, setEnabled] = useState(initiallyOn);
  const { play, stopAmbient } = useNintendoSound();

  const toggle = () => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) {
        play("ambient");
      } else {
        stopAmbient();
      }
      return next;
    });
  };

  return (
    <BouncyButton
      variant="secondary"
      size="sm"
      onClick={toggle}
      aria-pressed={enabled}
      glow={false}
      className="flex items-center gap-2 rounded-full"
      title={enabled ? "Mute ambience" : "Enable ambience"}
    >
      {enabled ? (
        <Volume2 className="size-4" aria-hidden />
      ) : (
        <VolumeX className="size-4" aria-hidden />
      )}
      <span className="text-sm font-semibold">
        {enabled ? "Sound on" : "Sound off"}
      </span>
    </BouncyButton>
  );
}
