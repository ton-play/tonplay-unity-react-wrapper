# TON Play React Wrapper

TON Play allows developers to add blockchain elements to any mobile or web game. Additionally, you can port any web game to launch directly inside Telegram via a Web App.

See also:  
- [TON Play Unity SDK](https://github.com/ton-play/tonplay-unity-sdk) — this SDK allows you to get blockchain assets related to your game and to a specific user.
- [TON Play Telegram Bot](https://github.com/ton-play/tonplay-telegram-bot) — this is a simple example of a Telegram bot to run your game.

Table of contents
- [Use-cases](#use-cases)
- [Main Unity feature](#main-unity-feature)
- [Installation](#installation)
- [Quick start](#quick-start)
  - [React Wrapper Simple Test](#react-wrapper-simple-test)
  - [React Wrapper Test your build](#react-wrapper-test-your-build)
  - [React Wrapper Custom build](#react-wrapper-custom-build)
- [React Wrapper Debug Console](#react-wrapper-debug-console)
- [Custom loading screen](#custom-loading-screen)

## Use-cases

This React wrapper allows:

1. to optimize the way you launch the game in iFrame or WebApp/WebView
2. to open external links (for example, invite links or signing transactions)
3. to open Debug Console in Telegram

## Main Unity feature

<img width="694" alt="TonPlayUnityReactWrapperScreen" src="https://github.com/ton-play/tonplay-unity-react-wrapper/assets/111277652/bdb4fe9e-a476-4b61-a820-99b96eef09f3">

React Wrapper contains a set of methods that allow you to interact with the telegram API, as well as additional functions such as sharing.
You can use our wrapper for WebGL and use already implemented functions in it.
When running the game inside a wrapper, you won't have problems with the game rendering incorrectly in the iFrame.

To call wrapper functions from Unity you will need

`using ReactWrapper.ReactAPI;` - to call react functions  
`using ReactWrapper.TelegramAPI;` - to call Telegram API functions from react.

Functions in React Wrapper:

- `OpenUrl` - opens a link with the selected method
- `WindowHrefOpen` - opens a link
- `ShareData` - allows you to share a link

> **Note**
> Please note that OpenUrl and WindowHrefOpen may not work inside the built-in telegram browser, except for links with a redirect to a deep link application, such as Tonkeeper.

- `ShowLinkButton` - Sometimes it is necessary to open a deep link from a web view and it can be difficult on iOS. This solution should help in most cases to do this. The button is rendered on top of Unity.

     <img width="120" src="https://github.com/ton-play/tonplay-unity-react-wrapper/assets/111277652/f7ea28ec-7b5f-4530-ba10-654022b60b14">

- `HideReactLinkButton` - The function allows you to hide the link Button from unity if necessary

Functions in TelegramAPI

- `OpenLink` - opens a link in an external application from Telegram
- `OpenTelegramLink` - opens a link inside Telegram
- `HapticFeedback` - you can call Haptic triggers inside Telegram

> **Note**
> Please note that the functions exactly work in the Telegram app when running the game as a Web App, since Telegram API above 6.7 is supported there.

## Installation

To install the Unity Wrapper in your project, use TONPlayReactWrapper.unitypackage.

Open react-unity-webgl folder in Visual Studio Code (for example) and call npm i in terminal.

## Quick start

### React Wrapper Simple Test

1. Open `react-unity-webgl` and find `Example` folder.

<img width="325" alt="Build folder" src="https://user-images.githubusercontent.com/111277652/236257904-d5fe1e8b-b584-4629-b16c-45ec6c19979b.png">

2. For a simple site start, you can use [Servez](https://github.com/greggman/servez) ([Servez builds for different platforms](https://github.com/greggman/servez/releases/))

3. Start you site

### React Wrapper Test your build

1. For example build `6_ReactWrapper` scene for WebGL. You can try test this scene in Web browser, in Telegram game (web view) and Telegram Web App. So you will understand how different methods behave on different devices.

For ease of test launch, we suggest build with `Compression Format` `Disabled` (in Player Settings -> Publishing Settings).

When building please name the project `Game`

<img width="371" alt="Build result" src="https://user-images.githubusercontent.com/111277652/236257950-14b25891-64a7-4848-ac3f-2b527059c903.png">

2. Open `react-unity-webgl` and find `Example` folder. Put your files (`Game.data`, `Game.framework.js`, `Game.loader.js`, `Game.wasm`)

<img width="285" alt="Example folder" src="https://user-images.githubusercontent.com/111277652/236259127-30caf832-1474-487c-96ce-29158634feb7.png">

3. Start you site with [Servez](https://github.com/greggman/servez) ([Servez builds for different platforms](https://github.com/greggman/servez/releases/))

### React Wrapper Custom build

1. For example build `6_ReactWrapper` scene for WebGL. You can name build whatever you want. You can use whatever compression you want.
2. Open `react-unity-webgl` in Visual Studio Code (for example)
3. In terminal call `npm i` (You will need to install npm on your device first.)
4. Put your files ( for example `Game.data`, `Game.framework.js`, `Game.loader.js`, `Game.wasm`, maybe you will have other names ) in react-unity-webgl -> public -> `unitybuild` folder
5. In react-unity-webgl -> src -> `app.component.tsx` update code before start

<img width="600" alt="Update appName" src="https://user-images.githubusercontent.com/111277652/236259346-11e14233-bb0b-4e36-9122-968678d61fff.png">

6. If you don't have compression you can just call in terminal `npm run start` and you'll start you app in browser. Or you can make build `npm run build` and upload you app on server from `build` folder

<img width="325" alt="Build folder" src="https://user-images.githubusercontent.com/111277652/236262834-cd7fd46b-cf3b-4370-9ace-e091fc25092b.png">

### React Wrapper Debug Console

If you need a console for testing and displaying logs inside telegrams. You can enable [eruda](https://www.npmjs.com/package/eruda)

react-unity-webgl -> public -> `index.html`

If you don't need it, then just delete these lines.

```
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
    <script>
      eruda.init();
    </script>
```

<img width="445" alt="Console" src="https://user-images.githubusercontent.com/111277652/236259391-bc21606e-a0fb-4b6d-a374-8e4518e0bc13.png">

## Custom loading screen

You can modify your loading screen if you like.
An easy way to change the background, change the loading bar and add animation.

For example how to change logo:

1. Open src -> app.component.tsx
2. Remove the comment from one of the lines

`{/* <img className="img" src="/images/logo.png"></img> */}`    
or    
`{/* <img className="img" src="/images/animatedLogo.gif"></img> */}`   

<img width="800" alt="uncommit logo" src="https://github.com/ton-play/tonplay-unity-react-wrapper/assets/111277652/8d0725ff-8b9a-456a-bb26-73e0b20973b2">


3. In Visual Studio Code, do `npm i` (if you haven't done). 
4. Next, in the terminal, `npm run start` and see what the loading screen looks like in your browser.  
5. In the piblic -> Image folder, replace animatedLogo.gif or logo.png (if you want to change the logo). You can replace any pictures (we recommend using the same sizes).  

<img width="730" alt="SelectLogoImg" src="https://github.com/ton-play/tonplay-unity-react-wrapper/assets/111277652/ac04f720-ec73-40f2-be02-333777f8ae00">

6. Next, in the terminal, `npm run start` and see what the loading screen looks like in your browser now.

If you have enough experience, you can modify the loading screen as you like.
