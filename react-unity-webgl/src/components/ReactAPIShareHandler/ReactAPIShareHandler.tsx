import React, { useCallback, useEffect, useRef, useState } from "react";
import { RWebShare } from "react-web-share";

type ShareHandlerProps = {
  addEventListener: (event: string, handler: (...args: any[]) => void) => void;
  removeEventListener: (
    event: string,
    handler: (...args: any[]) => void
  ) => void;
};

const ShareHandler: React.FC<ShareHandlerProps> = ({
  addEventListener,
  removeEventListener,
}) => {
  const [shareData, setShareData] = useState({
    url: "https://google.com",
    title: "Game",
    text: "",
  });

  const handleShare = useCallback(
    (url: string, title: string, text: string) => {
      setShareData({
        url: url,
        title: title,
        text: text,
      });

      if (buttonRef.current) {
        buttonRef.current.click();
      }
    },
    []
  );

  useEffect(() => {
    addEventListener("Share", handleShare);
    return () => {
      removeEventListener("Share", handleShare);
    };
  }, [handleShare, addEventListener, removeEventListener]);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <RWebShare
        data={shareData}
        onClick={() => console.log("shared successfully!")}
      >
        <button
          ref={buttonRef}
          onClick={() => console.log("shared successfully!")}
          style={{ display: "none" }}
        ></button>
      </RWebShare>
    </div>
  );
};

export default ShareHandler;
