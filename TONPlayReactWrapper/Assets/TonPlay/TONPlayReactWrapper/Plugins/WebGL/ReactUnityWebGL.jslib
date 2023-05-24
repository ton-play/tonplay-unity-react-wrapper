mergeInto(LibraryManager.library, {
  WindowsOpenUrl: function (url, name) {
    dispatchReactUnityEvent("WindowsOpenUrl", UTF8ToString(url), UTF8ToString(name));
  },
    WindowHref: function (url) {
    dispatchReactUnityEvent("WindowHref", UTF8ToString(url));
  },
    Share: function (url, title, text) {
    dispatchReactUnityEvent("Share", UTF8ToString(url), UTF8ToString(title), UTF8ToString(text));
  },
    ShowLinkButton: function (url, text, fromTelegram) {
    dispatchReactUnityEvent("ShowLinkButton", UTF8ToString(url), UTF8ToString(text), fromTelegram);
  },
    HideLinkButton: function () {
    dispatchReactUnityEvent("HideLinkButton");
  },
  OpenLinkTelegramAPI: function (url) {
    dispatchReactUnityEvent("OpenLinkTelegramAPI", UTF8ToString(url));
  },  
  OpenTelegramLinkTelegramAPI: function (url) {
    dispatchReactUnityEvent("OpenTelegramLinkTelegramAPI", UTF8ToString(url));
  },  
  OpenHapticFeedbackTelegramAPI: function (style) {
    dispatchReactUnityEvent("OpenHapticFeedbackTelegramAPI", UTF8ToString(style));
  }
});
