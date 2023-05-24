using UnityEngine;
using ReactWrapper.ReactAPI;
using ReactWrapper.TelegramAPI;
using UnityEngine.UI;

public class ReactWrapperController : MonoBehaviour {
    [SerializeField]
    private Text _txtUrl;
    [SerializeField]
    private Text _txtTitle;
    [SerializeField]
    private Text _txtText;

    [Space]
    [SerializeField]
    private string _url = "https://tonplay.io/games";
    [SerializeField]
    private string _title = "TON Play";
    [TextArea]
    [SerializeField]
    private string _text = "TON Play is a toolkit that allows game developers to leverage the power of Telegram, the fastest-growing social platform with 700+ million users, and TON, its native blockchain.";
    [Space]
    [TextArea]
    [SerializeField]
    //example old link "https://app.tonkeeper.com/v1/txrequest-inline/eyJ2ZXJzaW9uIjoiMCIsImJvZHkiOnsidHlwZSI6InNpZ24tcmF3LXBheWxvYWQiLCJleHBpcmVzX3NlYyI6IjE2NzUwMjA3NzkiLCJwYXJhbXMiOnsidmFsaWRfdW50aWwiOiIxNjc1MDIwNzc5IiwibWVzc2FnZXMiOlt7ImFkZHJlc3MiOiJFUUNObUxJUE8xcGg3OEgzUnpWQ2lWU1BrbU5CLTgxU3pxUElYYWZoOVZjZHUtV3UiLCJhbW91bnQiOiIzMDAwMDAwMCIsInBheWxvYWQiOiJ0ZTZjY2dFQkFnRUFad0FCWXdBQUFCVUFBQUFBWTlhNzI0QVZ4RUc3VHNHVDc1WFJwakRva1AyUGw0SXdhRlVPOXp0Yk55eXdSemdxcTBnRGs0Y0JBUUJmRjQxRkdRQUFBQUJqMXJ2YkVCSUFWeEVHN1RzR1Q3NVhScGpEb2tQMlBsNEl3YUZVTzl6dGJOeXl3UnpncXEwRSJ9XX0sInJlc3BvbnNlX29wdGlvbnMiOnt9fX0="
    private string _linkButtonUrl = "https://app.tonkeeper.com/v1/txrequest-inline/eyJ2ZXJzaW9uIjoiMCIsImJvZHkiOnsidHlwZSI6InNpZ24tcmF3LXBheWxvYWQiLCJleHBpcmVzX3NlYyI6IjE2NzUwMjA3NzkiLCJwYXJhbXMiOnsidmFsaWRfdW50aWwiOiIxNjc1MDIwNzc5IiwibWVzc2FnZXMiOlt7ImFkZHJlc3MiOiJFUUNObUxJUE8xcGg3OEgzUnpWQ2lWU1BrbU5CLTgxU3pxUElYYWZoOVZjZHUtV3UiLCJhbW91bnQiOiIzMDAwMDAwMCIsInBheWxvYWQiOiJ0ZTZjY2dFQkFnRUFad0FCWXdBQUFCVUFBQUFBWTlhNzI0QVZ4RUc3VHNHVDc1WFJwakRva1AyUGw0SXdhRlVPOXp0Yk55eXdSemdxcTBnRGs0Y0JBUUJmRjQxRkdRQUFBQUJqMXJ2YkVCSUFWeEVHN1RzR1Q3NVhScGpEb2tQMlBsNEl3YUZVTzl6dGJOeXl3UnpncXEwRSJ9XX0sInJlc3BvbnNlX29wdGlvbnMiOnt9fX0=";
    [SerializeField]
    private string _buttonText = "Open deep link";

    private void Start() {
        _txtUrl.text = _url;
        _txtTitle.text = _title;
        _txtText.text = _text;
    }

    //React API
    public void WindowOpen() {
        ReactAPI.OpenUrl(_url, ReactWindowsOpenMethods.SELF);
    }

    public void WindowHref() {
        ReactAPI.WindowHrefOpen(_url);
    }

    public void Share() {
        ReactAPI.ShareData(_url, _text, _text);
    }

    public void ShowLinkButton() {
        ReactAPI.ShowReactLinkButton(_linkButtonUrl, _buttonText);
    }

    //Telegram API
    public void OpenLinkTelegramAPI() {
        TelegramAPI.OpenLink(_url);
    }

    public void OpenLinkInTelegramTelegramAPI() {
        TelegramAPI.OpenTelegramLink(_url);
    }

    public void HapticTelegramAPI() {
        TelegramAPI.HapticFeedback(HapticFeedbackStyles.Medium);
    }
}