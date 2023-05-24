import React, { forwardRef } from "react";
import styles from "./LinkButton.module.css";

type LinkButtonProps = {
  text: string;
  showButtonFromTelegram: boolean;
  url: string;
  onBlackoutClick: () => void;
};

const LinkButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  LinkButtonProps
> = ({ text, showButtonFromTelegram, url, onBlackoutClick }, ref) => {
  const handleButtonClick = () => {
    if (showButtonFromTelegram) {
      handleWindowHref(url);
    } else {
      handleWindowOpenUrl(url, "_blank");
    }
  };

  const handleWindowHref = (url: string) => {
    console.log("href: " + url);
    setTimeout(() => {
      window.location.href = url;
    });
  };

  const handleWindowOpenUrl = (url: string, name: string) => {
    console.log("Window Open: " + url);
    setTimeout(() => {
      window.open(url, name);
    });
  };

  return (
    <div>
      <button ref={ref} className={styles.button} onClick={handleButtonClick}>
        <div className={styles.text}>{text}</div>
      </button>
      <div className={styles.blackout} onClick={onBlackoutClick} />
    </div>
  );
};

export default forwardRef<HTMLButtonElement, LinkButtonProps>(LinkButton);
