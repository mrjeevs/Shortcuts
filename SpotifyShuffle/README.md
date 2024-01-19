[![Shortcut Banner](https://i.imgur.com/kwS5wNa.png)](https://www.icloud.com/shortcuts/cdd17fbf36d54efaa2796b6a510d1825)

## Table of Contents

-   [How It Works](#how-it-works)
-   [Benefits](#benefits)
-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Settings](#settings)
-   [Conclusion](#conclusion)
-   [Auto-Updater](#auto-updater)
-   [Privacy](#privacy)
-   [Credits](#credits)

## How It Works

Dive into your world of tunes with the **Spotify Shuffle** shortcut! This nifty shortcut lets you bring a touch of unpredictability to your Spotify listens. Here's how it works:

With the **Spotify Shuffle** shortcut, you curate a list of links of your favorite artists, albums, and playlists from the Spotify app and add them to the shortcut. The shortcut then randomly selects one link and shuffles the play order for you on the Spotify app.

It utilizes the Spotify API to initiate playback on your device, as there are no built-in Spotify actions in the Shortcuts app. You can also disable shuffle mode in the shortcut if you prefer to listen to your album/playlist in the specified order.

It's important to note that this shortcut does not access any Spotify profile data related to your liked artists/albums/playlists. If you want to listen to it, you need to add it to the shortcut.

## Benefits

-   Indecisive moments? Let the shortcut decide! Allow it to choose from your added music, when you're unsure, creating a delightful surprise every time.
-   If you're in the mood only for a certain artist, album, or playlist, simply add only that to the shortcut and enjoy it on repeat!
-   Easily update your music list on the fly. Whether you discover a new favorite or want to remove an old one, the shortcut lets you customize your music rotation easily.
-   Set up an automation with this shortcut! For example, a CarPlay automation that seamlessly auto-plays music when you hop into your vehicle.

## Prerequisites

![prerequisites-width-50%](https://i.imgur.com/jcRKtNV.png)

### Other Prerequisites

-   [Spotify Premium](https://www.spotify.com/us/premium/)
    -   The Spotify API only allows Spotify Premium members to initiate playback.
-   An internet connection
    -   To make requests to the Spotify API.

## Getting Started

### Spotify API Setup

This section guides you on retrieving your **Client ID, Client Secret, and Device ID** from the Spotify API, which is necessary to use the shortcut (_don't worry, it's super easy!_).

1. Go to the [Spotify API](https://developer.spotify.com/documentation/web-api) page and login to your Spotify account.
2. Visit your [dashboard](https://developer.spotify.com/dashboard) and click on the **Create app** button.
3. Fill out the details in the **Create app** page and click **Save**.
    - _App name_: Apple Shortcuts
    - _App description_: API Access For Apple Shortcuts
    - _Redirect URI_: https://mrjeevs.github.io/Shortcuts/SpotifyShuffle/
    - _Which API/SDKs are you planning to use?_: Web API
4. Click on the **Settings** button.
5. Find your **Client ID** on the screen. To get your **Client Secret**, click on **View client secret**.
    - Keep this tab open; you'll need it later.
6. Open a new tab and go to the [Get Playback State](https://developer.spotify.com/documentation/web-api/reference/get-information-about-the-users-current-playback) page.
    1. Open the Spotify app (_on the device you'll download the shortcut on_) and play any random song.
    2. Click on **Try it** on the [Get Playback State](https://developer.spotify.com/documentation/web-api/reference/get-information-about-the-users-current-playback) page.
    3. In the _Response Sample_ section, find the _**device**_ field and, underneath it, the _**id**_ field. The alphanumeric value to the right of the _**id**_ field is your **Device ID**.
        - [Image](https://i.imgur.com/cc4tLLS.png) for locating your **Device ID**, if you are lost.
7. You now have your **Client ID, Client Secret, and Device ID**. Copy these values to the device where you'll download the shortcut.

### Shortcut Setup

1. Download this shortcut to your device.
2. Go through the setup questions.
    - Paste the corresponding values for **Spotify API Settings** you found earlier.
    - The [Settings](#settings) section offers more clarification on each setting and instructions on revisiting them later.
3. After installation, run the shortcut for the first time.
    - Follow the instructions for the **New User** process.
    - _Note: Spotify may ask you to log in to ensure it's you, even with your API credentials._

## Settings

There are two setting dictionaries in this shortcut: **Spotify API Settings** and **Music Settings**. You will be presented with these settings when you first download the shortcut. And you can revisit them later (_see the [Accessing Settings In The Future](#accessing-settings-in-the-future) section_).

### Spotify API Settings

Instructions on retrieving the first three settings are in the [Getting Started](#getting-started) section.

1. **Client ID**
    - Credential to access your Spotify API app (_like a username_).
2. **Client Secret**
    - Credential to access your Spotify API app (_like a password_).
3. **Device ID**
    - Unique identifier for your device in the Spotify API database.
4. **Shuffle**
    - Enable/disable shuffle mode. By default, it is set to `True`.

### Music Settings

This is where you can add or remove artists/albums/playlist links from the shortcut.

-   **Add Music**
    1.  Tap on **Add new item**, and then **Text**.
    2.  On the left (_Key_), add the music name. On the right (_Text_), paste the Spotify link.
-   **Remove Music**
    1.  Tap the ⛔️ icon for the music you want to remove, then tap **Delete**.

### Accessing Settings In The Future

Follow these steps to revisit the above settings at any time.

1. Edit the shortcut.
    - To edit a shortcut, tap the white circle with three dots, at the top right of the shortcut.
2. Scroll down to the **Settings** section, where there are two _Dictionary_ objects.
    - The first is the **Spotify API Settings** (_usually doesn't need changes after initial setup_).
    - The second is the **Music Settings** where you can add/remove music.

Settings don't automatically transfer to new versions of this shortcut. You must manually copy/paste them over, following the above steps.

## Conclusion

And that's it! The **Spotify Shuffle** shortcut should work musically on your device. Happy jamming! 🎵

Feel free to leave any [issues](https://github.com/MrJeevs/Shortcuts/issues/new/choose) if you happen to run into unexpected errors, looking for improvements, or even let me know how it's working for you! I am more than happy to hear any feedback! You can also DM me on [Reddit](https://www.reddit.com/user/MisterJeevs) for feedback. If you prefer not to create an account or stay anonymous, submit your feedback through this [Google form](https://forms.gle/Amsoh4cFA8mJq1ue7).

## Auto-Updater

This shortcut is powered by [UpdateKit API](https://www.mikebeas.com/updatekit-api/v1). UpdateKit API is not another standalone shortcut updater but rather one that is integrated into the shortcut itself. This means installing another shortcut is unnecessary to check for updates! The updates come to you!

The Auto-Updater will only check whether there is a new update half the time. If your device is offline, the Auto-Updater will not run at all. It checks this by verifying your device's current IP address. In other words, if your device has an IP address, it means you are connected to the Internet.

Whenever a new update is received, it will prompt you to either **Install** or **Skip** the update. If you choose to **Skip** the update, the shortcut will still run as intended.

## Privacy

-   _This shortcut does not scrape for any sensitive or identifying information or install any malware on your phone_ ✅. _As always, I recommend my users to double-check every action this shortcut performs, as it is your responsibility to be 100% sure of what you are using_.
-   _If the shortcut asks for permissions to run, tap **Always Allow**. It will ask this for different shortcut actions that are used in the shortcut. You can remove these permissions from the privacy settings of the shortcut later, should you change your mind_.
-   _The UpdateKit API uses your device's model and OS version to ensure new updates are compatible with your device. If your device or OS version is not compatible with the shortcut, future updates won't be presented to you_.

## Disclaimer

_The **Spotify Shuffle** shortcut is an independent and personal fan project developed by **MrJeevs**. This shortcut is not affiliated, associated, endorsed, or sponsored by **Spotify®**. Any reference to **Spotify®** or its trademarks is purely for descriptive purposes._

_The **Spotify Shuffle** shortcut is designed to provide users with a convenient way to auto-play their favorite Spotify artists/albums/playlists. As of the time of this writing, there is no built-in action in **Apple Shortcuts** to access the Spotify app. The development and maintenance of this shortcut are solely the responsibility of **MrJeevs**, and it operates separately from the official Spotify app._

_Please note that this disclaimer is intended for informational purposes only and may be subject to updates or changes as needed._

## Credits

-   Graphics made with [MediaKit](https://routinehub.co/shortcut/1911).
