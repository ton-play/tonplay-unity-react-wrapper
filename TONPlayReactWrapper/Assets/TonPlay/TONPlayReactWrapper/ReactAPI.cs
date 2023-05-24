using System.Runtime.InteropServices;
using UnityEngine;

namespace ReactWrapper.ReactAPI {
    public class ReactAPI {
        //https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html
        [DllImport("__Internal")]
        static extern void WindowsOpenUrl(string url, string name);
        [DllImport("__Internal")]
        static extern void WindowHref(string url);

        [DllImport("__Internal")]
        static extern void Share(string url, string title, string text);

        [DllImport("__Internal")]
        static extern void ShowLinkButton(string url, string text, bool fromTelegram);
        [DllImport("__Internal")]
        static extern void HideLinkButton();

        /// <summary>
        /// Open url
        ///
        /// reactWindowsOpenMethods you can take from ReactWindowsOpenMethods class
        /// </summary>
        /// <param name="url"></param>
        /// <param name="reactWindowsOpenMethods"></param>
        public static void OpenUrl(string url, string reactWindowsOpenMethods = ReactWindowsOpenMethods.BLANK) {
#if !UNITY_EDITOR && UNITY_WEBGL
            WindowsOpenUrl(url: url, name: reactWindowsOpenMethods);
#else
            Application.OpenURL(url);
#endif
        }

        public static void WindowHrefOpen(string url) {
#if !UNITY_EDITOR && UNITY_WEBGL
            WindowHref(url: url);
#else
            Application.OpenURL(url);
#endif
        }

        public static void ShareData(string url, string title, string text) {
#if !UNITY_EDITOR && UNITY_WEBGL
            Share(url: url, title: title, text: text);
#else
            Debug.Log($"You try share url: {url}\ntitle: {title}\ntext: {text}");
#endif
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="url">link that opens when a button is clicked</param>
        /// <param name="buttonText">button text value</param>
        /// <param name="fromTelegram">If the game is running in a browser on a computer and needs to be opened in a new window, then you can set the value to false</param>
        public static void ShowReactLinkButton(string url, string buttonText, bool fromTelegram = true) {
#if !UNITY_EDITOR && UNITY_WEBGL
            ShowLinkButton(url: url, text: buttonText, fromTelegram: fromTelegram);
#else
            Debug.Log($"You try show LinkButton in Unity");
#endif
        }

        public static void HideReactLinkButton() {
#if !UNITY_EDITOR && UNITY_WEBGL
            HideLinkButton();
#else
            Debug.Log($"You try hide LinkButton in Unity");
#endif
        }
    }
}