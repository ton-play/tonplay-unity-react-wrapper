import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "src/app.module.css";
import ReactAPILinkHandler from "src/components/ReactAPILinkHandler/ReactAPILinkHandler";
import TelegramAPIHandler from "src/components/TelegramAPIHandler/TelegramAPIHandler";
import ReactAPIShareHandler from "src/components/ReactAPIShareHandler/ReactAPIShareHandler";
import ReactAPILinkButtonHandler from "src/components/ReactAPILinkButton/ReactAPILinkButtonHandler";

const appName = "Game"; //enter your app file name from public/unitybuild folder

const App = () => {
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: "/unitybuild/" + appName + ".loader.js",
    dataUrl: "/unitybuild/" + appName + ".data",
    frameworkUrl: "/unitybuild/" + appName + ".framework.js",
    codeUrl: "/unitybuild/" + appName + ".wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.unityWrapper}>
        {isLoaded === false && (
          <div className={styles.loaderContainer}>
            <div className={styles.loaderWrapper}>
              {/* <img className="img" src="/images/logo.png"></img> */}
              {/* <img className="img" src="/images/animatedLogo.gif"></img> */}
              <h1 className={styles.text}>
                Loading<span>.</span>
                <span>.</span>
                <span>.</span>
              </h1>
              <div className={styles.loadingBar}>
                <div className={styles.loadingBarFill}>
                  <div className={styles.loadingbarfillBg}>
                    <img
                      src="/images/loader-image.png"
                      className={styles.loadingbarimg}
                      style={{ width: loadingProgression * 300 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.center}>
          <ReactAPILinkButtonHandler
            addEventListener={addEventListener}
            removeEventListener={removeEventListener}
          />
        </div>
      </div>
      <ReactAPILinkHandler
        addEventListener={addEventListener}
        removeEventListener={removeEventListener}
      />
      <TelegramAPIHandler
        addEventListener={addEventListener}
        removeEventListener={removeEventListener}
      />
      <ReactAPIShareHandler
        addEventListener={addEventListener}
        removeEventListener={removeEventListener}
      />
    </div>
  );
};

export { App };
