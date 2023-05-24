import React, { useCallback, useEffect, useState } from "react";
import LinkButton from "./LinkButton";

type ReactAPILinkButtonHandlerProps = {
  addEventListener: (event: string, handler: (...args: any[]) => void) => void;
  removeEventListener: (
    event: string,
    handler: (...args: any[]) => void
  ) => void;
};

const ReactAPILinkButtonHandler: React.FC<ReactAPILinkButtonHandlerProps> = ({
  addEventListener,
  removeEventListener,
}) => {
  const [buttonText, setButtonText] = useState("Open link");
  //example old link "https://app.tonkeeper.com/v1/txrequest-inline/eyJ2ZXJzaW9uIjoiMCIsImJvZHkiOnsidHlwZSI6InNpZ24tcmF3LXBheWxvYWQiLCJleHBpcmVzX3NlYyI6IjE2NzUwMjA3NzkiLCJwYXJhbXMiOnsidmFsaWRfdW50aWwiOiIxNjc1MDIwNzc5IiwibWVzc2FnZXMiOlt7ImFkZHJlc3MiOiJFUUNObUxJUE8xcGg3OEgzUnpWQ2lWU1BrbU5CLTgxU3pxUElYYWZoOVZjZHUtV3UiLCJhbW91bnQiOiIzMDAwMDAwMCIsInBheWxvYWQiOiJ0ZTZjY2dFQkFnRUFad0FCWXdBQUFCVUFBQUFBWTlhNzI0QVZ4RUc3VHNHVDc1WFJwakRva1AyUGw0SXdhRlVPOXp0Yk55eXdSemdxcTBnRGs0Y0JBUUJmRjQxRkdRQUFBQUJqMXJ2YkVCSUFWeEVHN1RzR1Q3NVhScGpEb2tQMlBsNEl3YUZVTzl6dGJOeXl3UnpncXEwRSJ9XX0sInJlc3BvbnNlX29wdGlvbnMiOnt9fX0="
  const [buttonUrl, setButtonUrl] = useState("");
  const [showButtonFromTelegram, setShowButtonFromTelegram] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const handleShowButton = useCallback(
    (url: string, text: string, fromTelegram: boolean) => {
      setButtonText(text);
      setButtonUrl(url);
      setShowButtonFromTelegram(fromTelegram);
      setShowBtn(true);
    },
    []
  );

  const handleHideButton = useCallback(() => {
    handleBlackoutClick();
  }, []);

  const handleBlackoutClick = () => {
    setShowBtn(false);
  };

  useEffect(() => {
    addEventListener("ShowLinkButton", handleShowButton);
    return () => {
      removeEventListener("ShowLinkButton", handleShowButton);
    };
  }, [handleShowButton, addEventListener, removeEventListener]);

  useEffect(() => {
    addEventListener("HideLinkButton", handleHideButton);
    return () => {
      removeEventListener("HideLinkButton", handleHideButton);
    };
  }, [handleHideButton, addEventListener, removeEventListener]);

  return showBtn ? (
    <div>
      <LinkButton
        text={buttonText}
        url={buttonUrl}
        showButtonFromTelegram={showButtonFromTelegram}
        onBlackoutClick={handleBlackoutClick}
      />
    </div>
  ) : null;
};

export default ReactAPILinkButtonHandler;
