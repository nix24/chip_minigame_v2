import { useCallback, useState } from "react";

type GuestPromptState = {
  isOpen: boolean;
  nickname: string;
};

export function useGuestPrompt(initialNickname = "Guest Adventurer") {
  const [state, setState] = useState<GuestPromptState>({
    isOpen: false,
    nickname: initialNickname,
  });

  const open = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: true }));
  }, []);

  const close = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const setNickname = useCallback(
    (nickname: string) => {
      setState((prev) => ({
        ...prev,
        nickname: nickname.trim() || initialNickname,
      }));
    },
    [initialNickname],
  );

  return {
    state,
    open,
    close,
    setNickname,
  };
}
