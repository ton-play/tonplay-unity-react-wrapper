import React, { useCallback, useEffect } from "react";

type ReactAPIHandlerProps = {
  addEventListener: (event: string, handler: (...args: any[]) => void) => void;
  removeEventListener: (
    event: string,
    handler: (...args: any[]) => void
  ) => void;
};

const ReactAPIHandler: React.FC<ReactAPIHandlerProps> = ({
  addEventListener,
  removeEventListener,
}) => {
  //href
  const handleWindowHref = useCallback((url: string) => {
    console.log("href: " + url);
    setTimeout(() => {
      window.location.href = url;
    });
  }, []);

  //wondow open
  const handleWindowOpenUrl = useCallback((url: string, name: string) => {
    console.log("Window Open: " + url);
    setTimeout(() => {
      window.open(url, name);
    });
  }, []);

  useEffect(() => {
    addEventListener("WindowHref", handleWindowHref);
    addEventListener("WindowsOpenUrl", handleWindowOpenUrl);

    return () => {
      removeEventListener("WindowHref", handleWindowHref);
      removeEventListener("WindowsOpenUrl", handleWindowOpenUrl);
    };
  }, [
    addEventListener,
    removeEventListener,
    handleWindowHref,
    handleWindowOpenUrl,
  ]);

  return null;
};

export default ReactAPIHandler;
