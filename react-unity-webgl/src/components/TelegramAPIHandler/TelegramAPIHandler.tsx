import React, { useCallback, useEffect } from "react";

type TelegramAPIHandlerProps = {
  addEventListener: (event: string, handler: (...args: any[]) => void) => void;
  removeEventListener: (
    event: string,
    handler: (...args: any[]) => void
  ) => void;
};

const TelegramAPIHandler: React.FC<TelegramAPIHandlerProps> = ({
  addEventListener,
  removeEventListener,
}) => {
  const handleOpenLink = useCallback((url: string) => {
    console.log("telegram api open link: " + url);
    Telegram.WebApp.openLink(url);
  }, []);

  const handleOpenTelegramLink = useCallback((url: string) => {
    console.log("telegram api open telegram link: " + url);
    Telegram.WebApp.openTelegramLink(url);
  }, []);

  const handleHapticFeedback = useCallback(
    (style: "light" | "medium" | "heavy" | "rigid" | "soft") => {
      Telegram.WebApp.HapticFeedback.impactOccurred(style);
    },
    []
  );

  useEffect(() => {
    addEventListener("OpenLinkTelegramAPI", handleOpenLink);
    addEventListener("OpenTelegramLinkTelegramAPI", handleOpenTelegramLink);
    addEventListener("OpenHapticFeedbackTelegramAPI", handleHapticFeedback);

    return () => {
      removeEventListener("OpenLinkTelegramAPI", handleOpenLink);
      removeEventListener(
        "OpenTelegramLinkTelegramAPI",
        handleOpenTelegramLink
      );
      removeEventListener(
        "OpenHapticFeedbackTelegramAPI",
        handleHapticFeedback
      );
    };
  }, [
    addEventListener,
    removeEventListener,
    handleOpenLink,
    handleOpenTelegramLink,
    handleHapticFeedback,
  ]);

  return null;
};

export default TelegramAPIHandler;
